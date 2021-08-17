import {GeneralTypes} from "./store";
import {v1} from "uuid";

export type PostsType = {
    message: string
    id: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}


let initialState = {
    posts: [
        {
            message: 'Hi! How Are You?',
            id: v1(),
            likesCount: 12,
        },
        {
            message: "It's my first post",
            id: v1(),
            likesCount: 12,
        },
    ],
    newPostText: ''
}


const profileReducer = (state: ProfilePageType = initialState, action: GeneralTypes): ProfilePageType => {
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

export const addPostAC = (postMessage: string) => ({type: 'ADD-POST', postMessage} as const)
export const addNewPostTextAC = (postText: string) => ({type: 'ADD-NEW-POST-TEXT', postText} as const)

export default profileReducer;
