import {createClient, OAuthStrategy} from "@wix/sdk";
import { items } from "@wix/data";
const WixClient = createClient({
    modules: { items },
    auth: OAuthStrategy ({
        clientId: import.meta.env.WIX_CLIENT_ID,
    }),
});

export default async function fetchHomeLayout() {
    let query = WixClient.items.queryDataItems({
        dataCollectionId: 'HomePage',
    });
    const home = await query.find();
    return home.items;
}