import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
            publicDirectory: 'public',
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                }
            }
        })
    ],
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: 'resources/js/app.js'
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './resources'),
            '~': resolve(__dirname, './public')
        }
    }
});
