import ReduxThunk from "redux-thunk"
import { createStore, applyMiddleware } from 'redux'
import {Reducer} from '../store/reducers/AgregraReducer'

const store = createStore( Reducer,applyMiddleware(ReduxThunk));

export default store;