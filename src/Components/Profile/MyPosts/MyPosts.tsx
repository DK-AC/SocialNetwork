import React, {useState} from "react";
import styles from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/profileReducer";
import {TextareaForMyPosts} from "./TextareaForMyPosts";
import {log} from "util";

type PropsType = {
    posts: Array<PostsType>
    newPostText: string
    addNewPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
}


export function MyPosts(props: PropsType) {
    let postsElements = props.posts.map(p =>
        <Post key={p.id}
              message={p.message}
              likesCount={p.likesCount}
        />)


    const [error, serError] = useState<boolean>(false)

    const onAddNewPost = () => {
        const trimPost = props.newPostText.trim()
        if (trimPost) {
            props.addNewPost(props.newPostText)
        } else {
            serError(true)
        }
        props.updateNewPostText('')
    }

    const errorMessage = error ? 'Post should not be empty!' : ''

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <TextareaForMyPosts errorMessage={errorMessage}
                                        setError={serError}
                                        value={props.newPostText}
                                        onKeyPress={onAddNewPost}
                                        onChangeHandler={props.updateNewPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddNewPost}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}