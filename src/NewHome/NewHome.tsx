import '@mantine/core/styles.css';
import {
    Anchor, Button, Flex, Group, Badge,
    MantineProvider, List, Accordion,
    Stack, Text, Title
} from '@mantine/core';
import classes from './NewHome.module.css';
import { theme } from '../theme';

export default function NewHome() {
    const changes = [
        {
            text: 'v1.12',
            isLatest: true,
            isUpcoming: false,
            details: [
                {
                    secondaryText: 'Added support for the iPad mini 7 (A17 Pro)',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added support for cheats and multiplayer to the Cytrus core',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Changed how the Import and Settings buttons appear on the Library controller',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Changed the layout of the settings within the Settings menu',
                    tertiaryText: null
                }
            ]
        },
        {
            text: 'v1.11',
            isLatest: false,
            isUpcoming: false,
            details: [
                {
                    secondaryText: 'Added support for iPhone 16 series',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Changed the Cytrus core to the latest original Citra source code',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Removed Mandarine specific settings from the Cytrus settings screen',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Update to the latest MoltenVK which should improve performance slightly',
                    tertiaryText: null
                }
            ]
        },
        {
            text: 'v1.10',
            isLatest: false,
            isUpcoming: false,
            details: [
                {
                    secondaryText: 'Added support for some missing iPad models',
                    tertiaryText: 'iPad Pro 6th Gen, iPad Pro 7th Gen'
                },
                {
                    secondaryText: 'Changed how library loading is handled to stop the game duplication issue',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Fixed an issue where connecting a physical controller would hide the entire emulation screen',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Removed the archive feature in v1.10 and later preventing the worry of lost files',
                    tertiaryText: null
                }
            ]
        }
    ];

    const items = changes.map((item) => {
        const listItems = item.details.map((detail) => (
            <List.Item>
                <Text>
                    {detail.secondaryText}
                </Text>
                <Text c={'dimmed'} size="sm" hidden={detail.tertiaryText == '' || detail.tertiaryText == null}>
                    {detail.tertiaryText}
                </Text>
            </List.Item>
        ));

        return (
            <Accordion.Item key={item.text} value={item.text}>
                <Accordion.Control>
                    <Group justify='space-between' pr={'md'}>
                        <Text>
                            {item.text}
                        </Text>
                        <Badge color={item.isLatest ? theme.primaryColor : item.isUpcoming ? 'violet' : 'red'}>
                            {item.isLatest ? 'Latest' : item.isUpcoming ? 'Upcoming' : 'Outdated'}
                        </Badge>
                    </Group>
                </Accordion.Control>
                <Accordion.Panel>
                    <List>
                        {listItems}
                    </List>
                </Accordion.Panel>
            </Accordion.Item>
        );
    });

    const date = new Date();

    return (
        <MantineProvider theme={theme} forceColorScheme={date.getHours() >= 7 && date.getHours() <= 19 ? "light" : "dark"}>
            <Flex align={'center'} justify={'center'} h={'100vh'} px={'md'} w={'100vw'}>
                <Stack>
                    <Anchor href='https://twitter.com/antique_codes' ta={'center'} target='_blank'>
                        @antique_codes
                    </Anchor>
                    <Title order={1} ta={'center'}>
                        Folium
                    </Title>
                    <Text c={'dimmed'} ta={'center'}>
                        Beautifully designed, high performing multi-system emulation in the palm of your hands
                    </Text>
                    <Flex align={'center'} gap={'md'} justify={'center'} direction={'row'} wrap={'wrap'}>
                        <Button component='a' href='https://apps.apple.com/au/app/folium/id6498623389' color='blue' radius={'xl'} variant='filled'>Open App Store</Button>
                        <Button component='a' href='https://discord.gg/jv3wmCUTw7' color='violet' radius={'xl'}>Join Discord</Button>
                        {/*<Button component='a' href='https://jarrodnorwell.gitbook.io/folium/getting-started' color='grape' radius={'xl'} variant='filled'>Getting Started</Button>*/}
                        <Button component='a' href='https://github.com/folium-app' color='gray' radius={'xl'} variant='filled'>Open GitHub</Button>
                        <Button component='a' href='https://github.com/emuplace/folium.emuplace.app/releases/download/v1.12/folium-sideload-v1.12.ipa.zip' color='teal' radius={'xl'} variant='filled'>Sideload</Button>
                    </Flex>
                    <Title order={2}>
                        Changes
                    </Title>
                    <Accordion classNames={classes} radius={'md'} variant="contained">
                        {items}
                    </Accordion>
                </Stack>
            </Flex>
        </MantineProvider>
    );
}