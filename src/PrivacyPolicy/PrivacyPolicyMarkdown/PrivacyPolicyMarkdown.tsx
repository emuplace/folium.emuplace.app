import { Container, MantineProvider, Space, Text, Title } from "@mantine/core";
import classes from './PrivacyPolicyMarkdown.module.css';
import { theme } from "../../theme";

export function PrivacyPolicyMarkdown() {
    const date = new Date();

    return (
        <MantineProvider theme={theme} forceColorScheme={date.getHours() >= 7 && date.getHours() <= 19 ? "light" : "dark"}>
            <Container className={classes.wrapper}>
                <Title order={1}>
                    Privacy Policy
                </Title>
                <Space h={'xl'} />
                <Text>
                    Folium and its developer take your privacy very seriously. Beyond the information Apple provides to developers that you can decide to provide, it uses no third-party analytics or advertising frameworks.
                </Text>
                <Space h={'md'} />
                <Text>
                    Folium does have cores that save logs on-device and these can optionally be provided for better assistance in Discord, Reddit, etc. Information within these logs can be but is not limited to device specifications.
                </Text>
                <Space h={'xl'} />
                <Text c={'dimmed'}>
                    © 2024 Jarrod Norwell. All Right Reserved.
                </Text>
            </Container>
        </MantineProvider>
    )
}