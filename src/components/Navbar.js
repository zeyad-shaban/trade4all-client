import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.png';
import Search from './Search';

function Navbar({ user, totalProducts }) {
    return (
        <nav className="navbar navbar-expand-xl navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={icon} alt="Trade4All" width="120" height="50" style={{ borderRadius: 25 }} />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        {user ?
                            <>
                                <li className="nav-item">
                                    <Link to='/users/me' className="nav-link active"><i className="fa fa-user-circle"
                                        style={{ fontSize: 35 }}></i>{user.username}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/cart' className="nav-link active ml-3">
                                        <i className="fas fa-shopping-cart" style={{ fontSize: 35 }} />
                                        <span style={{
                                            position: 'absolute',
                                            backgroundColor: '#E41900',
                                            padding: 10,
                                            width: 25,
                                            height: 25,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 7,
                                            bottom: 15,
                                        }}>{totalProducts}</span>
                                    </Link>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link active">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link active ml-3">Login</Link>
                                </li>
                            </>
                        }

                    </ul>
                    <Search url='/' />

                </div>
            </div>
        </nav>
    );
}

const mapStateToProp = reducers => ({
    user: reducers.auth.user,
    totalProducts: reducers.cart.totalProducts
});
export default connect(mapStateToProp)(Navbar);