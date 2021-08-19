import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {GeneralTypes} from "../../redux/store";
import {addMessageAC, addNewPostMessageAC, DialogsPageType} from "../../redux/dialogsReducer";
import {AppStoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";


type DialogsType = {
    store: AppStoreType
}

export function DialogsContainer(props: DialogsType) {

    const onAddNewMessage = () => {
        props.store.dispatch(addMessageAC(props.store.getState().dialogsReducer.newMessageText))
    }

    const oNMessageChange = (message: string) => {
        props.store.dispatch(addNewPostMessageAC(message))
    }


    return (
        <Dialogs dialogsPage={props.store.getState().dialogsReducer}
                 addNewMessage={onAddNewMessage}
                 updateNewPostMessage={oNMessageChange}
        />)
}


