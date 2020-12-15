import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
    return (
        <div className="col">
            <Link to={`/products/${product._id}`} className="card" style={{ textDecoration: 'none', color: 'black', }}>
                <div className="card">
                    <img src={product.previewUrl} className="card-img-top" alt="preview" width={354} height={268} loading="lazy" />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.desc.substring(0, 100)}</p>
                        <small className="from-text text-muted">Category: {product.category.title}</small>
                    </div>
                    <span style={{ fontSize: '120%', alignSelf: 'flex-end', padding: 10, color: '#66dd62' }}>{product.price}</span>
                </div>
            </Link>
        </div>
    );
}