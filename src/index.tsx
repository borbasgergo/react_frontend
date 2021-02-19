import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeContextProvider } from './comps/context/themeContextprovider';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AuthContextProvider } from './comps/context/authContextprovider';
import { BrowserRouter } from 'react-router-dom';



console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <BrowserRouter>
        <AuthContextProvider>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
