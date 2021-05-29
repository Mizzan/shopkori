import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from 'redux-thunk';
import ProductsReducer from "./reducers/ProductsReducer"
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(thunk)

const combinedReducer = combineReducers({
    ProductsReducer
});

export const store = createStore(combinedReducer, composeWithDevTools(middleware))

// import CartReducer from "./reducers/CartReducer" ,CartReducer 
// 