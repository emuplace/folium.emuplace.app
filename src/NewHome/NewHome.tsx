import '@mantine/core/styles.css';
import {
    Anchor, Button, Flex, Group, Badge,
    MantineProvider, List, Accordion,
    Stack, Text, Title
} from '@mantine/core';
import { theme } from '../theme';

export default function NewHome() {
    const changes = [
        {
            text: 'v1.9',
            isLatest: false,
            isUpcoming: true,
            details: [
                {
                    secondaryText: 'Added automatic hiding and showing of the on-screen controller when a physical controller is connected and disconnected',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added support for the front camera in the Cytrus core',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added YUV422 support for both the front and rear cameras in the Cytrus core',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Added an archive feature that will back up and reset the documents directory every major release to ensure a smooth transition between releases',
                    tertiaryText: 'archive.zip will contain the currently available core folders, this can be moved out of the documents directory, extracted on-device and used with the latest release'
                },
                {
                    secondaryText: 'Changed how several features are handled improving support for both iPad and iPhone',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Fixed crashing when using Sign in with Apple or Skip due to a damaged documents directory',
                    tertiaryText: null
                },
                {
                    secondaryText: 'Sorted games within the library screen alphabetically',
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
                        <Badge color={item.isLatest ? theme.primaryColor : item.isUpcoming ? 'dark' : theme.primaryColor}>
                            {item.isLatest ? 'Latest' : item.isUpcoming ? 'Upcoming' : 'Latest'}
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

    return (
        <MantineProvider theme={theme}>
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
                        <Button component='a' href='https://jarrodnorwell.gitbook.io/folium/getting-started' color='grape' radius={'xl'} variant='filled'>Getting Started</Button>
                        <Button component='a' href='https://github.com/folium-app' color='dark' radius={'xl'} variant='filled'>Open GitHub</Button>
                        <Button component='a' href='ipas/folium-v1.7-sideload.ipa.zip' color='teal' radius={'xl'} variant='filled'>Sideload</Button>
                    </Flex>
                    <Title order={2}>
                        Changes
                    </Title>
                    <Accordion radius={'md'} variant="contained">
                        {items}
                    </Accordion>
                </Stack>
            </Flex>
        </MantineProvider>
    );
}