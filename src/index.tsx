import React from 'react';
import {RootStateType, store} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                newPostText={store._state.profilePage.newPostText}
                newMessageText={store._state.dialogsPage.newMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)







