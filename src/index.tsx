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
                 // store={store}
                // state={store.getState()}
                addPost={store.addPost.bind(store)}
                newPostText={store._state.profilePage.newPostText}
                addNewPostText={store.addNewPostText.bind(store)}
                addMessage={store.addMessage.bind(store)}
                newMessageText={store._state.dialogsPage.newMessageText}
                addNewMessageText={store.addNewMessageText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)







