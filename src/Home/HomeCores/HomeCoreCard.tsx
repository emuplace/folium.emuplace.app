import {
    Badge, SimpleGrid,
    Space, Text, ThemeIcon,
    Title, useMantineTheme
} from '@mantine/core';
import { Icon, IconProps } from '@tabler/icons-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface HomeCoreFeatures {
    icon: ForwardRefExoticComponent<Omit<IconProps, "ref"> & RefAttributes<Icon>>;
    title: string;
    subtitle: string;
}

export enum Availability {
    AVAILABLE = 0,
    COMING_SOON = 1
}

interface HomeCoreCardProps {
    availability: Availability;
    features: Array<HomeCoreFeatures>;
    subtitle: string;
    title: string;
}


export function HomeCoreCard({ title, subtitle, availability, features }: HomeCoreCardProps) {
    const theme = useMantineTheme();

    const map = features.map((feature) => (
        <div key={feature.title}>
            <ThemeIcon radius='md' size={'lg'}>
                <feature.icon style={{ height: '66%', width: '66%' }} />
            </ThemeIcon>
            <Space h={'md'} />
            <Title order={3}>
                {feature.title}
            </Title>
            <Text c={'dimmed'}>
                {feature.subtitle}
            </Text>
        </div>
    ));

    return (
        <>
            <Title order={2}>
                {title}
            </Title>
            <Text c={'dimmed'}>
                {subtitle}
            </Text>
            <Space h={'md'} />
            <Badge color={availability == Availability.AVAILABLE ? theme.primaryColor : 'orange'}>
                {availability == Availability.AVAILABLE ? 'Available Now' : 'Coming Soon'}
            </Badge>
            <Space h={'lg'} />
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
                {map}
            </SimpleGrid>
        </>
    );

    /*
    const items = features.map((feature) => (
        <div key={feature.title}>
                <ThemeIcon
                    size={'xl'}
                    radius="md"
                    color={'black'}
                >
                    <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={2} />
                </ThemeIcon>
                <Text fz="lg" mt="sm" fw={500}>
                    {feature.title}
                </Text>
                <Text c="dimmed" fz="sm">
                    {feature.subtitle}
                </Text>
            </div>
            ));

            return (
            <Grid gutter={80}>
                <Grid.Col span={{ base: 12, md: 5 }}>
                    <Title className={classes.title} order={2}>
                        {title}
                    </Title>
                    <Text c="dimmed">
                        {subtitle}
                    </Text>
                    <Text c={availability == 'Available Now' ? 'green' : 'orange'}>
                        {availability}
                    </Text>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 7 }}>
                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
                        {items}
                    </SimpleGrid>
                </Grid.Col>
            </Grid>
            );*/
}