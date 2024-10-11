import {createClient, OAuthStrategy} from "@wix/sdk";
import { items } from "@wix/data";
import { media } from "@wix/sdk";

const WixClient = createClient({
    modules: { items },
    auth: OAuthStrategy ({
        clientId: import.meta.env.WIX_CLIENT_ID,
    }),
});

export default async function fetchWorks() {
    let query = WixClient.items.queryDataItems({
        dataCollectionId: 'Import982',
    });
    const works = await query.find();
    return works.items;
}