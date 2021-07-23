import React from "react";
import styles from './Post.module.css';

type PostPropTypes = {
    message: string
    likesCount: number
}

export function Post(props: PostPropTypes) {
    return (
        <div className={styles.item}>
            <img
                src="https://sun9-32.userapi.com/impf/c846017/v846017936/61a86/7cJTnOgqmw4.jpg?size=1280x786&quality=96&sign=5b6717b7b354a764c658e4c187118e5d&type=album"
                alt={"avatar"}/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}