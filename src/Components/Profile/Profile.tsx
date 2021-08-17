import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {GeneralTypes,} from "../../redux/store";
import {ProfilePageType} from "../../redux/profileReducer";


type ProfileType = {
    profile: ProfilePageType
    dispatch: (action: GeneralTypes) => void

}

export function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profile.posts}
                newPostText={props.profile.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}