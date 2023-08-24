import type { LayoutServerLoad } from './$types';

export const load = (async ({locals}) => {
    if (locals.user) {
        return {
            user: locals.user
        }

    }
    return {
        user: null
    };
}) satisfies LayoutServerLoad;