import type { PageLoad } from './$types';
import { pb } from '$lib/pb';

export const load = (async () => {
    // const publicCatApi = 'https://api.thecatapi.com/v1/images/search?limit=4';
    // const response = await fetch(publicCatApi);
    // const data = await response.json();
    // return {
    //         cats: data
    // };

    const getTopic = async () => {
        try {
            const topic = await pb.collection('topic').getFullList(200 /* batch size */, {
                sort: '-created	',
            });
            return topic;
        } catch (err) {
            console.log('Error: ', err);
        }
    };
    return {
        topic: getTopic(),
    }
}) satisfies PageLoad;