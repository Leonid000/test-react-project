import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/main.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import {Provider} from 'react-redux'


// setInterval(()=>{
//     store.dispatch({type: 'VALERA'})
// },1000)

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
export let renderTree = () => {
    
      root.render(
    <BrowserRouter> 
        <Provider store={store}> 
            <App/>
        </Provider>
    </BrowserRouter>
      );
}
renderTree()
 