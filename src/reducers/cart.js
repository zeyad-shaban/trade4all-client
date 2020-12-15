import cartApi from '../api/cart';

export const loadCart = () => async dispatch => {
    try {
        const { data: cart } = await cartApi.getCart();
        dispatch({
            type: 'LOAD_CART',
            payload: cart
        });
    } catch (err) {
    }
};

export const buyProduct = id => async dispatch => {
    try {
        const { data } = await cartApi.buyProduct(id);
        dispatch({
            type: 'BUY_PRODUCT',
            payload: data
        });
    } catch (err) {
        console.error(err);
        alert('error occured');
    }
};

export const removeProduct = id => async dispatch => {
    try {
        const { data } = await cartApi.removeProduct(id);
        dispatch({
            type: 'REMOVE_PRODUCT',
            payload: data
        });

    } catch (err) {
    }
};

const initialState = {
    totalProducts: 0,
    cart: {
        products: [],
        total: 0
    },
    loading: true
};
export function cartReducer(state = initialState, action) {
    const { type, payload } = action;


    switch (type) {
        case 'LOAD_CART':
        case 'BUY_PRODUCT':
        case 'REMOVE_PRODUCT':
            return { totalProducts: payload.products.length || 0, cart: payload, loading: false };
        default:
            return state;
    }
}