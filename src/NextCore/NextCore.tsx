import '@mantine/core/styles.css';
import {
    Button,
    Container,
    Flex,
    MantineProvider
} from '@mantine/core';
import { theme } from '../theme';

export default function NextCore() {
    const date = new Date();

    const audio = new Audio("https://quicksounds.com/uploads/tracks/528054973_948104858_1761723949.mp3")
    function play() {
        if (audio.duration <= 0 && audio.paused) {
            audio.play()
        }
    }

    return (
        <MantineProvider theme={theme} forceColorScheme={date.getHours() >= 7 && date.getHours() <= 19 ? "light" : "dark"}>
            <Container>
                <Flex align={'center'} h={'100vh'} justify={'center'}>
                    <Button radius={'xl'} onClick={() => { play() }}>
                        Play Sound
                    </Button>
                </Flex>
            </Container>
        </MantineProvider>
    );
}