import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import TestReacti18next from './components/testReactI18next';
import './i18n';

ReactDOM.render(
    <Provider store={store}>
        {/* <App /> */}
        <TestReacti18next />
    </Provider>,
    document.getElementById('root')
);