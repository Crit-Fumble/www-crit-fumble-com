import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import { VitePWA } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import UnocssIcons from '@unocss/preset-icons'
import presetAttributify from '@unocss/preset-attributify'
import { presetWind, presetUno } from 'unocss'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx

      /\.md$/, // .md
    ],
    dts: './auto-imports.d.ts',
  }), Unocss({
    presets: [presetUno(), presetWind(), presetAttributify(),

    UnocssIcons({
      // options
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    }),
      ,]
  }),react() , Pages({
    extendRoute(route, parent) {
  
      if (route.path === '/') {
        // Index is unauthenticated.
        return route
      }

      // Augment the route with meta that indicates that the route requires authentication.
      return {
        ...route,
        meta: { layout: 'home' },
      }
    },
  }),
  VitePWA({  
  registerType: 'autoUpdate',
  includeAssets: ['./img/cfg-logo.jpg'],
  manifest: {
    name: 'Vitesse',
    short_name: 'Vitesse',
    theme_color: '#ffffff',
    icons: [
      {
        src: './img/cfg-logo.jpg',
        sizes: '192x192',
        type: 'image/jpg',
      },
      {
        src: './img/cfg-logo.jpg',
        sizes: '512x512',
        type: 'image/jpg',
      },
      {
        src: './img/cfg-logo.jpg',
        sizes: '512x512',
        type: 'image/jpg',
        purpose: 'any maskable',
      },
    ],
  },})
  ],
  server: { 
    host: '0.0.0.0'
  } 
})
