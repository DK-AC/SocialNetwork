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
export type StoreType = {
    _state: RootStateType
    addPost: (postMessage: string) => void
    addNewPostText: (postText: string) => void
    addMessage: (postMessage: string) => void
    addNewMessageText: (messageText: string) => void
    subscribe: (callback: (state: RootStateType) => RootStateType) => void
}

export let store: StoreType = {
    _state: {
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
    },
    addPost(postMessage: string) {
        const newPost = {
            id: v1(),
            message: postMessage,
            likesCount: 2
        }
        store._state.profilePage.posts.push(newPost)
        render(store._state)
    },
    addNewPostText(postText: string) {
        store._state.profilePage.newPostText = postText
        render(store._state)
    },
    addMessage(postMessage: string) {
        const newMessage = {
            id: v1(),
            message: postMessage,
            name: 'Denis',
        }
        store._state.dialogsPage.messages.push(newMessage)
        store._state.dialogsPage.dialogs.push(newMessage)
        render(store._state)
    },
    addNewMessageText(messageText: string) {
        store._state.dialogsPage.newMessageText = messageText
        render(store._state)
    },
    subscribe(callback: (state: RootStateType) => void) {
        render = callback
    },
}


