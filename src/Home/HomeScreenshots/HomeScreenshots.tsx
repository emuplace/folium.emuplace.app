import { Carousel } from '@mantine/carousel';
import { Space, Title } from '@mantine/core';
import { IconCircleArrowLeftFilled, IconCircleArrowRightFilled } from '@tabler/icons-react';
import { HomeScreenshotCard } from './HomeScreenshotCard';
import classes from './HomeScreenshots.module.css';

const data = [
    { url: '/one.png' },
    { url: '/two.png' },
    { url: '/three.png' },
    { url: '/four.png' }
];

export function HomeScreenshots() {
    const slides = data.map((item) => (
        <Carousel.Slide key={item.url}>
            <HomeScreenshotCard {...item} />
        </Carousel.Slide>
    ));

    return (
        <>
            <Title order={1}>
                Screenshots
            </Title>
            <Space h={'md'} />
            <Carousel
                align={'start'}
                classNames={classes}
                slideGap={'md'}
                slideSize={{ base: '100%', sm: '33.333333%' }}
                nextControlIcon={
                    <IconCircleArrowRightFilled size={'lg'} />
                }
                previousControlIcon={
                    <IconCircleArrowLeftFilled size={'lg'} />
                }
            >
                {slides}
            </Carousel></>
    );
}