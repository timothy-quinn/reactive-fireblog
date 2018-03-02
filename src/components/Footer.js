import React from 'react';
import { Segment, Container, Grid, Header, List, Divider, Image } from 'semantic-ui-react';

export default function Footer() {
    return (
        <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
            <Container textAlign={'center'}>
                <Divider inverted section />
                <Image src={'/logo.png'} centered size={'mini'} />
                <List horizontal inverted divided link>
                    <List.Item as={'a'} href={'#'}>Site Map</List.Item>
                    <List.Item as={'a'} href={'#'}>Contact Us</List.Item>
                    <List.Item as={'a'} href={'#'}>Terms and Conditions</List.Item>
                    <List.Item as={'a'} href={'#'}>Privacy Policy</List.Item>
                </List>
            </Container>
        </Segment>
    );
}
