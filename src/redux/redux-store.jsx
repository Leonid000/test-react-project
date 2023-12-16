
import { profileReducer } from "./Profile-Reducer";
import { dialogReducer } from "./Dialog-Reducer";
import {applyMiddleware, combineReducers} from 'redux'
import { legacy_createStore as createStore } from "redux";
import { findUsersReducer } from "./Find_Users-Reducer";
import { headerReducer } from "./Header-Reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReduser} from 'redux-form'
import LoginReducer from "./Login-Reducer";
import appReducer from "./App-Reducer";


let help = []
let help2 = 2;
let redusers = combineReducers({ 
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    findUsersPage: findUsersReducer,
    headerPage: headerReducer,
    form: formReduser,
    appPage: appReducer
})

let store = createStore(redusers,applyMiddleware(thunkMiddleware))
window.store = store;
export default store;


