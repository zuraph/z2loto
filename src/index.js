import 'react-app-polyfill/ie9';

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScrollToTop from './showcase/scrolltotop/ScrollToTop';
import { HashRouter } from 'react-router-dom';
import {Provider} from "./core";
import {store as Store} from './core/store/store'
import AppMain from "./AppMain";

ReactDOM.render(
    <Provider store={Store}>
        <HashRouter>
            <ScrollToTop>
                <React.StrictMode>
                    <AppMain/>
                </React.StrictMode>
            </ScrollToTop>
        </HashRouter>
    </Provider>
    ,
    document.getElementById('root')
);


