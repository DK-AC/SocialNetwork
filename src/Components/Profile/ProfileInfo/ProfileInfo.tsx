import React from "react";
import styles from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";

type PropsType = {
    profile: any
}

export function ProfileInfo(props: PropsType) {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://sun9-51.userapi.com/impg/c854428/v854428184/1d00a4/JJCBsIpslks.jpg?size=880x1320&quality=96&sign=2e6b64002a831e1079b24445036ba106&type=album"
                    alt="" width="200" height="300"/>
            </div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large} alt="photoUser"/>
                <div>{props.profile.fullName}</div>
                <div>{`Обо мне: ${props.profile.aboutMe}`}</div>
                <div> {`vk: ${props.profile.contacts.vk}`}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}