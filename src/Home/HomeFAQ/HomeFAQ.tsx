import { Space, Title, Accordion } from '@mantine/core';
import { IconMoneybag, IconFileImport, IconPaint } from '@tabler/icons-react';

/*
const questions = [
    {
        value: 'purchase-price-and-type',
        answer: 'Folium will cost a one-time payment of $4.99 USD',
        question: 'What will Folium cost on the App Store?'
    },
    {
        value: 'games-and-system-files',
        answer: 'Games and system files must be dumped from a console or handheld you own',
        question: 'How do we get games and system files?'
    },
    {
        value: 'supported-and-upcoming-cores',
        answer: 'Currently the Game Boy Advance, Nintendo 3DS and Nintendo DS are supported with plans for a handful of other retro consoles and handhelds to be added',
        question: 'What consoles and handhelds are and will be supported?'
    },
    {
        value: 'is-jit-supported',
        answer: 'No. Apple does not allow JIT for apps on both the App Store and TestFlight',
        question: 'Does Folium on the App Store or TestFlight support JIT?'
    },
    {
        value: 'game-compatibility',
        answer: 'Folium has a high compatibility for most games in most of the cores however, some games work better than others and the device it is being played on plays a significant role in compatibility',
        question: 'Do all games work on all cores within Folium?'
    },
    {
        value: 'missing-features-and-functionality',
        answer: 'Folium is still very much a work-in-progress, a lot of features and functionality do exist within the app but there is still a lot more that need to be added',
        question: 'Does Folium contain all features and functionality?'
    },
    {
        value: 'cheats-mods-and-saves',
        answer: 'The Cytrus core supports all 3 however, some need to be done manually through Files. Grape supports saves but neither cheats nor mods at this time',
        question: 'Does Folium support cheats, mods and saves?'
    },
];
*/

const questions = [
    {
        icon: IconMoneybag,
        id: 'pricing',
        question: 'How much does Folium cost on the App Store?',
        answer: 'Folium costs a one-time payment of $4.99 USD'
    },
    {
        icon: IconFileImport,
        id: 'file-types',
        question: 'What file extensions does Folium support?',
        answer: 'Folium currently supports .3ds, .app, .cia, .cci and .cxi for Cytrus and .gba, .ds and .nds for Grape'
    },
    {
        icon: IconPaint,
        id: 'skins',
        question: 'How does someone make a skin for Folium?',
        answer: 'Skins can be made by following the guide here: https://official-antique.gitbook.io/folium'
    }
];

export function HomeFAQ() {
    const map = questions.map((question) => (
        <Accordion.Item value={question.id}>
            <Accordion.Control icon={<question.icon size={20} />}>
                {question.question}
            </Accordion.Control>
            <Accordion.Panel>{question.answer}</Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <>
            <Title order={1}>
                Frequently Asked Questions
            </Title>
            <Space h={'md'} />
            <Accordion radius={'md'} variant="contained">
                {map}
            </Accordion>
        </>
    );
}