import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from "./MyPosts.module.css";

type TextareaMyPostsPropsType = {
    error: boolean
    setError: (error: boolean) => void
    newPostText: string
    onAddNewPost: () => void
    updateNewPostText: (text: string) => void
}

export const TextareaForMyPosts = (props: TextareaMyPostsPropsType) => {

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(event.currentTarget.value)
        props.setError(false)
    }

    const onKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') props.onAddNewPost()
    }


    return (
        <div>
            <textarea value={props.newPostText}
                      placeholder={'enter your message'}
                      onChange={onPostChange}
                      onKeyPress={onKeyPress}
                      className={props.error ? styles.error : ''}
            />
        </div>
    )
}