import {combineReducers, createStore} from "redux";
import profileReducer, {addNewPostTextAC, addPostAC, ProfilePageType} from "./profileReducer";
import dialogsReducer, {addMessageAC, addNewPostMessageAC, MessagesPageType} from "./dialogsReducer";
import sidebarReducer, {SidebarPageType} from "./sidebarReducer";
import usersReducer, {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow
} from "./usersReducer";

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
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setToggleIsFetching>

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
