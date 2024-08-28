import {
    Blockquote, Button, Group, SimpleGrid, Space, Stack, Text, Title,
    useMantineTheme
} from '@mantine/core';
import {
    IconBrandDiscord, IconBrandGithub,
    IconExclamationCircle
} from '@tabler/icons-react';

export function HomeHero() {
    const theme = useMantineTheme();

    // const map = changes.map((change) => (
    //     <Accordion.Item value={change.id}>
    //         <Accordion.Control icon={<IconTimelineEventText size={20} />}>
    //             {change.title}
    //         </Accordion.Control>
    //         <Accordion.Panel>
    //             <List>
    //                 {change.changes.map((change) => (<List.Item>{change}</List.Item>))}
    //             </List>
    //         </Accordion.Panel>
    //     </Accordion.Item>
    // ));

    return (
        <>
            <Title c={theme.primaryColor} order={1}>
                Folium
            </Title>
            <Text c={'dimmed'}>
                Beautifully designed, high performing multi-system emulation in the palm of your hands
            </Text>
            <Space h={'md'} />
            <Group>
                <Stack gap={'sm'}>
                    <Button onClick={(event) => {
                        window.open('ipas/Folium-v1.6-Sideload.ipa.zip', '_blank');
                        event.preventDefault();
                    }} radius={'xl'} variant='default'>
                        Download
                    </Button>
                    <Text c={'dimmed'} ta={'center'}>v1.6</Text>
                </Stack>
                <Stack gap={'sm'}>
                    <Button onClick={(event) => {
                        window.open('https://apps.apple.com/us/app/folium/id6498623389', '_blank');
                        event.preventDefault();
                    }} radius={'xl'}>
                        $4.99 USD
                    </Button>
                    <Text c={'dimmed'} ta={'center'}>v1.6</Text>
                </Stack>
            </Group>
            <Space h={'xl'} />
            <Blockquote color='red' icon={<IconExclamationCircle size={30} />} iconSize={30} px={'md'} py={'md'} radius={'md'}>
                Please read the rules before interacting with the Discord server
            </Blockquote>
            <Space h={'xl'} />
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <div key={'discord'}>
                    <Title c={'violet'} order={1}>
                        <IconBrandDiscord /> Discord
                    </Title>
                    <Text c={'dimmed'}>
                        Join the Discord server and get or give help, post gameplay videos and know when the latest releases are available!
                    </Text>
                    <Space h={'md'} />
                    <Button color='violet' onClick={(event) => {
                        window.open('https://discord.gg/TqsjtpaAtk', '_blank');
                        event.preventDefault();
                    }} radius={'xl'}>
                        Accept Invitation
                    </Button>
                </div>
                <div key={'discord'}>
                    <Title order={1}>
                        <IconBrandGithub /> GitHub
                    </Title>
                    <Text c={'dimmed'}>
                        Browse the Folium codebase along with the codebase's of all cores used within the application
                    </Text>
                    <Space h={'md'} />
                    <Button onClick={(event) => {
                        window.open('https://github.com/folium-app', '_blank');
                        event.preventDefault();
                    }} radius={'xl'} variant='default'>
                        Open in GitHub
                    </Button>
                </div>
            </SimpleGrid>
            {
                /*
                <Space h={'xl'} />
            <Title order={1}>
                Upcoming (v1.4)
            </Title>
            <Text c={'dimmed'}>
                Below is a non-exhaustive list of all upcoming additions, changes and fixes coming to Folium
            </Text>
            <Space h={'md'} />
            <Accordion radius={'md'} variant="contained">
                {map}
            </Accordion>
            */
            }
        </>
    );

    /*
    return (
        <Container className={classes2.wrapper}>
            <Title className={classes.title} ta="center" mt={100}>
                Welcome to{" "}
                <Text
                    inherit
                    component="span"
                    c={'green'}>
                    Folium
                </Text>
            </Title>
            <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                Beautifully designed, high performing multi-system emulation in the palm of your hands
            </Text>
            <Space h={'xl'} />
            <Center>
                <Stack align='center'>
                    <Group>
                        <Stack align='center'>
                            <Button color={'black'} radius="xl" size="lg" variant="default" onClick={(event) => {
                                window.open('/ipas/Folium-v1.0.9-Sideload.ipa.zip', '_blank');
                                event.preventDefault();
                            }}>
                                Download
                            </Button>
                            <Text c={'dimmed'} size='md'>
                                v1.0.9 Sideload
                            </Text>
                        </Stack>
                        <Stack align='center'>
                            <Button color={'blue'} radius="xl" size="lg" variant="filled">
                                $4.99
                            </Button>
                            <Text c={'dimmed'} size='md'>
                                v1.0.9 AppStore
                            </Text>
                        </Stack>
                    </Group>
                    <Space h={'xl'} />
                    <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto">
                        Developed by <Anchor href='https://jarrodnorwell.com' target='_blank'>Jarrod Norwell</Anchor>
                    </Text>
                </Stack>
            </Center>
        </Container>
    );
    */
}