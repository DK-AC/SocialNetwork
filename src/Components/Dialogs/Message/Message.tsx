import styles from "../Dialogs.module.css";
import React from "react";


type MessagePropTypes = {
    id: string
    message: string
}

export function Message(props: MessagePropTypes) {
    return (
        <div>
            <div className={`${styles.dialog} `}>{props.message}
                <span className={styles.item}>
        <img
            src="https://sun9-47.userapi.com/impf/c836332/v836332013/2917f/uUbiBgHiOxk.jpg?size=1280x960&quality=96&sign=f530ce01d974dbae6fa7d069366ec512&type=album"
            alt={'son'}/>
      </span></div>

        </div>

    )
}