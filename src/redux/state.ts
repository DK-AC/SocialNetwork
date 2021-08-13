import {v1} from "uuid"

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
    getState: () => RootStateType
    _render: (state: RootStateType) => void
    addPost: (postMessage: string) => void
    addNewPostText: (postText: string) => void
    addMessage: (postMessage: string) => void
    addNewMessageText: (messageText: string) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: GeneralTypes) => void
}

type GeneralTypes = AddPostActionType | AddNewPostTextActionType | AddMessageActionType | AddNewPostMessageActionType

type AddPostActionType = {
    type: 'ADD-POST'
    postMessage: string
}
type AddNewPostTextActionType = {
    type: 'ADD-NEW-POST-TEXT'
    postText: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    postMessage: string
}
type AddNewPostMessageActionType = {
    type: 'ADD-NEW-MESSAGE-TEXT'
    messageText: string
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
    getState() {
        return this._state
    },
    _render() {
        console.log('render')
    },
    addPost(postMessage: string) {
        const newPost: PostsType = {
            id: v1(),
            message: postMessage,
            likesCount: 2
        }
        this._state.profilePage.posts.push(newPost)
        this._render(store._state)
    },
    addNewPostText(postText: string) {

        this._state.profilePage.newPostText = postText
        this._render(store._state)
    },
    addMessage(postMessage: string) {
        const newMessage = {
            id: v1(),
            message: postMessage,
            name: 'Denis',
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.dialogs.push(newMessage)
        this._render(store._state)
    },
    addNewMessageText(messageText: string) {
        this._state.dialogsPage.newMessageText = messageText
        this._render(store._state)
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._render = observer
    },
    dispatch(action: GeneralTypes) {
        switch (action.type) {
            case 'ADD-POST':
                const newPost: PostsType = {
                    id: v1(),
                    message: action.postMessage,
                    likesCount: 2
                }
                this._state.profilePage.posts = [...this._state.profilePage.posts, newPost]
                this._render(store._state)
                break;
            case 'ADD-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.postText
                this._render(store._state)
                break;
            case 'ADD-MESSAGE':
                const newMessage = {
                    id: v1(),
                    message: action.postMessage,
                    name: 'Denis',
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._state.dialogsPage.dialogs.push(newMessage)
                this._render(store._state)
                break
            case 'ADD-NEW-MESSAGE-TEXT':
                this._state.profilePage.newPostText = action.messageText
                this._render(store._state)
                break;
        }
    }
}
