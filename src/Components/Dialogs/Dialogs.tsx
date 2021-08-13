import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType, GeneralTypes} from "../../redux/state";
import {log} from "util";


type DialogsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
    dispatch: (action: GeneralTypes) => void
}

export function Dialogs(props: DialogsType) {

    const [error, serError] = useState<boolean>(false)

    let dialogsElements = props.dialogsPage.dialogs
        .map((d) => <DialogItem key={d.id} id={d.id} name={d.name}/>)

    let messagesElements = props.dialogsPage.messages
        .map((m) => <Message key={m.id} id={m.id} message={m.message}/>)

    const addNewMessage = () => {
        //Удаляю пробелы
        const trimMessage = props.newMessageText.trim()
        if (trimMessage) {
            props.dispatch(
                {type: 'ADD-MESSAGE', postMessage: props.newMessageText})
        } else {
            serError(true)
        }
        props.dispatch({type: 'ADD-NEW-MESSAGE-TEXT', messageText: ''})
    }

    const oNMessageChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(event.currentTarget.value)
        props.dispatch(
            {
                type: 'ADD-NEW-MESSAGE-TEXT', messageText: event.currentTarget.value})
        serError(false)
    }

    const onKeyHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') addNewMessage()
    }

    //если в инпут ни чего не ввели выведу ошибку
    const errorMessage = error
        ? <div className={styles.errorText}>Message should not be empty!</div>
        : null

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={styles.messages}>
                {messagesElements}
                <div>
                    <textarea
                        value={props.newMessageText}
                        onChange={oNMessageChangeHandler}
                        onKeyPress={onKeyHandler}
                        className={error ? styles.error : ''}
                    />
                </div>
                <div>
                    <button onClick={addNewMessage}>
                        Add message
                    </button>
                    {/*Вставляю ошибку*/}
                    {errorMessage}
                </div>

            </div>


        </div>
    )
}


