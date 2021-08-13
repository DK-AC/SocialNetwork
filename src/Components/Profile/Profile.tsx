import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {GeneralTypes, ProfilePageType} from "../../redux/state";


type ProfileType = {
    profilePage: ProfilePageType
    newPostText: string
    dispatch: (action: GeneralTypes) => void

}

export function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}