import { createStore } from 'redux';
import items from '../data/items.json'

const initialState = {items};

function reducer(state = initialState, action) {
    return state;
}

const store = createStore(reducer);


export default store;