import {combineReducers, createStore} from "redux";
import profileReducer, {addNewPostTextAC, addPostAC, ProfilePageType} from "./profileReducer";
import dialogsReducer, {addMessageAC, addNewPostMessageAC, MessagesPageType} from "./dialogsReducer";
import sidebarReducer, {SidebarPageType} from "./sidebarReducer";
import usersReducer, {followAC, setUsersAC, unFollowAC} from "./usersReducer";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
    sidebarPage: SidebarPageType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _render: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: GeneralTypes) => void
}

export type GeneralTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof addNewPostMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>

let reducer = combineReducers({
        profileReducer,
        dialogsReducer,
        sidebarReducer,
        usersReducer
    }
)

export let store = createStore(reducer)

export type AppStateType = ReturnType<typeof reducer>
export type AppStoreType = typeof store
