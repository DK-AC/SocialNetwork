import {GeneralTypes, PostsType, ProfilePageType} from "./state";
import {v1} from "uuid";

const profileReducer = (state: ProfilePageType, action: GeneralTypes) => {

    if (action.type === 'ADD-POST') {
        const newPost: PostsType = {
            id: v1(),
            message: action.postMessage,
            likesCount: 2
        }
        state.posts = [...state.posts, newPost]
    } else if (action.type === 'ADD-NEW-POST-TEXT') {
        state.newPostText = action.postText
    }
    return state
}

export default profileReducer;
