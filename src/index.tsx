import React from 'react';
import {AppStateType, store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})






