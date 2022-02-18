import { createStore, applyMiddleware, compose } from 'redux';
import reducer from "../Reducer/reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, compose(
    applyMiddleware(thunk)
));

export default store;