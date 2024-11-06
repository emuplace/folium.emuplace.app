import '@mantine/core/styles.css';
import {
    Container,
    Divider,
    MantineProvider,
    Space,
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
            </Container>
        </MantineProvider>
    );
}