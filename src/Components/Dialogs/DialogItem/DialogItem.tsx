import React from "react";
import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropTypes = {
    id: string
    name: string
}


export function DialogItem(props: DialogItemPropTypes) {
    return (
        <div>
            <span className={styles.item}>
        <img
            src="https://sun9-44.userapi.com/impg/dwKC0dgKEgUQHlHrF6HKJy1US5E1IodKv4fJ-A/wZ0-nIsdiCU.jpg?size=1200x1600&quality=96&sign=b3a9765617c0f3cb16c76fc345038ccd&type=album"
            alt={'son'}/>
      </span>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}