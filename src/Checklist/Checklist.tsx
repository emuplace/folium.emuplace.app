import '@mantine/core/styles.css';
import {
    Checkbox,
    Container,
    Divider,
    MantineProvider,
    SimpleGrid,
    Space,
    Text,
    Title,
    Tooltip
} from '@mantine/core';
import { theme } from '../theme';

export default function Checklist() {
    // const icon = <IconInfoCircle />;

    const date = new Date();

    return (
        <MantineProvider theme={theme} forceColorScheme={date.getHours() >= 7 && date.getHours() <= 19 ? "light" : "dark"}>
            <Container my={'xl'}>
                <Title order={1}>
                    Checklist
                </Title>

                <Divider my={'md'} />

                <Title order={1}>
                    Cores
                </Title>

                <Space h={'sm'} />

                <Title order={2}>
                    Cytrus
                </Title>
                <Space h={'sm'} />
                <Text c={'dimmed'}>
                    Nintendo 3DS, Nintendo New 3DS
                </Text>
                <Space h={'sm'} />
                <SimpleGrid>
                    <Checkbox label={'Bootable OS'} checked onClick={(event) => event.preventDefault()} />
                    <Tooltip label='YUV422 pixel format is not fully supported yet'>
                        <Checkbox color='orange' label={'Camera'} checked onClick={(event) => event.preventDefault()} variant='outline' />
                    </Tooltip>
                    <Tooltip label='Added, editing and removing cheats in-app is not supported yet'>
                        <Checkbox color='orange' label={'Cheats'} checked onClick={(event) => event.preventDefault()} variant='outline' />
                    </Tooltip>
                    <Tooltip label='Rotation data is currently sent to the 3DS backwards'>
                        <Checkbox color='orange' label={'Gyroscope'} checked onClick={(event) => event.preventDefault()} variant='outline' />
                    </Tooltip>
                    <Checkbox label={'Microphone'} checked onClick={(event) => event.preventDefault()} />
                    <Tooltip label='Support for chat rooms and direct connections is not done yet'>
                        <Checkbox color='orange' label={'Multiplayer'} checked onClick={(event) => event.preventDefault()} variant='outline' />
                    </Tooltip>
                    <Tooltip label='Step data is not read correctly by the 3DS yet'>
                        <Checkbox color='red' label={'Pedometer'} indeterminate onClick={(event) => event.preventDefault()} variant='outline' />
                    </Tooltip>
                    <Checkbox label={'Speakers'} checked onClick={(event) => event.preventDefault()} />
                </SimpleGrid>

                <Space h={'sm'} />

                <Title order={2}>
                    Grape
                </Title>
                <Space h={'sm'} />
                <Text c={'dimmed'}>
                    Nintendo DS, Nintendo DSi
                </Text>
                <Space h={'sm'} />
                <SimpleGrid>
                    <Checkbox label={'Bootable OS'} checked onClick={(event) => event.preventDefault()} />
                    <Tooltip label='Microphone data does not get read by the DS yet'>
                        <Checkbox color='red' label={'Microphone'} indeterminate onClick={(event) => event.preventDefault()} variant='outline' />
                    </Tooltip>
                    <Checkbox label={'Speakers'} checked onClick={(event) => event.preventDefault()} />
                </SimpleGrid>

                <Space h={'sm'} />

                <Title order={2}>
                    Lychee
                </Title>
                <Space h={'sm'} />
                <Text c={'dimmed'}>
                    PlayStation 1
                </Text>
                <Space h={'sm'} />
                <SimpleGrid>
                    <Checkbox label={'Bootable OS'} checked onClick={(event) => event.preventDefault()} />
                    <Checkbox label={'Speakers'} checked onClick={(event) => event.preventDefault()} />
                </SimpleGrid>

                <Space h={'sm'} />

                <Title order={2}>
                    Mango
                </Title>
                <Space h={'sm'} />
                <Text c={'dimmed'}>
                    Super Nintendo Entertainment System
                </Text>
                <Space h={'sm'} />
                <SimpleGrid>
                    <Checkbox label={'Speakers'} checked onClick={(event) => event.preventDefault()} />
                </SimpleGrid>
            </Container>
        </MantineProvider>
    );
}