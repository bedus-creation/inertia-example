import {
    defineConfig
} from 'vite';
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        vue(),
        laravel([
            'resources/css/tailwind.css',
            'resources/scripts/main.ts',
        ]),
    ],
    resolve: {
        alias: {
            '@': '/resources',
        },
    },
});
