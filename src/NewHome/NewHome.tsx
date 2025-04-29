import '@mantine/core/styles.css';
import {
    Anchor, Button, Flex, Group, Badge,
    MantineProvider, List, Accordion,
    Stack, Text, Title,
    Container
} from '@mantine/core';
import classes from './NewHome.module.css';
import { theme } from '../theme';

export default function NewHome() {
    const changes = [
        {
            text: 'v1.20',
            isLatest: true,
            isUpcoming: false,
            details: [
                {
                    secondaryText: '(Cytrus) Added Azahar settings to the settings screen',
                    tertiaryText: null
                },
                {
                    secondaryText: '(Cytrus) Added support for the left and right rear cameras',
                    tertiaryText: 'Left uses Telephoto, right uses Wide (Main)'
                },
                {
                    secondaryText: '(Cytrus) Added a new screen for multiplayer rooms',
                    tertiaryText: null
                },
                {
                    secondaryText: '(Lychee) Added support for booting exe files',
                    tertiaryText: 'These are mainly used for testing PlayStation 1 emulators'
                },
                {
                    secondaryText: 'Changed the layout of the import games and settings menus',
                    tertiaryText: null
                },
                {
                    secondaryText: '(All) Changed skins so they actually work with Nintendo and PlayStation button names',
                    tertiaryText: null
                },
                {
                    secondaryText: '(All) Changed how emulation notifications are handled for application state and controller connections',
                    tertiaryText: null
                },
                {
                    secondaryText: '(Cytrus) Changed the core from Cytrus to CytrusAzahar',
                    tertiaryText: null
                },
                {
                    secondaryText: '(Cytrus) Changed how the settings screen is handled',
                    tertiaryText: null
                },
                {
                    secondaryText: '(Cytrus) Changed how multiplayer rooms are handled',
                    tertiaryText: null
                },
                {
                    secondaryText: '(Grape) Changed how the settings screen is handled',
                    tertiaryText: null
                },
                {
                    secondaryText: '(All) Fixed an issue where changing orientation would remove the settings button\'s menu',
                    tertiaryText: null
                },
                {
                    secondaryText: '(Lychee) Fixed an issue where rendering would be broken when in 24-bit mode',
                    tertiaryText: 'This mainly affects MDEC videos'
                },
                {
                    secondaryText: '(Lychee) Fixed a crash related to the RGB24 rendering mode',
                    tertiaryText: null
                }
            ]
        },
        {
            text: 'v1.19',
            isLatest: false,
            isUpcoming: false,
            details: [
                {
                    secondaryText: 'Added haptic feedback when loading and saving states when emulating with Cytrus, Grape and NewGrape, feedback is different for a failed or successful load or save',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added the ability to load and save states to the NewGrape core (melonDS)',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added audio output support for the NewGrape core (melonDS)',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added HQx upscaling support for the Grape and NewGrape cores',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Fixed crashing in NewGrape (melonDS) when pressing buttons',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Fixed minor errors related to the C and CXX dialect update below',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Updated all packages and targets to c2x and cxx2b',
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
            <Container my={'xl'}>
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
                        <Button component='a' href='https://reddit.com/r/foliumapp' color='red' radius={'xl'}>Join Reddit</Button>
                        <Button component='a' href='https://github.com/folium-app' color='gray' radius={'xl'} variant='filled'>Open GitHub</Button>
                        <Button component='a' href='https://github.com/emuplace/folium.emuplace.app/releases/download/v1.20/folium-sideload-v1.20.ipa.zip' color='teal' radius={'xl'} variant='filled'>Sideload (v1.20)</Button>
                    </Flex>
                    <Title order={2}>
                        Changes
                    </Title>
                    <Accordion classNames={classes} radius={'md'} variant="contained">
                        {items}
                    </Accordion>
                </Stack>
            </Container>
        </MantineProvider>
    );
}
