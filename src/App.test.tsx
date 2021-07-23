import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {addMessage, addNewMessageText, addNewPostText, addPost, state} from "./redux/state";

test('renders learn react link', () => {
    render(<App addNewMessageText={addNewMessageText}
                newMessageText={''}
                addNewPostText={addNewPostText}
                newPostText={''}
                state={state}
                addPost={addPost}
                addMessage={addMessage}
    />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
