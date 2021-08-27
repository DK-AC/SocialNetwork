import {v1} from "uuid";
import {GeneralTypes} from "./redux-store";

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
        case  'ADD-NEW-POST':
            const newPost: PostsType = {
                id: v1(),
                message: action.postMessage,
                likesCount: 2
            }
            return {
                ...state, posts: [...state.posts, newPost]
            }
        case'UPDATE-NEW-POST-TEXT':
            return {
                ...state, newPostText: action.postText
            }
        default:
            return state
    }
}

export const addNewPost = (postMessage: string) => ({type: 'ADD-NEW-POST', postMessage} as const)
export const updateNewPostText = (postText: string) => ({type: 'UPDATE-NEW-POST-TEXT', postText} as const)

export default profileReducer;
