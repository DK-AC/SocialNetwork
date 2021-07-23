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
import {addMessage, addPost, RootStateType} from "./redux/state";
import {Friends} from "./Components/Friends/Friends";

type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
    addMessage: (postMessage: string) => void
    newPostText: string
    addNewPostText: (postText: string) => void
    newMessageText: string
    addNewMessageText: (messageText: string) => void
}

function App(props: AppPropsType) {

    let dialog = props.state.dialogsPage
    let profile = props.state.profilePage
    let sidebar = props.state.sidebarPage

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile'
                           render={() =>
                               <Profile
                                   profilePage={profile}
                                   addPost={addPost}
                                   newPostText={props.newPostText}
                                   addNewPostText={props.addNewPostText}

                               />}
                    />
                    <Route path='/dialogs'
                           render={() =>
                               <Dialogs
                                   dialogsPage={dialog}
                                   addMessage={addMessage}
                                   newMessageText={props.newMessageText}
                                   addNewMessageText={props.addNewMessageText}
                               />}
                    />
                    <Route path='/news'
                           render={() => <News/>}
                    />
                    <Route path='/music'
                           render={() => <Music/>}
                    />
                    <Route path='/settings'
                           render={() => <Settings/>}
                    />
                    <Route path='/settings'
                           render={() => <Friends
                               sidebarPage={sidebar}/>}
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
