import '@mantine/core/styles.css';
import {
    Anchor, Button, Flex,
    MantineProvider,
    Stack, Text, Title
} from '@mantine/core';
import { theme } from '../theme';

export default function NewHome() {
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
                        <Button component='a' href='https://github.com/folium-app' color='gray' radius={'xl'} variant='filled'>Open GitHub</Button>
                        <Button component='a' href='/rewrite' radius={'xl'} variant='filled'>Browse Rewrite</Button>
                        <Button component='a' href='/ipas/Folium-v1.6-Sideload.ipa.zip' color='cyan' radius={'xl'} variant='filled'>Sideload</Button>
                    </Flex>
                </Stack>
            </Flex>
        </MantineProvider>
    );
}