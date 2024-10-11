import { createClient, OAuthStrategy } from "@wix/sdk";
import { items } from "@wix/data";

const WixClient = createClient({
    modules: { items },
    auth: OAuthStrategy({
        clientId: import.meta.env.WIX_CLIENT_ID,
    }),
});

export default async function fetchWorksItems() {
    try {
        let query = WixClient.items.queryDataItems({
            dataCollectionId: 'Import982',
        });
        const works = await query.find();
        return works.items;
    } catch (error) {
        console.error('Error fetching works items:', error);
        throw error; // Rethrow the error if needed
    }
}
