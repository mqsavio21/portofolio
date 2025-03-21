import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        })
    ],
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                app: resolve(__dirname, 'index.html')
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './resources'),
            '~': resolve(__dirname, './public')
        }
    },
    base: './'
});
