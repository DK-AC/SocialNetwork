import React from "react";
import {SidebarPageType} from "../../redux/state";

type SidebarType = {
    sidebarPage: SidebarPageType
}

export function Friends(props: SidebarType) {
    let sidebarElements = props.sidebarPage.myFriends[1].name

    return (
        <div>
            {sidebarElements}
        </div>
    )
}