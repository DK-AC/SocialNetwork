import {v1} from "uuid"

let render = (state: RootStateType) => console.log('render')

export type PostsType = {
    message: string
    id: string
    likesCount: number
}
type DialogsType = {
    name: string
    id: string
}
type MessagesType = {
    message: string
    id: string
}
type MyFriendsType = {
    name: string
    id: string
}
export type SidebarPageType = {
    myFriends: Array<MyFriendsType>
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebarPage: SidebarPageType
}

export let state = {
    profilePage: {
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
    },
    dialogsPage: {
        dialogs: [
            {name: 'DK-autochess', id: v1()},
            {name: 'Jenya', id: v1()},
            {name: 'Sasha', id: v1()},
            {name: 'Dima', id: v1()},
            {name: 'Luidmila', id: v1()},
            {name: 'Vladimir', id: v1()},
        ],
        messages: [
            {
                message: 'Hi! How are you?',
                id: v1(),
            },
            {
                message: 'Hi! Im fine!',
                id: v1(),
            },
            {
                message: 'Hi! good morning',
                id: v1(),
            },
            {
                message: 'Hi! nice to meet you?',
                id: v1(),
            },
            {
                message: 'Oh, Denis. you need help?',
                id: v1(),
            },
            {
                message: 'Good evening mr.Jonhs',
                id: v1(),
            },
        ],
        newMessageText: ''
    },
    sidebarPage: {
        myFriends: [
            {name: 'Dima', id: v1()},
            {name: 'Artem', id: v1()},
            {name: 'Jenya', id: v1()},
        ]
    }
};

export const addPost = (postMessage: string) => {
    const newPost = {
        id: v1(),
        message: postMessage,
        likesCount: 2
    }
    state.profilePage.posts.push(newPost)
    render(state)
}
export const addNewPostText = (postText: string) => {
    state.profilePage.newPostText = postText
    render(state)
}
export const addMessage = (postMessage: string) => {
    const newMessage = {
        id: v1(),
        message: postMessage,
        name: 'Denis',
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.dialogs.push(newMessage)
    render(state)
}
export const addNewMessageText = (messageText: string) => {
    state.dialogsPage.newMessageText = messageText
    render(state)
}

export const subscribe = (callback: (state: RootStateType) => void) => {
    render = callback
}



