import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/Store.tsx';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx';
import './App.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
