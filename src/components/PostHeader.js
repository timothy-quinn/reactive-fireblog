import React from 'react';
import { Header } from 'semantic-ui-react';

export default function PostHeader(props) {
    return (
        <Header as={'h2'}>
            {props.title}
        </Header>
    );
}
