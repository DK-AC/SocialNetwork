import {DialogsPageType, GeneralTypes} from "./state";
import {v1} from "uuid";

export const addMessageAC = (postMessage: string) => ({type: "ADD-MESSAGE", postMessage} as const)
export const addNewPostMessageAC = (messageText: string) => (
    {type: "ADD-NEW-MESSAGE-TEXT", messageText} as const)

const dialogsReducer = (state: DialogsPageType, action: GeneralTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {
                id: v1(),
                message: action.postMessage,
                name: 'Denis',
            }
            state.messages.push(newMessage)
            state.dialogs.push(newMessage)
            break;
        case 'ADD-NEW-MESSAGE-TEXT':
            state.newMessageText = action.messageText
            break;
        default:
            return state
    }
    return state
}


export default dialogsReducer;
