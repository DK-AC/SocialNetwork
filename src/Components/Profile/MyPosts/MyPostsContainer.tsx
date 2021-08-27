import React from "react";
import {addNewPost, PostsType, updateNewPostText} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";

type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}

type MapDispatchToPropsType = {
    addNewPost: (newPostText: string) => void,
    updateNewPostText: (text: string) => void
}

/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addNewPost: (newPostText: string) => {
            dispatch(addPost(newPostText))
        },
        updateNewPostText: (text: string) => {
            dispatch(addNewPostText(text))
        }
    }
}*/

export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps, {addNewPost, updateNewPostText})(MyPosts)
