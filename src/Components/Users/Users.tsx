import React from "react";
import {v1} from "uuid";
import {InitialStateType, UserType} from "../../redux/usersReducer";
import styles from "./Users.module.css";

type PropsType = {
    userPage: InitialStateType
    followUser: (userId: string) => void
    unFollowUser: (userId: string) => void
    setUsers: (users: UserType[]) => void

}

export const Users = (props: PropsType) => {

    if (props.userPage.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoURL: 'https://sun9-47.userapi.com/impg/c857720/v857720660/119b4a/OZIbqyF77PE.jpg?size=585x1040&quality=96&sign=97012606f8efb3ed5e147cb6f185c4c1&type=album',
                followed: true,
                fullName: 'Denis',
                status: 'Hello World',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: v1(),
                photoURL: 'https://sun9-44.userapi.com/impg/dwKC0dgKEgUQHlHrF6HKJy1US5E1IodKv4fJ-A/wZ0-nIsdiCU.jpg?size=810x1080&quality=96&sign=7894965d9489f8631a438de6edebe961&type=album',
                followed: false,
                fullName: 'Sasha',
                status: 'Hello World',
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: v1(),
                photoURL: 'https://sun9-47.userapi.com/impf/c836332/v836332013/2917f/uUbiBgHiOxk.jpg?size=1280x960&quality=96&sign=f530ce01d974dbae6fa7d069366ec512&type=album',
                followed: true,
                fullName: 'Jenya',
                status: 'Hello World',
                location: {country: 'Ukraine', city: 'Kiev'}
            }]
        )
    }
    return (
        <div>
            {props.userPage.users.map(u => {

                const followButton = () => props.followUser(u.id)
                const unFollowButton = () => props.unFollowUser(u.id)

                return (<div key={u.id}>
                   <span>
                       <div>
                           <img src={u.photoURL}
                                alt="ava"
                                className={styles.userPhoto}
                           />
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
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                       </span>
                       <span>
                           <div>{u.location.country}</div>
                           <div>{u.location.city}</div>
                       </span>
                   </span>
                </div>)
            })}
        </div>
    )
}

