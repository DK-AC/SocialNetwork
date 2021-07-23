import React from "react";
import styles from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src="https://sun9-51.userapi.com/impg/c854428/v854428184/1d00a4/JJCBsIpslks.jpg?size=880x1320&quality=96&sign=2e6b64002a831e1079b24445036ba106&type=album"
                    alt="" width="200" height="300"/>
            </div>
            <div className={styles.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}