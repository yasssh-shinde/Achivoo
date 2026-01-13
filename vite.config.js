import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                services: resolve(__dirname, 'services.html'),
                'case-studies': resolve(__dirname, 'case-studies.html'),
                about: resolve(__dirname, 'about.html'),
                blog: resolve(__dirname, 'blog.html'),
                contact: resolve(__dirname, 'contact.html'),
                team: resolve(__dirname, 'team.html'),
                careers: resolve(__dirname, 'careers.html'),
                faq: resolve(__dirname, 'faq.html'),
                tools: resolve(__dirname, 'tools.html'),
                notFound: resolve(__dirname, '404.html'),
                'blog-hub-and-spoke-seo': resolve(__dirname, 'blog-hub-and-spoke-seo.html'),
                'blog-google-ads-vs-meta-ads': resolve(__dirname, 'blog-google-ads-vs-meta-ads.html'),
                'blog-ai-content-scaling': resolve(__dirname, 'blog-ai-content-scaling.html'),
                'blog-landing-page-tweaks': resolve(__dirname, 'blog-landing-page-tweaks.html'),
            },
        },
    },
});
