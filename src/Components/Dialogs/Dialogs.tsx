import React, {useState} from "react";
import styles from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType,} from "../../redux/dialogsReducer";
import {TextareaForDialogs} from "./TextareaForDialogs";


type PropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    addMessage: (postMessage: string) => void
    addNewPostMessage: (message: string) => void
}

export function Dialogs(props: PropsType) {

    const [error, setError] = useState<boolean>(false)

    let dialogsElements = props.dialogs
        .map((d) => <DialogItem key={d.id} id={d.id} name={d.name}/>)

    let messagesElements = props.messages
        .map((m) => <Message key={m.id} id={m.id} message={m.message}/>)

    const onAddNewMessage = () => {
        //Удаляю пробелы
        const trimMessage = props.newMessageText.trim()
        if (trimMessage) {
            props.addMessage(props.newMessageText)
        } else {
            setError(true)
        }
        props.addNewPostMessage('')
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
                    <TextareaForDialogs
                        error={error}
                        setError={setError}
                        newMessageText={props.newMessageText}
                        addNewMessage={onAddNewMessage}
                        updateNewPostMessage={props.addNewPostMessage}
                    />
                </div>
                <div>
                    <button onClick={onAddNewMessage}>
                        Add message
                    </button>
                    {/*Вставляю ошибку*/}
                    {errorMessage}
                </div>

            </div>


        </div>
    )
}


