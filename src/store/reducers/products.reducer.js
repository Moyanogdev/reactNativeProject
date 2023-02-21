import {PRODUCTS} from '../../data/products';

const initialState = {
    products: PRODUCTS,
    filterProduct: [],
    selected: null,
}

const ProductReducer = (state = initialState, action) => {
    return state
}

export default ProductReducer