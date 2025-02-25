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
            text: 'v1.14',
            isLatest: true,
            isUpcoming: false,
            details: [
                {
                    secondaryText: 'Added PlayStation 1 emulation with the Lychee core (based on a modified PSXE by allkern)',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added new default emulation controllers with visually appealing blur effects',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added a new Missing Files option to the settings menu to assist with initial set up',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added new options to the App Settings screen',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added a new blurry button type to skins for skin creators',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added real world pedometer data to the Cytrus core',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added gyroscopic data to the Cytrus core',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added widgets for Last Played and Play Time',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added cached artwork for the Lychee and Mango cores',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added the ability to delete games for the Lychee and Mango cores',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Changed the Cytrus Web API option from the App Settings screen to the Cytrus Settings screen',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Changed the cards on the Library screen to be the correct aspect ratio for their respective consoles',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Fixed an issue where the Mango core would crash when no audio or video data is available',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Fixed a minor memory leak for game icons using the Grape core',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Removed swipe to tap which caused issues where the button would be stuck down',
                    tertiaryText: null
                },
            ]
        },
        {
            text: 'v1.13',
            isLatest: false,
            isUpcoming: false,
            details: [
                {
                    secondaryText: 'Added support for custom layout options for the Cytrus core',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added the ability to open the Cheats screen when in-game for the Cytrus core',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added a new log level setting for the Cytrus core to help with debugging',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added basic support for DSi mode for the Grape core by updating NooDS',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added landscape support for the Grape and Mango core on all iPhone models (iPad is WIP)',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Changed the number of columns for both Authentication and the Library screens',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Changed how the keyboard works for the Cytrus core enabling support for both iPad and iPhone',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Fixed an issue where all iPad models could not receive touch',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Fixed an issue where the on-screen controller would display again when the device orientation changes while a Bluetooth controller is connected',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Fixed a crash when installing system applications for the Cytrus core caused by applications with invalid artwork',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Fixed an issue where thumbsticks in custom skins would not use their assigned background artwork',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Fixed an issue where Nintendo DS game titles would be duplicated in the Library screen',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Updated the MoltenVK dependency which may fix some graphical issues',
                    tertiaryText: null
                },
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
                        <Button component='a' href='https://discord.gg/jv3wmCUTw7' color='violet' radius={'xl'}>Join Discord</Button>
                        <Button component='a' href='https://github.com/folium-app' color='gray' radius={'xl'} variant='filled'>Open GitHub</Button>
                        <Button component='a' href='https://github.com/emuplace/folium.emuplace.app/releases/download/v1.14/folium-sideload-v1.14.ipa.zip' color='teal' radius={'xl'} variant='filled'>Sideload (v1.14)</Button>
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