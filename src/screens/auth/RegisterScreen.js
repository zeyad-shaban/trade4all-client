import { connect } from 'react-redux';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import icon from '../../assets/icon.png';
import { register } from '../../reducers/auth';
import { Link } from 'react-router-dom';

function RegisterScreen({ register, user }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    if (user) return <Redirect to='/' />;

    const handleSubmit = e => {
        e.preventDefault();
        if (password !== password2) return alert("Passwords didn't match")
        register(username, password)
    };

    return (
        <div style={{ textAlign: 'center' }} className='container'>
            <form onSubmit={handleSubmit}>
                <img className="mb-4" src={icon} alt="" width="200" height="108" />
                <h1 className="h3 mb-3 fw-normal">Register</h1>
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
                <div className="mb-3">
                    <input
                        type="password"
                        value={password2}
                        className="form-control"
                        placeholder="Password"
                        required
                        onChange={e => setPassword2(e.target.value)}
                    />
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
            </form>
            <br/>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
    );
}


const mapStateToProp = reducers => ({
    user: reducers.auth.user
});

export default connect(mapStateToProp, { register })(RegisterScreen);