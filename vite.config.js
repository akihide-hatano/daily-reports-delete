import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build:{
        rollupOptions:{
            main:resolve( __dirname,'index.html'),
            history:resolve( __dirname,'history.html'),
        },
    },
});