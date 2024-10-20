import { useSanityClient, groq } from 'astro-sanity';

// Function to fetch the first blog post (home)
export async function getFirstBlogPost() {
    const query = groq`*[_type == "home"]`;
    const home = await useSanityClient().fetch(query);
    return home;
}