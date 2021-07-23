import React from 'react';
import {addMessage, addNewMessageText, addNewPostText, addPost, RootStateType, state, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 newPostText={state.profilePage.newPostText}
                 addNewPostText={addNewPostText}
                 addMessage={addMessage}
                 newMessageText={state.dialogsPage.newMessageText}
                 addNewMessageText={addNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)





