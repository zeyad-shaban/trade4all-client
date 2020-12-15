import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import productsApi from '../api/products';
import Loading from '../components/Loading';

export default function SellScreen(props) {
    const history = useHistory();

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const [price, setPrice] = useState(99);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState(null);
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        (async () => {
            const { data } = await productsApi.getProducts();
            setCategories(data.categories);
            setCategory(data.categories[0]);
        })();
    }, []);
    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);

        let realCategory = category
        if (!category.title) realCategory = (categories.filter(c => c._id === category)[0]);

        const fd = new FormData();
        fd.append('title', title);
        fd.append('desc', desc);
        fd.append('price', price);
        fd.append('categoryId', realCategory._id);
        fd.append('categoryTitle', realCategory.title);
        fd.append('productPreview', preview);

        try {
            await productsApi.createProduct(fd);
            setLoading(false);
            return history.push('/')
        } catch (err) {
            return err.response ? alert(err.response.data) : alert("Internal server error 500, It's our fault not yours.");
        };
    };

    if (loading) return <Loading full={true} size={200} />;

    return (
        <div className="container">
            <h1>Create a product</h1>
            <form action="!#" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" name="title" placeholder="Title" className="form-control" value={title} onChange={e => setTitle(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <textarea name="desc" cols="30" rows="4" className="form-control" placeholder="Description"
                        value={desc} onChange={e => setDesc(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label>Product preview</label>
                    <input type="file" name="productPreview" onChange={e => setPreview(e.target.files[0])} required />
                </div>
                <div className="mb-3">
                    <label>Category</label>
                    <select name="category" onChange={e => setCategory(e.target.value)} required >
                        {categories.map(category => (
                            <option key={category._id} value={category._id}>{category.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label>Price</label>
                    <input type="number" name="price" className="form-control" min="1" value={price} onChange={e => setPrice(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    );
}