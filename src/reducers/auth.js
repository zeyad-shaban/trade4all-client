import authApi from '../api/auth';
import setAuthToken from '../api/setAuthToken';


export const loadUser = () => async dispatch => {
    try {
        setAuthToken();
        const { data } = await authApi.loadUser();
        dispatch({
            type: 'LOAD_USER',
            payload: data
        });
    } catch (err) {
        return dispatch({ type: 'REMOVE_USER' });
    }
};


export const register = (username, password) => async dispatch => {
    try {
        const { data: token } = await authApi.register(username, password);
        dispatch({
            type: 'SET_USER',
            payload: token
        });
        dispatch(loadUser());
    } catch (err) {
        dispatch({ type: 'REMOVE_USER' });
        return err.response ? alert(err.response.data) : alert('Internal server error 500');
    }
};


export const login = (username, password) => async dispatch => {
    try {
        const { data: token } = await authApi.login(username, password);
        dispatch({
            type: 'SET_USER',
            payload: token
        });
        dispatch(loadUser());
    } catch (err) {
        dispatch({ type: 'REMOVE_USER' });
        return err.response ? alert(err.response.data) : alert('Internal server error 500');
    }
};



const initState = {
    token: localStorage.getItem('token'),
    user: null,
    loading: true
}

export function authReducer(state = initState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'LOAD_USER':
            return { ...state, user: payload, loading: false };

        case 'SET_USER':
            localStorage.setItem('token', payload);
            return { ...state, token: payload, loading: false };

        case 'REMOVE_USER':
            localStorage.removeItem('token');
            return { user: null, token: null, loading: false };

        default:
            return state;
    }
}