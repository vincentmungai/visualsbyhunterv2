import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: vercel(),
    image: {
      domains: ["https://supabase.com/"],
    },
    remotepatterns: [{ protocol: "https" }],
    devToolbar: {
        enabled: false
    },
    buildOptions: {
        viteOptions: {
            build: {
                rollupOptions: {
                    input: '/src/assets/portraits/*.{jpeg,jpg,png,gif,webp}',
                },
            },
            assetsInclude: ['**/*.jpeg', '**/*.jpg', '**/*.png', '**/*.gif', '**/*.webp'],
        },
    },
});