import { Container, Group, ActionIcon, Title } from '@mantine/core';
import {
    IconBrandReddit, IconBrandTwitch,
    IconBrandTwitter, IconBrandYoutube
} from '@tabler/icons-react';
import classes from './HomeFooter.module.css';

export function HomeFooter() {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Title order={2}>
                    Folium
                </Title>
                <Group className={classes.links} justify="flex-end" wrap="nowrap">
                    {/*<ActionIcon onClick={(event) => {
                        window.open('https://youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                        event.preventDefault();
                    }} color='blue' size="lg" variant="transparent">
                        <IconBrandOnlyfans style={{ width: '70%', height: '70%' }} stroke={2} />
                </ActionIcon>*/}
                    <ActionIcon onClick={(event) => {
                        window.open('https://reddit.com/u/antique_codes', '_blank');
                        event.preventDefault();
                    }} color='orange' size="lg" variant="transparent">
                        <IconBrandReddit style={{ width: '70%', height: '70%' }} stroke={2} />
                    </ActionIcon>
                    <ActionIcon onClick={(event) => {
                        window.open('https://twitch.tv/antique_codes', '_blank');
                        event.preventDefault();
                    }} color='violet' size="lg" variant="transparent">
                        <IconBrandTwitch style={{ width: '70%', height: '70%' }} stroke={2} />
                    </ActionIcon>
                    <ActionIcon onClick={(event) => {
                        window.open('https://twitter.com/antique_codes', '_blank');
                        event.preventDefault();
                    }} color='blue' size="lg" variant="transparent">
                        <IconBrandTwitter style={{ width: '70%', height: '70%' }} stroke={2} />
                    </ActionIcon>
                    <ActionIcon onClick={(event) => {
                        window.open('https://www.youtube.com/@antique_plays', '_blank');
                        event.preventDefault();
                    }} color='red' size="lg" variant="transparent">
                        <IconBrandYoutube style={{ width: '70%', height: '70%' }} stroke={2} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}