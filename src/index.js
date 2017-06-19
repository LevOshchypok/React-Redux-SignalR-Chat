import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/index';
import Immutable from 'immutable';
import {fromJS} from 'immutable';



const initialStore ={
     currentDiagId:1,
   dialogues:
    [
        {id:1,name:"one", messages:[ {id:1, text:"Hello AAAAAAAAAAAAAAAAA I am Lev"}  ]},
        {id:2,name:"two", messages:[  {id:2, text:"The second message"}]}
    ]
    }
    

export let store = createStore(reducer, initialStore);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
