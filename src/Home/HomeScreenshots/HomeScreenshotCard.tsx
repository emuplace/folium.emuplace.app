import { Card, Image } from "@mantine/core";

interface HomeScreenshotCardProps {
    url: string;
}

export function HomeScreenshotCard({ url }: HomeScreenshotCardProps) {
    return (
        <>
            <Card padding={'lg'} radius={'md'} withBorder>
                <Card.Section>
                    <Image src={url} />
                </Card.Section>
            </Card></>
    );
}