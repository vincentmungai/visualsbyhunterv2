import { useSanityClient, groq } from 'astro-sanity';

// Function to fetch the projects
export async function getAllWorks() {
    const query = groq`*[_type == "projects"]`;
    try {
        const works = await useSanityClient().fetch(query);
        console.log('Fetched Project Info:', works); // Log the fetched data for debugging
        return works;
    } catch (error) {
        console.error('Error fetching works:', error); // Log any errors
        return "Error fetching items"; // Return an empty array in case of an error
    }
}
