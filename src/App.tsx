import React from "react";
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Friends} from "./Components/Friends/Friends";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";


const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile/:userId?'
                           render={() =>
                               <ProfileContainer/>}
                    />
                    <Route path='/dialogs'
                           render={() =>
                               <DialogsContainer/>}
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
                               <Friends/>}
                    />
                    <Route path='/users'
                           render={() =>
                               <UsersContainer/>}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
