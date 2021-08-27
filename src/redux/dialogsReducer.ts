import {v1} from "uuid";
import {GeneralTypes} from "./redux-store";

export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

export type DialogsType = {
    name: string
    id: string
}
export type MessagesType = {
    message: string
    id: string
}

let initialState = {
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
}


const dialogsReducer = (state: MessagesPageType = initialState, action: GeneralTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessagesType = {
                id: v1(),
                message: action.postMessage,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]

            }
        case 'ADD-NEW-MESSAGE-TEXT':
            state.newMessageText = action.messageText
            return {
                ...state, newMessageText: action.messageText
            }
        default:
            return state
    }
}

export const addMessage = (postMessage: string) => ({type: "ADD-MESSAGE", postMessage} as const)
export const addNewPostMessage = (messageText: string) => (
    {type: "ADD-NEW-MESSAGE-TEXT", messageText} as const)


export default dialogsReducer;
