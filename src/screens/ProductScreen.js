import React from 'react';
import { connect } from 'react-redux';

import useApi from '../hooks/useApi';
import productsApi from '../api/products';
import useCountry from '../hooks/useCountry';
import Loading from '../components/Loading';
import Product from '../components/Product';
import { Redirect } from 'react-router';
import { buyProduct } from '../reducers/cart';

function ProductScreen({ user, loading: loadingUser, match, buyProduct }) {
    const { data: product, loading } = useApi(() => (productsApi.getProduct(match.params.id)));
    const { country, city } = useCountry();


    if (loading || loadingUser) return <Loading full={true} />;
    if (!user) return <Redirect to='/register' />;

    return (
        <div className='container'>
            <div className="card col-md-5 float-left mr-4">
                <Product product={product} />
            </div>

            <div className="card col-md-6 mt-5">
                <h5 className="card-header" id="shippedTo">Ship to {country}/{city}</h5>
                <div className="card-body">
                    <button onClick={() => buyProduct(product._id)} className="btn btn-warning btn-lg">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProp = reducers => ({
    user: reducers.auth.user,
    loading: reducers.auth.loading,
});
export default connect(mapStateToProp, { buyProduct })(ProductScreen);