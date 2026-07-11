import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    server: {
        port: 3000,
        host: '0.0.0.0',
    },
    preview: {
        port: 3000,
        host: '0.0.0.0',
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                decode: resolve(__dirname, 'decode.html'),
                join: resolve(__dirname, 'join.html'),
                resources: resolve(__dirname, 'resources.html'),
            },
        },
    },
    base: '/Phoenix-Website/',
});
