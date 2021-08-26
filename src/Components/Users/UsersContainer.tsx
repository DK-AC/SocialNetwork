import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../redux/usersReducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    userPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userPage: state.usersReducer,
        pageSize: state.usersReducer.pagesCount,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage
    }
}

type MapDispatchToPropsType = {
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followUser: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollowUser: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch((setUsersAC(users)))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch((setCurrentPageAC(currentPage)))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch((setTotalUsersCountAC(totalUsersCount)))
        }
    }
}

export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Users)