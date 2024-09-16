import '@mantine/core/styles.css';
import {
    Alert, Badge, Button, Checkbox, Container,
    Group, MantineProvider, Space, Text, Title
} from '@mantine/core';
import { theme } from '../theme';
import { IconInfoCircle } from '@tabler/icons-react';

export default function Checklist() {
    const icon = <IconInfoCircle />;

    return (
        <MantineProvider theme={theme}>
            <Container my={'xl'}>
                <Badge>
                    Checklist
                </Badge>

                <Space h={'lg'} />

                <Title order={1}>
                    Cytrus
                </Title>
                <Text c={'dimmed'}>
                    Cytrus is the Nintendo 3DS emulation core used in Folium
                </Text>
                <Space h={'md'} />
                <Group>
                    <Button component='a' href='https://www.gnu.org/licenses/gpl-3.0-standalone.html' color='dark' radius={'xl'}>
                        GPLv3
                    </Button>
                    <Button color='yellow' component='a' href='https://github.com/folium-app/cytrus' radius={'xl'}>
                        Source Code
                    </Button>
                </Group>
                <Space h={'md'} />
                <Title order={2}>
                    Hardware Features
                </Title>
                <Space h={'sm'} />
                <Group>
                    <Checkbox color='yellow' indeterminate label='Camera' variant='outline' />
                    <Checkbox color='yellow' label='Gyroscope' variant='outline' />
                    <Checkbox color='yellow' checked label='Microphone' />
                    <Checkbox color='yellow' checked label='Speakers' />
                </Group>
                <Space h={'md'} />
                <Title order={2}>
                    Software Features
                </Title>
                <Space h={'sm'} />
                <Group>
                    <Checkbox color='yellow' indeterminate label='Home Menu' variant='outline' />
                    <Checkbox color='yellow' indeterminate label='Keyboard' variant='outline' />
                </Group>

                <Space h={'lg'} />

                <Title order={1}>
                    Grape
                </Title>
                <Text c={'dimmed'}>
                    Grape is the Nintendo DS emulation core used in Folium
                </Text>
                <Space h={'md'} />
                <Group>
                    <Button component='a' href='https://www.gnu.org/licenses/gpl-3.0-standalone.html' color='dark' radius={'xl'}>
                        GPLv3
                    </Button>
                    <Button color='grape' component='a' href='https://github.com/folium-app/grape' radius={'xl'}>
                        Source Code
                    </Button>
                </Group>
                <Space h={'md'} />
                <Title order={2}>
                    Hardware Features
                </Title>
                <Space h={'sm'} />
                <Group>
                    <Checkbox color='grape' indeterminate label='Microphone' variant='outline' />
                    <Checkbox color='grape' checked label='Speakers' />
                </Group>
                <Space h={'md'} />
                <Title order={2}>
                    Software Features
                </Title>
                <Space h={'sm'} />
                <Group>
                    <Checkbox color='grape' checked label='Home Menu' />
                </Group>

                <Space h={'lg'} />

                <Title order={1}>
                    Mango
                </Title>
                <Text c={'dimmed'}>
                    Mango is the Super Nintendo Entertainment System emulation core used in Folium
                </Text>
                <Space h={'md'} />
                <Group>
                    <Button component='a' href='https://www.gnu.org/licenses/gpl-3.0-standalone.html' color='dark' radius={'xl'}>
                        GPLv3
                    </Button>
                    <Button color='orange' component='a' href='https://github.com/folium-app/mango' radius={'xl'}>
                        Source Code
                    </Button>
                </Group>
                <Space h={'md'} />
                <Title order={2}>
                    Hardware Features
                </Title>
                <Space h={'sm'} />
                <Group grow>
                    <Alert variant='default' title="Incomplete" icon={icon} radius={'lg'} />
                </Group>
                <Space h={'md'} />
                <Title order={2}>
                    Software Features
                </Title>
                <Space h={'sm'} />
                <Group grow>
                    <Alert variant='default' title="Incomplete" icon={icon} radius={'lg'} />
                </Group>
            </Container>
        </MantineProvider>
    );
}