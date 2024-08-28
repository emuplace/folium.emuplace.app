import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import {
    Accordion, Badge, Container, MantineProvider,
    Space, Timeline, Text,
    Title, Grid, SimpleGrid,
    Image, Paper, ThemeIcon, Button, rem, useMantineColorScheme
} from '@mantine/core';
import {
    IconCheck, IconX, IconQuestionMark,
    IconCamera
} from '@tabler/icons-react';
import TweetEmbed from 'react-tweet-embed';
import { theme } from '../theme';
import classes from './Rewrite.module.css';

export function Header() {
    return (
        <>
            <Badge color='green' size='lg'>
                Rewrite
            </Badge>
            <Space h={'md'} />
            <Title order={1}>
                v1.7
            </Title>
            {/*
            <Space h={'md'} />
            <Title order={2}>
                System Wide
            </Title>
            <Space h={'md'} />
            <Grid>
                <Grid.Col span={{ base: 12, md: 4 }}>
                    <SimpleGrid cols={{ base: 3, md: 2 }}>
                        <Paper key={'one'} radius={'lg'} withBorder style={{ overflow: 'hidden' }}>
                            <Image src={'https://placehold.co/1290x2796?text=N/A'} />
                        </Paper>
                    </SimpleGrid>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 8 }}>
                    <Timeline bulletSize={26} lineWidth={2.2}>
                        <Timeline.Item bullet={
                            <ThemeIcon c='orange' color='clear' radius={'xl'}>
                                <IconQuestionMark size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Widgets
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'red'} mb={4} size='sm'>
                                App Store only
                            </Text>
                            <Text c={'dimmed'}>
                                TBD
                            </Text>
                            <Text size="sm" mt={4}>
                                In Progress
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item bullet={
                            <ThemeIcon c='orange' color='clear' radius={'xl'}>
                                <IconQuestionMark size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Game Center
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'red'} mb={4} size='sm'>
                                App Store only
                            </Text>
                            <Text c={'dimmed'}>
                                TBD
                            </Text>
                            <Text size="sm" mt={4}>
                                In Progress
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item bullet={
                            <ThemeIcon c='orange' color='clear' radius={'xl'}>
                                <IconQuestionMark size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Dynamic Island
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'red'} mb={4} size='sm'>
                                App Store only
                            </Text>
                            <Text c={'dimmed'}>
                                TBD
                            </Text>
                            <Text size="sm" mt={4}>
                                In Progress
                            </Text>
                        </Timeline.Item>
                    </Timeline>
                </Grid.Col>
            </Grid>
            */}

            <Space h={'md'} />
            <Title order={2}>
                Library
            </Title>
            <Space h={'md'} />
            <Grid>
                <Grid.Col span={{ base: 12, md: 4 }}>
                    <SimpleGrid cols={{ base: 3, md: 2 }}>
                        <Paper key={'one'} radius={'lg'} withBorder style={{ overflow: 'hidden' }}>
                            <Image src={'/rewrite/library.png'} />
                        </Paper>
                        <Paper key={'two'} radius={'lg'} withBorder style={{ overflow: 'hidden' }}>
                            <Image src={'/rewrite/settings.png'} />
                        </Paper>
                        <Paper key={'three'} radius={'lg'} withBorder style={{ overflow: 'hidden' }}>
                            <Image src={'/rewrite/cytrus_settings.png'} />
                        </Paper>
                        <Paper key={'four'} radius={'lg'} withBorder style={{ overflow: 'hidden' }}>
                            <Image src={'/rewrite/search.png'} />
                        </Paper>
                    </SimpleGrid>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 8 }}>
                    <Timeline bulletSize={26} lineWidth={2.2}>
                        <Timeline.Item bullet={
                            <ThemeIcon c='green' color='clear' radius={'xl'}>
                                <IconCheck size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Library
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Library is new and improved not only in design but also performance, with the new gradient blur on games with icons and random colours on games without your library never looked better, add onto that the much faster load times you'll be able to start scrolling in no time
                            </Text>
                            <Space h={'md'} />
                            <Title order={4}>
                                Artwork
                            </Title>
                            <Text c={'red'} mb={4} size='sm'>
                                App Store only
                            </Text>
                            <Text c={'dimmed'}>
                                Games got no icons? Or maybe they do but you want to change them... well now you can! Tap and hold on any game and set a custom artwork which will persist until it's removed
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item bullet={
                            <ThemeIcon c='green' color='clear' radius={'xl'}>
                                <IconCheck size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Search
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Search is now faster than ever before as it now uses regex over "contains". Search also closes near-instantly with the use of a cached library completely separate from the search library
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item bullet={
                            <ThemeIcon c='orange' color='clear' radius={'xl'}>
                                <IconQuestionMark size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Settings
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Settings are now split up into their respective cores to avoid confusion and allow for multiple changes at a time as opposed to changing one at a time
                            </Text>
                        </Timeline.Item>
                    </Timeline>
                </Grid.Col>
            </Grid>
            <Space h={'md'} />
            <Title order={2}>
                Cores
            </Title>
            <Space h={'md'} />
            <Grid>
                <Grid.Col span={{ base: 12, md: 4 }}>
                    <SimpleGrid cols={{ base: 3, md: 2 }}>
                        <Paper key={'one'} radius={'lg'} withBorder style={{ overflow: 'hidden' }}>
                            <Image src={'/rewrite/cytrus.png'} />
                        </Paper>
                        <Paper key={'two'} radius={'lg'} withBorder style={{ overflow: 'hidden' }}>
                            <Image src={'/rewrite/grape.png'} />
                        </Paper>
                        <Paper key={'three'} radius={'lg'} withBorder style={{ overflow: 'hidden' }}>
                            <Image src={'/rewrite/mango.png'} />
                        </Paper>
                    </SimpleGrid>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 8 }}>
                    <Timeline bulletSize={26} lineWidth={2.2}>
                        <Timeline.Item bullet={
                            <ThemeIcon c='orange' color='clear' radius={'xl'}>
                                <IconQuestionMark size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Nintendo 3DS
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Cytrus is the name of the Nintendo 3DS core within Folium, it is built on top of the latest Mandarine3DS source code on GitHub and supports all 3DS file formats, downloadable content, updates, game controllers, microphone input, speaker output and more
                            </Text>
                            <Space h={'md'} />
                            <Text c={'red'} size='sm'>
                                Camera, Home Menu, DLC and Updates are currently not supported by Cytrus
                            </Text>
                            <Space h={'md'} />
                            <Accordion variant='contained' classNames={classes}>
                                <Accordion.Item key={'camera'} value='Camera'>
                                    <Accordion.Control icon={<IconCamera color='orange' style={{ width: rem(20), height: rem(20) }} />}>
                                        Camera
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <Text>
                                            Cytrus now has very early camera support, the image is garbled
                                        </Text>
                                        <Space h={'md'} />
                                        <Button component='a' href='https://github.com/folium-app/Cytrus/commit/dbbfc7b6b0f049d63f1255226e90e5c3306e366c' radius={'xl'} variant='default'>
                                            GitHub Commit
                                        </Button>
                                        <Space h={'md'} />
                                        <TweetEmbed
                                            tweetId={'1828498093035397193'}
                                            options={{ theme: useMantineColorScheme().colorScheme }}
                                        />
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                            <Space h={'md'} />
                            <Button color='gray' component='a' href='https://github.com/folium-app/cytrus' radius={'xl'} variant='filled'>
                                Source Code
                            </Button>
                        </Timeline.Item>

                        <Timeline.Item bullet={
                            <ThemeIcon c='orange' color='clear' radius={'xl'}>
                                <IconQuestionMark size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Nintendo DS
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Grape is the name of the Nintendo DS core within Folium, it is built on top of the latest NooDS source code on GitHub and supports all DS file formats, game controllers, microphone input, speaker output and more
                            </Text>
                            <Space h={'md'} />
                            <Text c={'red'} size='sm'>
                                Grape will transition to melonDS at a later date, at this point in time the emulation freezes
                            </Text>
                            <Space h={'md'} />
                            <Button color='gray' component='a' href='https://github.com/folium-app/grape' radius={'xl'} variant='filled'>
                                Source Code
                            </Button>
                        </Timeline.Item>

                        <Timeline.Item bullet={
                            <ThemeIcon c='red' color='clear' radius={'xl'}>
                                <IconX size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Game Boy
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Work in Progress
                            </Text>
                        </Timeline.Item>

                        <Timeline.Item bullet={
                            <ThemeIcon c='red' color='clear' radius={'xl'}>
                                <IconX size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Game Boy Advance
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Work in Progress
                            </Text>
                        </Timeline.Item>

                        <Timeline.Item bullet={
                            <ThemeIcon c='red' color='clear' radius={'xl'}>
                                <IconX size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Game Boy Color
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Work in Progress
                            </Text>
                        </Timeline.Item>

                        <Timeline.Item bullet={
                            <ThemeIcon c='red' color='clear' radius={'xl'}>
                                <IconX size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Nintendo 64
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Work in Progress
                            </Text>
                        </Timeline.Item>

                        <Timeline.Item bullet={
                            <ThemeIcon c='red' color='clear' radius={'xl'}>
                                <IconX size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                PlayStation 1
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Work in Progress
                            </Text>
                        </Timeline.Item>

                        <Timeline.Item bullet={
                            <ThemeIcon c='orange' color='clear' radius={'xl'}>
                                <IconQuestionMark size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Super Nintendo Entertainment System
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Mango is the name of the Super Nintendo Entertainment System core within Folium, it is built on top of the latest LakeSNES source code on GitHub and supports the two most common SNES file formats, game controllers, speaker output and more
                            </Text>
                            <Space h={'md'} />
                            <Button color='gray' component='a' href='https://github.com/folium-app/mango' radius={'xl'} variant='filled'>
                                Source Code
                            </Button>
                        </Timeline.Item>

                        {/*<Timeline.Item bullet={
                            <ThemeIcon c='red' color='clear' radius={'xl'}>
                                <IconX size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                PlayStation 1
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Lychee is a new Swift Package wrapping PCSX-ReARMed using C++ to Swift interoperability
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item bullet={
                            <ThemeIcon c='orange' color='clear' radius={'xl'}>
                                <IconQuestionMark size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Nintendo 3DS
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Cytrus is a new Xcode project wrapping Citra-Enhanced using C++ to Objective-C++ to Swift interoperability. Cytrus supports load and save data and states
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item bullet={
                            <ThemeIcon c='orange' color='clear' radius={'xl'}>
                                <IconQuestionMark size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Nintendo 64
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Guava is a new Swift Package wrapping Rokuyon using C++ to Swift interoperability
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item bullet={
                            <ThemeIcon c='orange' color='clear' radius={'xl'}>
                                <IconQuestionMark size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Nintendo DS
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Grape is a new Xcode project wrapping melonDS using C++ to Objective-C++ to Swift interoperability. Grape supports load and save data and states
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item bullet={
                            <ThemeIcon c='green' color='clear' radius={'xl'}>
                                <IconCheck size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Game Boy Color
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Kiwi is a new Swift Package wrapping Gambatte using C++ to Swift interoperability. Kiwi supports custom colour palettes, load and save data and states and Game Genie and Game Shark codes
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item bullet={
                            <ThemeIcon c='red' color='clear' radius={'xl'}>
                                <IconX size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Game Boy Advance
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                TBD
                            </Text>
                        </Timeline.Item>
                        <Timeline.Item bullet={
                            <ThemeIcon c='green' color='clear' radius={'xl'}>
                                <IconCheck size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Game Boy
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'dimmed'}>
                                Kiwi is a new Swift Package wrapping Gambatte using C++ to Swift interoperability. Kiwi supports custom colour palettes, load and save data and states and Game Genie and Game Shark codes
                            </Text>
                        </Timeline.Item>*/}
                    </Timeline>
                </Grid.Col>
            </Grid>
            <Space h={'md'} />
            <Title order={2}>
                Authentication
            </Title>
            <Space h={'md'} />
            <Grid>
                <Grid.Col span={{ base: 12, md: 4 }}>
                    <SimpleGrid cols={{ base: 3, md: 2 }}>
                        <div key={'one'}>
                            <Paper key={'one'} radius={'lg'} withBorder style={{ overflow: 'hidden' }}>
                                <Image src={'/rewrite/authentication.png'} />
                            </Paper>
                            <Text size='sm'>Outdated Screenshot</Text>
                        </div>
                    </SimpleGrid>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 8 }}>
                    <Timeline bulletSize={26} lineWidth={2.2}>
                        <Timeline.Item bullet={
                            <ThemeIcon c='green' color='clear' radius={'xl'}>
                                <IconCheck size={'1rem'} stroke={2.5} />
                            </ThemeIcon>
                        } title={
                            <Title order={3}>
                                Sign in with Apple
                            </Title>
                        } lineVariant='dotted'>
                            <Text c={'red'} mb={4} size='sm'>
                                App Store only
                            </Text>
                            <Text c={'dimmed'}>
                                Sign in with Apple is an optional addition to Folium allowing users to securely sign in with their Apple Account to not only keep track of data such as times played or total time played but also communicate with other Folium users playing the same game in realtime
                            </Text>
                        </Timeline.Item>
                    </Timeline>
                </Grid.Col>
            </Grid>
        </>
    );
}


export default function Rewrite() {
    return (
        <MantineProvider theme={theme}>
            <Container my={'xl'}>
                <Header />
            </Container>
        </MantineProvider>
    );
}
