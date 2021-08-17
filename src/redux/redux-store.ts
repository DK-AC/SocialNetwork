import {createStore, combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let reducer = combineReducers({
        profileReducer,
        dialogsReducer,
        sidebarReducer
    }
)

export let store = createStore(reducer)

export type AppStateType = ReturnType<typeof reducer>
export type AppStoreType = typeof store
