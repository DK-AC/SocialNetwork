import React from "react";
import {addNewPostTextAC, addPostAC, PostsType} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}

type MapDispatchToPropsType = {
    addNewPost: (newPostText: string) => void,
    updateNewPostText: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addNewPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
            /*store.dispatch(addPostAC(store.getState().profileReducer.newPostText))*/
        },
        updateNewPostText: (text: string) => {
            dispatch(addNewPostTextAC(text))
        }
    }
}

export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)
