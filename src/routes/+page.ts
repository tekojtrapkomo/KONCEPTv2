import type { PageLoad } from './$types';

export const load = (async () => {
    const publicCatApi = 'https://api.thecatapi.com/v1/images/search?limit=4';
    const response = await fetch(publicCatApi);
    const data = await response.json();
    return {
            cats: data
    };
}) satisfies PageLoad;