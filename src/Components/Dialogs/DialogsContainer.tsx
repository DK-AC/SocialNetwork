import React from "react";
import {addMessageAC, addNewPostMessageAC, DialogsType, MessagesType} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

type MapDispatchToPropsType = {
    addNewMessage: (postMessage:string) => void,
    updateNewPostMessage: (message: string) => void
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsReducer.dialogs,
        messages: state.dialogsReducer.messages,
        newMessageText: state.dialogsReducer.newMessageText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addNewMessage: (postMessage) => {
            dispatch(addMessageAC(postMessage))
        },
        updateNewPostMessage: (message: string) => {
            dispatch(addNewPostMessageAC(message))
        }
    }
}

export const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
            (mapStateToProps, mapDispatchToProps)(Dialogs)
