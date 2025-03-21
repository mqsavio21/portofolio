import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
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
        assetsDir: '',
        emptyOutDir: true,
        rollupOptions: {
            input: 'index.html',
            output: {
                entryFileNames: '[name].[hash].js',
                chunkFileNames: '[name].[hash].js',
                assetFileNames: '[name].[hash][extname]'
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
