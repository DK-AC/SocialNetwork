import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC, setToggleIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../redux/usersReducer";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";
import preloader from "../../assets/images/preloader.svg";

type PropsType = {
    userPage: InitialStateType
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    isFetching: boolean
    setToggleIsFetching: (isFetching: boolean) => void
}

class UsersAPIContainer extends React.Component<PropsType> {

    componentDidMount() {
        {this.props.setToggleIsFetching(true)}
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                {this.props.setToggleIsFetching(false)}
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        {this.props.setToggleIsFetching(true)}
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                {this.props.setToggleIsFetching(false)}
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <img src={preloader} alt={'preloader'}/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   userPage={this.props.userPage}
                   followUser={this.props.followUser}
                   unFollowUser={this.props.unFollowUser}
                   onPageChanged={this.onPageChanged}
            />
        </>
    }
}

type MapStateToPropsType = {
    userPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userPage: state.usersReducer,
        pageSize: state.usersReducer.pagesCount,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
    }
}

type MapDispatchToPropsType = {
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
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
        },
        setToggleIsFetching: (isFetching: boolean) => {
            dispatch((setToggleIsFetchingAC(isFetching)))
        }
    }
}

export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)