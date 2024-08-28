import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';

import { PrivacyPolicyMarkdown } from './PrivacyPolicyMarkdown/PrivacyPolicyMarkdown';

export default function PrivacyPolicy() {
    return (
        <MantineProvider theme={theme} forceColorScheme='dark'>
            <PrivacyPolicyMarkdown />
        </MantineProvider>
    );
}
