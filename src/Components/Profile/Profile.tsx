import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppStoreType} from "../../redux/redux-store";


type ProfileType = {
    store: AppStoreType

}

export function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                newPostText={props.store.getState().profileReducer.newPostText}
                store={props.store}
            />
        </div>
    )
}