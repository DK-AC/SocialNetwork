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
    pagesCount: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: InitialStateType = {
    users: [],
    pagesCount: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
                ...state, users: action.users
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state, currentPage: action.currentPage
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case 'SET-TOGGLE-IS-FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }

        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unFollowAC = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsersCount
} as const)
export const setToggleIsFetchingAC = (isFetching: boolean) => ({
    type: 'SET-TOGGLE-IS-FETCHING',
    isFetching
} as const)


export default usersReducer;