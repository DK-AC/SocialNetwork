import {GeneralTypes, PostsType, ProfilePageType} from "./state";
import {v1} from "uuid";

export const addPostAC = (postMessage: string) => ({type: 'ADD-POST', postMessage} as const)
export const addNewPostTextAC = (postText: string) => ({type: 'ADD-NEW-POST-TEXT', postText} as const)

const profileReducer = (state: ProfilePageType, action: GeneralTypes) => {
    switch (action.type) {
        case  'ADD-POST':
            const newPost: PostsType = {
                id: v1(),
                message: action.postMessage,
                likesCount: 2
            }
            state.posts = [...state.posts, newPost]
            break
        case'ADD-NEW-POST-TEXT':
            state.newPostText = action.postText
            break
        default:
            return state
    }
    return state
}

export default profileReducer;
