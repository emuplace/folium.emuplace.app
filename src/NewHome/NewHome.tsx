import '@mantine/core/styles.css';
import {
    Accordion,
    Anchor, Badge, Button, Center, Flex,
    Group,
    List,
    MantineProvider,
    Space,
    Stack, Text, Title
} from '@mantine/core';
import { theme } from '../theme';

export default function NewHome() {
    const changes = [
        {
            text: 'Latest Changes',
            secondaryText: 'Updated 13th July 2025',
            details: [
                {
                    header: 'Added',
                    items: [
                        {
                            title: 'Added the new Cytrus (3DS) core based on Azahar',
                            subtitle: ''
                        },
                        {
                            title: 'Added the new Lychee (PS1) core based on PSXE',
                            subtitle: ''
                        },
                        {
                            title: 'Added the new Tomato (GBA) core based on NanoBoyAdvance',
                            subtitle: ''
                        },
                        {
                            title: 'Added a new onboarding process with permission requests, Sign in with Apple and file importing',
                            subtitle: ''
                        },
                        {
                            title: 'Added support for localization with English and Bahasa Indonesia currently being supported',
                            subtitle: ''
                        }
                    ]
                },
                {
                    header: 'Changed',
                    items: [
                        {
                            title: 'Changed how dependencies are handled by containing them all in a single Swift Package',
                            subtitle: ''
                        },
                        {
                            title: 'Changed the minimum supported version to iOS 18, macOS 15 and tvOS 18',
                            subtitle: 'This change is temporary and will be lowered when lower version support is reintroduced'
                        }
                    ]
                },
                {
                    header: 'Deprecated',
                    items: []
                },
                {
                    header: 'Fixed',
                    items: []
                },
                {
                    header: 'Removed',
                    items: []
                },
                {
                    header: 'Security',
                    items: []
                }
            ]
        }
    ]

    const items = changes.map((item) => {
        return (
            <Accordion.Item key={item.text} value={item.text}>
                <Accordion.Control>
                    <Group justify={'space-between'} mr={'sm'}>
                        <Text>
                            {item.text}
                        </Text>
                        <Text c={'dimmed'}>
                            {item.secondaryText}
                        </Text>
                    </Group>
                </Accordion.Control>
                <Accordion.Panel mr={'md'}>
                    {
                        item.details.map((detail, index) => (
                            <>
                                <Title order={2}>
                                    {detail.header}
                                </Title>
                                <List>
                                    {
                                        detail.items.length == 0 ? (
                                            <Text c={'dimmed'}>Unchanged</Text>
                                        ) : (
                                            detail.items.map((item) => (
                                                <List.Item>
                                                    <Text>
                                                        {item.title}
                                                    </Text>
                                                    <List.Item hidden={item.subtitle.length == 0}>
                                                        <Text c={'dimmed'}>
                                                            {item.subtitle}
                                                        </Text>
                                                    </List.Item>
                                                </List.Item>
                                            ))
                                        )
                                    }
                                </List>
                                <Space h={index == item.details.length - 1 ? 0 : 'md'} />
                            </>
                        ))
                    }
                </Accordion.Panel>
            </Accordion.Item>
        )
    })

    const date = new Date()

    return (
        <MantineProvider theme={theme} forceColorScheme={date.getHours() >= 7 && date.getHours() <= 19 ? 'light' : 'dark'}>
            <Flex align={'center'} mih={'100vh'} justify={'center'} mx={'md'}>
                <Stack>
                    <Anchor href='https://twitter.com/getfoliumapp' target={'_blank'}>
                        <Text c={theme.primaryColor} ta={'center'}>
                            @getfoliumapp
                        </Text>
                    </Anchor>
                    <Title order={1} ta={'center'}>
                        Folium, a multi-system emulation app
                    </Title>
                    <Center>
                        <Badge variant={'dot'}>
                            #a-new-beginning
                        </Badge>
                    </Center>
                    <Text c={'dimmed'} ta={'center'}>
                        Beautifully designed, high performing multi-system emulation in the palm of your hands
                    </Text>
                    <Space h={'md'} />
                    <Accordion radius={'lg'} variant={'contained'}>
                        {items}
                    </Accordion>
                    <Space h={'md'} />
                    <Center>
                        <Button component={'a'} href={'https://github.com/emuplace/folium.emuplace.app/releases'} radius={'xl'} target={'_blank'} variant={'light'}>
                            Older Releases
                        </Button>
                    </Center>
                </Stack>
            </Flex>
        </MantineProvider>
    )

    /*
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
    );*/
}
