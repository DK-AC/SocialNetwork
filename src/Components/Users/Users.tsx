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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void

}

export class Users extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        //console.log('this.props.totalUsersCount: ', this.props.totalUsersCount)
        //console.log(' this.props.pageSize: ',  this.props.pageSize)
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages: number[] = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        //console.log(pages)


        return (
            <div>
                <div>
                    {pages.map((p, index) => {
                        return <span key={p}
                                     className={this.props.totalUsersCount === p ? styles.selectedPage : ''}
                                     onClick={() => this.onPageChanged(p)}
                        >
                            {p}
                    </span>

                    })}
                </div>
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

