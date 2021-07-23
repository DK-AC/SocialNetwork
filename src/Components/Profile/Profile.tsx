import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfileType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    newPostText: string
    addNewPostText: (post: string) => void
}

export function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.newPostText}
                addNewPostText={props.addNewPostText}
            />
        </div>
    )
}