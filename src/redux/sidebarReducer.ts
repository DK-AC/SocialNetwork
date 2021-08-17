import {GeneralTypes} from "./store";
import {v1} from "uuid";

type MyFriendsType = {
    name: string
    id: string
}
export type SidebarPageType = {
    myFriends: Array<MyFriendsType>
}

let initialState = {
    myFriends: [
        {name: 'Dima', id: v1()},
        {name: 'Artem', id: v1()},
        {name: 'Jenya', id: v1()},
    ]
}

const sidebarReducer = (state: SidebarPageType = initialState, action: GeneralTypes) => {
    return state
}

export default sidebarReducer;