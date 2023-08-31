import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
const pb = new PocketBase(import.meta.env.VITE_URI);


export const load = (async () => {
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
	const getGallery = async () => {
		try {
			const gallery = await pb.collection('gallery').getFullList(200 /* batch size */,{
				expand: 'topicse,user'
			});
			return gallery;
		} catch (err) {
			console.log('Error: ', err);
		}
};
		return {
			topic: getTopic(),
			gallery: getGallery()
		};
}) satisfies PageLoad;