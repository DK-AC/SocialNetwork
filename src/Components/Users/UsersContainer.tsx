import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {followAC, InitialStateType, setUsersAC, unFollowAC, UserType} from "../../redux/usersReducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    userPage: InitialStateType
}

type MapDispatchToPropsType = {
    followUser: (userId: string) => void
    unFollowUser: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userPage: state.usersReducer
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followUser: (userId: string) => {
            dispatch(followAC(userId))
        },
        unFollowUser: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch((setUsersAC(users)))
        }
    }
}

export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Users)