import React from "react";
import {InitialStateType, UserType} from "../../redux/usersReducer";
import styles from "./Users.module.css";
import axios from "axios";
import userImg from '../../assets/images/user.png'

type PropsType = {
    userPage: InitialStateType
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void

}

export class Users extends React.Component<PropsType> {
    getUser = () => {
        if (this.props.userPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {

        return (
            <div>
                <button onClick={this.getUser}>Get users</button>
                {this.props.userPage.users.map(u => {
                    const followButton = () => this.props.followUser(u.id)
                    const unFollowButton = () => this.props.unFollowUser(u.id)
                    return (<div key={u.id}>
                   <span>
                       <div>
                           <img src={u.photos.small ? u.photos.small : userImg}
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
}

