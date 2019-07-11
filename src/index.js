import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './store';
import {CrossoutServiceProvider} from './components/crossout-service-context';
import CrossoutService from './services/crossout-service';

const crossoutService = new CrossoutService();

ReactDOM.render(
    <Provider store={store}>
        <CrossoutServiceProvider value={crossoutService}>
            <App />
        </CrossoutServiceProvider>
    </Provider>,
    document.getElementById('root')
);
