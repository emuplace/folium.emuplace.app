import '@mantine/carousel/styles.css';
import "@mantine/core/styles.css";
import { Container, MantineProvider, Space } from "@mantine/core";
import { theme } from "../theme";
// import { CardsCarousel } from './CardsCarousel/CardsCarousel';
// import { DoubleHeader } from "./DoubleHeader/DoubleHeader";
// import { FAQSimple } from "./FAQSimple/FAQSimple";
// import { FooterSimple } from "./FooterSimple/FooterSimple";
// import { NintendoFeaturesTitle } from "./FeaturesTitles/NintendoFeaturesTitle";
// import { PlayStationFeaturesTitle } from "./FeaturesTitles/PlayStationFeaturesTitle";
// import { SEGAFeaturesTitle } from './FeaturesTitles/SEGAFeaturesTitle';
// // import { HeroText } from "./HeroText/HeroText";
// import { Welcome } from "./Welcome/Welcome";
// 
// import { HomeGameplayCarousel } from './HomeGameplayCarousel/HomeGameplayCarousel';
// import { DeveloperFooter } from './DeveloperFooter/DeveloperFooter';

import { HomeHero } from './HomeHero/HomeHero';
import { HomeCores } from './HomeCores/HomeCores';
import { HomeScreenshots } from './HomeScreenshots/HomeScreenshots';
import { HomeFAQ } from './HomeFAQ/HomeFAQ';
import { HomeFooter } from './HomeFooter/HomeFooter';

export default function Home() {
    return (
        <MantineProvider theme={theme}>
            <Container pt={100}>
                <HomeHero />
                <Space h={'xl'} />
                <HomeCores />
                <Space h={'xl'} />
                <HomeScreenshots />
                <Space h={'xl'} />
                <HomeFAQ />
                <Space h={'xl'} />
                <HomeFooter />
            </Container>
        </MantineProvider>
    );
}
