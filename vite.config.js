import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    server: {
        port: 43664,
        watch: {
            usePolling: true,
            interval: 500,
            ignored: [
                "*/.vs/*",
                "*/node_modules/*",
                "*/obj/*",
                "*/bin/*"
            ]
        }
    }
})