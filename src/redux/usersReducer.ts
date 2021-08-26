import {GeneralTypes} from "./redux-store";

export type UserType = {
    id: number
    photos: { small: string, large: string }
    followed: boolean
    name: string
    status: string
    // location: { country: string, city: string }
}

export type InitialStateType = {
    users: UserType[]
}

const initialState: InitialStateType = {
    users: []
}

const usersReducer = (state: InitialStateType = initialState, action: GeneralTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId
                    ? {...u, followed: true}
                    : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId
                    ? {...u, followed: false}
                    : u)
            }
        case 'SET-USERS':
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const)


export default usersReducer;