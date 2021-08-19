import React from "react";
import {addNewPostTextAC, addPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


export function MyPostsContainer() {

    return (
        <StoreContext.Consumer>{
            (store) => {
                const onAddNewPost = () => {
                    store.dispatch(addPostAC(store.getState().profileReducer.newPostText))
                }
                const onPostChange = (text: string) => {
                    store.dispatch(addNewPostTextAC(text))
                }

                return (
                    <MyPosts posts={store.getState().profileReducer.posts}
                             newPostText={store.getState().profileReducer.newPostText}
                             updateNewPostText={onPostChange}
                             addNewPost={onAddNewPost}
                    />)
            }}
        </StoreContext.Consumer>
    )
}