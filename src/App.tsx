import React from "react";
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {GeneralTypes} from "./redux/store";
import {Friends} from "./Components/Friends/Friends";
import {AppStateType, AppStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";

type AppPropsType = {
    state: AppStateType
    dispatch: (action: GeneralTypes) => void
    store: AppStoreType
}


const App: React.FC<AppPropsType> = (props) => {

    let sidebar = props.state.sidebarReducer

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile'
                           render={() =>
                               <Profile store={props.store}/>}
                    />
                    <Route path='/dialogs'
                           render={() =>
                               <DialogsContainer store={props.store}/>}
                    />
                    <Route path='/news'
                           render={() =>
                               <News/>}
                    />
                    <Route path='/music'
                           render={() =>
                               <Music/>}
                    />
                    <Route path='/settings'
                           render={() =>
                               <Settings/>}
                    />
                    <Route path='/settings'
                           render={() =>
                               <Friends sidebarPage={sidebar}/>}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
