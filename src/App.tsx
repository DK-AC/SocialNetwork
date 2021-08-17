import React from "react";
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {GeneralTypes} from "./redux/store";
import {Friends} from "./Components/Friends/Friends";
import {AppStateType} from "./redux/redux-store";

type AppPropsType = {
    state: AppStateType
    dispatch: (action: GeneralTypes) => void
}


const App: React.FC<AppPropsType> = (props) => {

    let dialog = props.state.dialogsReducer
    let profile = props.state.profileReducer
    let sidebar = props.state.sidebarReducer

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile'
                           render={() =>
                               <Profile profile={profile}
                                        dispatch={props.dispatch}
                               />}
                    />
                    <Route path='/dialogs'
                           render={() =>
                               <Dialogs dialogsPage={dialog}
                                        newMessageText={props.state.dialogsReducer.newMessageText}
                                        dispatch={props.dispatch}
                               />}
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
