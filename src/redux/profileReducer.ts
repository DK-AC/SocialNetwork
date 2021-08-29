import {v1} from "uuid";
import {GeneralTypes} from "./redux-store";

export type PostsType = {
    message: string
    id: string
    likesCount: number
}

export type ProfileInfoType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile?: ProfileInfoType | null
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
    newPostText: '',
    profile: null
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
        case'SET-USER-PROFILE':
            return {
                ...state, profile: action.profile
            }
        default:
            return state
    }
}

export const addNewPost = (postMessage: string) => ({type: 'ADD-NEW-POST', postMessage} as const)
export const updateNewPostText = (postText: string) => ({type: 'UPDATE-NEW-POST-TEXT', postText} as const)
export const setUserProfile = (profile: ProfileInfoType) => ({type: 'SET-USER-PROFILE', profile} as const)

export default profileReducer;
