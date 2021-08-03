import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {PostsType} from "../../../redux/state";
import styles from "./MyPosts.module.css";
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
    newPostText: string
    addNewPostText: (post: string) => void
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
            props.addPost(props.newPostText)
        } else {
            serError(true)
        }
        props.addNewPostText('')
    }

    const onPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.addNewPostText(event.currentTarget.value)
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
                    <textarea
                        value={props.newPostText}
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