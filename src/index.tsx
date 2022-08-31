// Copyright Paylancers 💳 2022 
// 17 U.S.C §§ 101-1511

// relevant modules and files
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';

// styles
import './index.css';

// building block
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
     <Provider store={store}>
       <App />
     </Provider>
    </React.StrictMode>

);

