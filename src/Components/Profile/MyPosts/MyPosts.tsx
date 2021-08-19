import React, {useState} from "react";
import styles from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/profileReducer";
import {TextareaForMyPosts} from "./Textarea";

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    addNewPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
}

export function MyPosts(props: MyPostsPropsType) {
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

    //если в инпут ни чего не ввели выведу ошибку
    const errorMessage = error
        ? <div className={styles.errorText}>Post should not be empty!</div>
        : null

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <TextareaForMyPosts error={error}
                                        setError={serError}
                                        newPostText={props.newPostText}
                                        onAddNewPost={onAddNewPost}
                                        updateNewPostText={props.updateNewPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddNewPost}>
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