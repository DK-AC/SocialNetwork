import React from "react";
import {addNewPostTextAC, addPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {AppStoreType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    newPostText: string
    store:AppStoreType
}

export function MyPostsContainer(props: MyPostsPropsType) {

    const onAddNewPost = () => {
        props.store.dispatch(addPostAC(props.newPostText))
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(addNewPostTextAC(text))

    }

    return (
        <MyPosts posts={props.store.getState().profileReducer.posts}
                 newPostText={props.newPostText}
                 updateNewPostText={onPostChange}
                 addNewPost={onAddNewPost}
        />
    )
}