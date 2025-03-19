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
            text: 'v1.17',
            isLatest: true,
            isUpcoming: false,
            details: [
                {
                    secondaryText: 'Added a new middle-man screen for 3DS games containing information about the game, it\'s cheats and save states (if any) and play and delete buttons',
                    tertiaryText: 'This screen is only available for iPhone right now'
                },
                {
                    secondaryText: 'Added support for the iPhone 16e and latest iPad models',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added more information to 3DS games and added save state validation',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added the ability to delete cheats and save states and toggle cheats in the middle-man screen',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Fixed an issue where load and save state buttons would not have an identifying image on iOS 17 or below due to incorrect SF Symbol names',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Fixed an issue where "force touching" the settings button during emulation would not bring up the menu the first time',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Fixed an issue where cheats for 3DS games would show for games that were not the currently selected one',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Reverted to a clean build of Citra (Cytrus) improving performance with the latest MoltenVK',
                    tertiaryText: null
                }
            ]
        },
        {
            text: 'v1.16',
            isLatest: false,
            isUpcoming: false,
            details: [
                {
                    secondaryText: 'Fixed an issue where some games could not be displayed or installed',
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
