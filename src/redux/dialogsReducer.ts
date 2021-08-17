import {DialogsPageType, GeneralTypes} from "./state";
import {v1} from "uuid";

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
    }
    return state
}


export default dialogsReducer;