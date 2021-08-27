import styles from "./Users.module.css";
import userImg from "../../assets/images/user.png";
import React from "react";
import {InitialStateType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    userPage: InitialStateType
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    currentPage: number
}

export const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return <span key={index}
                                 className={props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={() => props.onPageChanged(p)}
                    >
                        {p}
                        </span>

                })}
            </div>
            {props.userPage.users.map(u => {
                const followButton = () => props.followUser(u.id)
                const unFollowButton = () => props.unFollowUser(u.id)
                return (<div key={u.id}>
        <span>
            <div>
                <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small ? u.photos.small : userImg}
                     alt="ava"
                     className={styles.userPhoto}
                />
                </NavLink>
        </div>
        <div>
        {u.followed
            ? <button onClick={unFollowButton}>Unfollow</button>
            : <button onClick={followButton}>Follow</button>
        }
        </div>
        </span>
                    <span>
        <span>
            <div>{u.name}</div>
        <div>{u.status}</div>
        </span>
        <span>
        <div>{'u.location.country'}</div>
        <div>{'u.location.city'}</div>
        </span>
        </span>
                </div>)
            })}
        </div>
    )
}