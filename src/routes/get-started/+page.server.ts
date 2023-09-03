import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { error, redirect } from '@sveltejs/kit';

export const load = (async ({locals}) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	};
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    login: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());
		try {
			await locals.pb.collection('users').authWithPassword(body.email, body.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true
				};
			}
		} catch (err) {
			console.log('Error: ', err);
			throw error(400, 'Incorrect email or password');
		}
		throw redirect(303, '/');
	}
};