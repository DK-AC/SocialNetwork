import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {GeneralTypes,} from "../../redux/store";
import {ProfilePageType} from "../../redux/profileReducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppStoreType} from "../../redux/redux-store";


type ProfileType = {
    profile: ProfilePageType
    dispatch: (action: GeneralTypes) => void
    store:AppStoreType

}

export function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                newPostText={props.profile.newPostText}
                store={props.store}
            />
        </div>
    )
}