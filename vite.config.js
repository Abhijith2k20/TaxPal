import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                signin: resolve(__dirname, 'signin.html'),
                register: resolve(__dirname, 'register.html'),
            },
        },
    },
})
