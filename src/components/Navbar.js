import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.png'

function Navbar(props) {
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
                        <li className="nav-item">
                            <a className="nav-link active" href="/users/me"><i className="fa fa-user-circle"
                                style={{ fontSize: 35 }}></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active ml-3" href="/cart"><i className="fas fa-shopping-cart" style={{ fontSize: 35 }} /></a>
                        </li>

                    </ul>
                    <form className="d-flex" action="/" method='GET'>
                        <input className="form-control mr-2" name='q' type="search" placeholder="Search" aria-label="Search"
                            style={{ width: '40vw' }} />
                        <button className="btn btn-primary" type="submit"><i className="fas fa-search" style={{ fontSize: 25 }} /></button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;