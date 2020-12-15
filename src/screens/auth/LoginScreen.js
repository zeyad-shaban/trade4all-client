import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import icon from '../../assets/icon.png';
import { login } from '../../reducers/auth';

function LoginScreen({ login, user }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    if (user) return <Redirect to='/' />
    const handleSubmit = e => {
        e.preventDefault();
        login(username, password);
    };

    return (
        <div style={{ textAlign: 'center' }} className='container'>
            <form onSubmit={handleSubmit}>
                <img className="mb-4" src={icon} alt="" width="200" height="108" />
                <h1 className="h3 mb-3 fw-normal">Login</h1>
                <div className="mb-3">
                    <input type="text"
                        value={username}
                        className="form-control"
                        placeholder="Username"
                        required
                        autoFocus
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        value={password}
                        className="form-control"
                        placeholder="Password"
                        required
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
            </form>
            <br/>
            <p>Don't have an account yet? <Link to='/register'>register</Link></p>
        </div>
    );
}

const mapStateToProp = reducers => ({
    user: reducers.auth.user
})
export default connect(mapStateToProp, { login })(LoginScreen);