import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from "./Dialogs.module.css"

type TextareaDialogsPropsType = {
    error: boolean
    setError: (error: boolean) => void
    newMessageText: string
    addNewMessage: () => void
    updateNewPostMessage: (text: string) => void
}

export const TextareaForDialogs = (props: TextareaDialogsPropsType) => {

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostMessage(event.currentTarget.value)
        props.setError(false)
    }

    const onKeyHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') props.addNewMessage()
    }


    return (
        <div>
            <textarea value={props.newMessageText}
                      placeholder={'enter your message'}
                      onChange={onNewMessageChange}
                      onKeyPress={onKeyHandler}
                      className={props.error ? styles.error : ''}
            />
        </div>
    )
}