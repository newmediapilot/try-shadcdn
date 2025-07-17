import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig(({mode}) => ({
    base: mode === 'production' ? '/try-shadcn/' : '/',
    server: {
        port: 1234,
    },
    plugins: [
        react(),
        tailwindcss()
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));