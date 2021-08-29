import React from "react";
import {Profile} from "./Profile";
import {ProfileInfoType, setUserProfile} from "../../redux/profileReducer";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string,
}

type MapStateToPropsType = {
    profile: any
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileInfoType) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileAPIContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/` + userId)
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profileReducer.profile
    }
}

let WithURLDataContainerComponent = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent)
