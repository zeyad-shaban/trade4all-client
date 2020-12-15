import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import productsApi from '../api/products';
import Product from '../components/Product';
import Loading from '../components/Loading';

function HomeScreen(props) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const { data } = await productsApi.getProducts();
                setProducts(data.products);
                setCategories(data.categories);
            } catch (err) {
                console.error(err);
            }
            setLoading(false);
        })();
    }, [props.match.params]);
    if (loading) return <Loading full={true} />
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-xl navbar-expand-lg navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {categories.map(category => (
                                <li key={category._id} className="nav-item">
                                    <Link to={`/?categoryId=${category._id}`} className="nav-link">{category.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <Link to="/products/sell" className="btn btn-success">+ Sell</Link>
                <hr />
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {products.map(product => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;