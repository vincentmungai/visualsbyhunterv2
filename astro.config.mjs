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
    // Suppress errors and warnings during build
    vite: {
        logLevel: 'error',  // Suppress everything except errors (use 'silent' to suppress all logs)
        plugins: [
            {
                name: 'ignore-build-errors',
                apply: 'build',
                buildStart() {
                    this.warn = () => {}; // Suppress warnings
                    this.error = (msg) => {
                        if (msg.includes("specific error text to ignore")) {
                            console.warn('Ignoring specific error:', msg);
                        } else {
                            throw new Error(msg); // Only fail build for non-ignored errors
                        }
                    };
                },
            },
        ],
    },
    redirects: {
        '/works/isles-and-wedding-vows': '/projects/isles-and-wedding-vows',
    },
});
