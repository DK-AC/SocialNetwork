import React from "react";
import {addMessage, addNewPostMessage, DialogsType, MessagesType} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages,
        newMessageText: state.dialogsReducer.newMessageText
    }
}

type MapDispatchToPropsType = {
    addMessage: (postMessage: string) => void,
    addNewPostMessage: (message: string) => void
}


export const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {addMessage, addNewPostMessage})(Dialogs)
