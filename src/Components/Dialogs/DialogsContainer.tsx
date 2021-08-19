import React from "react";
import {addMessageAC, addNewPostMessageAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export function DialogsContainer() {

    return (
        <StoreContext.Consumer>{(store) => {
                const onAddNewMessage = () => {
                    store.dispatch(addMessageAC(store.getState().dialogsReducer.newMessageText))
                }

                const oNMessageChange = (message: string) => {
                    store.dispatch(addNewPostMessageAC(message))
                }

                return (
                    <Dialogs dialogsPage={store.getState().dialogsReducer}
                             addNewMessage={onAddNewMessage}
                             updateNewPostMessage={oNMessageChange}
                    />)
            }}
        </StoreContext.Consumer>
    )
}
