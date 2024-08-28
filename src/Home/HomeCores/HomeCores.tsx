/*
import { Carousel } from '@mantine/carousel';
import { Container, rem } from '@mantine/core';
import {
    IconDeviceGamepad, IconDeviceGamepad2, IconBrandGithub,
    IconMicrophone, IconVolume, IconCircleArrowLeft,
    IconCircleArrowRight
} from '@tabler/icons-react';
import { HomeCoreCard } from './HomeCoreCard';
import classes from './HomeCores.module.css';
*/

import { Tabs, Space, Title } from "@mantine/core";
import {
    IconDeviceGamepad, IconDeviceGamepad2, IconBrandGithub,
    IconMicrophone, IconVolume
} from '@tabler/icons-react';
import { Availability, HomeCoreCard } from './HomeCoreCard';

const data = [
    {
        availability: Availability.AVAILABLE,
        features: [
            {
                icon: IconDeviceGamepad,
                title: 'Full Controller Support',
                subtitle: 'Supports Backbone One, PlayStation DualShock 4, PlayStation 5 DualSense, Xbox Series S and Xbox Series X controllers'
            },
            {
                icon: IconBrandGithub,
                title: 'Fully Open Source',
                subtitle: 'Licensed under GPLv3 to maintain full transparency and to give people the opportunity to build Folium for themselves'
            },
            {
                icon: IconMicrophone,
                title: 'Audio Input',
                subtitle: 'Making use of OpenAL, Folium provides supported cores with crystal clear audio input'
            },
            {
                icon: IconVolume,
                title: 'Native Audio Output',
                subtitle: 'Making use of Apple\'s CoreAudio API, Folium provides a seamless audio listening experience'
            }
        ],
        title: 'Nintendo',
        subtitle: 'Emulate the Game Boy Advance, Nintendo 3DS and Nintendo DS'
    },
    {
        availability: Availability.COMING_SOON,
        features: [
            {
                icon: IconDeviceGamepad2,
                title: 'Full Controller Support',
                subtitle: 'Supports Backbone One, PlayStation DualShock 4, PlayStation 5 DualSense, Xbox Series S and Xbox Series X controllers'
            },
            {
                icon: IconBrandGithub,
                title: 'Fully Open Source',
                subtitle: 'Licensed under GPLv3 to maintain full transparency and to give people the oppurtunity to build Folium for themselves'
            }
        ],
        title: 'PlayStation',
        subtitle: 'Emulate the PlayStation 1 and PlayStation 2'
    },
    {
        availability: Availability.COMING_SOON,
        features: [
            {
                icon: IconDeviceGamepad,
                title: 'Full Controller Support',
                subtitle: 'Supports Backbone One, PlayStation DualShock 4, PlayStation 5 DualSense, Xbox Series S and Xbox Series X controllers'
            },
            {
                icon: IconBrandGithub,
                title: 'Fully Open Source',
                subtitle: 'Licensed under GPLv3 to maintain full transparency and to give people the oppurtunity to build Folium for themselves'
            }
        ],
        title: 'SEGA',
        subtitle: 'Emulate the SEGA Genesis'
    }
];

export function HomeCores() {
    const tabValues = [
        {
            disabled: false,
            id: 'nintendo',
            title: 'Nintendo'
        },
        {
            disabled: true,
            id: 'playstation',
            title: 'PlayStation'
        },
        {
            disabled: true,
            id: 'sega',
            title: 'SEGA'
        }
    ];

    const tabs = tabValues.map((tab) => (
        <Tabs.Tab disabled={tab.disabled} value={tab.id}>{tab.title}</Tabs.Tab>
    ));

    const panels = tabValues.map((tab, index) => (
        <Tabs.Panel value={tab.id}>
            <HomeCoreCard {...data[index]} />
        </Tabs.Panel>
    ));

    return (
        <>
            <Title order={1}>
                Cores
            </Title>
            <Space h={'md'} />
            <Tabs defaultValue={tabValues[0].id} radius={'xl'} variant="pills">
                <Tabs.List>
                    {tabs}
                </Tabs.List>
                <Space h={'md'} />
                {...panels}
            </Tabs>
        </>
    );

    /*
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <HomeCoreCard {...item} />
        </Carousel.Slide>
    ));

    return (
        <Container className={classes.wrapper}>
            <Carousel
                align={'start'}
                classNames={classes}
                slideSize={'100%'}
                slideGap={{ base: rem(2), sm: 'xl' }}
                nextControlIcon={
                    <IconCircleArrowRight size={'lg'} />
                }
                previousControlIcon={
                    <IconCircleArrowLeft size={'lg'} />
                }
            >
                {slides}
            </Carousel>
        </Container>
    );
    */
}