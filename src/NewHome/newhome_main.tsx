import React from 'react';
import ReactDOM from 'react-dom/client';
import NewHome from './NewHome.tsx';

import '@mantine/core/styles.css';
// ‼️ import carousel styles after core package styles
import '@mantine/carousel/styles.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <NewHome />
    </React.StrictMode>
);
