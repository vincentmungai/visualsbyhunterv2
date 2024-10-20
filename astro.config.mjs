import { defineConfig } from 'astro/config';
import sanity from 'astro-sanity';

export default defineConfig({

  integrations: [sanity({
    projectId: 'vgjuka9j',
    dataset: 'production',
    apiVersion: 'v2021-03-25',
    useCdn: true,
  })]
});