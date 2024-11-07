import '@mantine/core/styles.css';
import {
    Checkbox,
    Container,
    Divider,
    MantineProvider,
    SimpleGrid,
    Space,
    Text,
    Title
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
                    <Checkbox label={'Cheats'} />
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

                <Title order={2}>
                    Mango
                </Title>
                <Space h={'sm'} />
                <Text c={'dimmed'}>
                    Super Nintendo Entertainment System
                </Text>
            </Container>
        </MantineProvider>
    );
}