import React from "react";
import {Profile} from "./Profile";
import {ProfilePageType, setUserProfile} from "../../redux/profileReducer";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

type PropsType = {
    setUserProfile: (profile: any) => void
    profile: any

}

class ProfileAPIContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type MapStateToPropsType = {
    profile: any
    /*   aboutMe: string,
       contacts: {
           facebook: string,
           website: string,
           vk: string,
           twitter: string,
           instagram: string,
           youtube: string,
           github: string,
           mainLink: string
       },
       lookingForAJob: boolean,
       lookingForAJobDescription: string,
       fullName: string,
       userId: number,
       photos: {
           small: string,
           large: string
       }*/
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profileReducer.profile
    }
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}

export const ProfileContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(ProfileAPIContainer)
