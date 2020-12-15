import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import { removeProduct } from '../reducers/cart';

function CartScreen({ user, cart, loading, removeProduct, loading: loadingUser }) {
    const [paid, setPaid] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "You won't get anything from this Payment, please use a sandbox Paypal account.",
                                amount: {
                                    currency_code: "INR",
                                    value: cart.total.toFixed(1),
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setPaid(true);
                    console.log(order);
                },
                onError: (err) => {
                    //   setError(err),
                    console.error(err);
                },
            })
            .render(paypalRef.current);
    }, [paypalRef, cart.total]);

    if (loading || loadingUser) return <Loading full={true} />;
    if (!user) return <Redirect to='/register' />;

    return (
        <div className="container">
            <br />
            <h4>Total price: <span style={{ color: 'green' }}>$ {cart.total}</span></h4>
            <div ref={paypalRef}></div>
            <small className="form-text text-muted">There are problems with Paypal currently due to React, it was working with EJS before and I will fix it later</small>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {cart.products.map(product => (
                    <div key={product._id} className="col">
                        <div className="card">
                            <Link to={`/products/${product._id}`} className="card" style={{ textDecoration: 'none', color: 'black' }}>
                                <img src={product.previewUrl} className="card-img-top" alt="preview" width="354" height="268"
                                    loading="lazy" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.desc.substring(0, 100)}</p>
                                    <small className="from-text text-muted">Category: {product.category.title}</small>
                                    <span
                                        style={{ fontSize: '120%', alignSelf: 'flex-end', padding: 10, color: '#66dd62' }}>${product.price}</span>
                                </div>
                            </Link>
                            <button onClick={() => removeProduct(product._id)} className="btn btn-danger">Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const mapStateToProp = reducers => ({
    user: reducers.auth.user,
    loading: reducers.auth.loading,
    cart: reducers.cart.cart,
    loading: reducers.cart.loading
});
export default connect(mapStateToProp, { removeProduct })(CartScreen);