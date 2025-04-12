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
            text: 'v1.19',
            isLatest: false,
            isUpcoming: true,
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
                    secondaryText: 'Fixed crashing in NewGrape (melonDS) when pressing buttons',
                    tertiaryText: null
                }
            ]
        },
        {
            text: 'v1.18',
            isLatest: true,
            isUpcoming: false,
            details: [
                {
                    secondaryText: 'Added a small "Swipe for more" footer when more than one cheat or save state',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added the ability to delete accounts',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added a new experimental NewGrape core based on melonDS 0.9.5',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added the ability to use the Nintendo DSi mode to the NewGrape with appropriate files',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Connecting a controller no longer hides the settings button',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Cytrus\' default skin on iPad and iPhone mini models now displays the correct blurred thumbsticks',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Fixed a large memory leak related to the camera when emulating with Cytrus',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Fixed a small memory leak related to file handling operations when emulating with Cytrus',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Updated Cytrus to the new SDL3 migration branch',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Updated the VulkanSDK to 1.4.309.0',
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
                        <Button component='a' href='https://github.com/emuplace/folium.emuplace.app/releases/download/v1.17/folium-sideload-v1.17.ipa.zip' color='teal' radius={'xl'} variant='filled'>Sideload (v1.17)</Button>
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
