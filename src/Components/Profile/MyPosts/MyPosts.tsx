import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {GeneralTypes, PostsType} from "../../../redux/state";
import styles from "./MyPosts.module.css";
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: GeneralTypes) => void
}

export function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.posts.map(p =>
        <Post key={p.id}
              message={p.message}
              likesCount={p.likesCount}
        />)


    const [error, serError] = useState<boolean>(false)

    const addNewPost = () => {
        const trimPost = props.newPostText.trim()
        if (trimPost) {
            props.dispatch({type: 'ADD-POST', postMessage: props.newPostText})
        } else {
            serError(true)
        }
        props.dispatch({type: 'ADD-NEW-POST-TEXT', postText: ''})
    }

    const onPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(
            {
                type: 'ADD-NEW-POST-TEXT',
                postText: event.currentTarget.value
            })
        serError(false)
    }

    const onKeyHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') addNewPost()
    }

    //если в инпут ни чего не ввели выведу ошибку
    const errorMessage = error
        ? <div className={styles.errorText}>Post should not be empty!</div>
        : null


    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
                              onChange={onPostChangeHandler}
                              onKeyPress={onKeyHandler}
                              className={error ? styles.error : ''}
                    />

                </div>
                <div>
                    <button onClick={addNewPost}>
                        Add post
                    </button>
                </div>
                {errorMessage}
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}