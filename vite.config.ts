import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vanillaExtractPlugin()
    ],
    mode: 'production',
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                privacypolicy: resolve(__dirname, 'privacypolicy/index.html')
            }
        }
    }
});
