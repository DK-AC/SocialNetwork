import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from "./MyPosts.module.css";

type TextareaMyPostsPropsType = {
    errorMessage: string
    setError: (error: boolean) => void
    value: string
    onKeyPress: () => void
    onChangeHandler: (text: string) => void
}

export const TextareaForMyPosts = (props: TextareaMyPostsPropsType) => {

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(event.currentTarget.value)
        props.setError(false)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') props.onKeyPress()
    }


    return (
        <div>
            <textarea value={props.value}
                      placeholder={'enter your message'}
                      onChange={onPostChange}
                      onKeyPress={onKeyPressHandler}
                      className={!!props.errorMessage ? styles.error : ''}
            />
            {props.errorMessage && <div className={styles.errorText}>{props.errorMessage}</div>}
        </div>
    )
}