import {v1} from "uuid"
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import {GeneralTypes, RootStateType, StoreType} from "./redux-store";


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
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._render = observer
    },
    dispatch(action: GeneralTypes) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

        this._render(store._state)
    }

}
