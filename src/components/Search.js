import React, { useState } from 'react';
import { useHistory } from 'react-router';

function Search({ url }) {
    const history = useHistory()
    const [query, setQuery] = useState('')

    const onSubmit = e => {
        e.preventDefault()
        history.push({pathname: url, search:`q=${query}`})
    }
    return (
        <form className="d-flex" method='GET' onSubmit={onSubmit}>
            <input className="form-control mr-2" value={query} type="search" placeholder="Search" 
                style={{ width: '30vw' }} onChange={e => setQuery(e.target.value)} />
            <button className="btn btn-primary" type="submit"><i className="fas fa-search" style={{ fontSize: 25 }} /></button>
        </form>
    );
}

export default Search;