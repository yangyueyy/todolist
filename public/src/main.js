import React, {Component} from "react";
import {render} from "react-dom";
import App from "./containers/app";
import reducer from './reducers/reducer';
import {Provider} from 'react-redux';
import {createStore} from "redux"

const store=createStore(reducer);
render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('app'));

