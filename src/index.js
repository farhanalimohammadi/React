import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import Routes from './Main';
import { Provider } from 'react-redux';
import store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
if (!root) {
  throw new Error("Root element not found. Please check your HTML file.");
}
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Routes />
      </Provider>
    </React.StrictMode>
);


