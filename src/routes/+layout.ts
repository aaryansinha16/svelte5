import { checkAuth } from '../lib/stores/auth.js';
import { redirect } from '@sveltejs/kit';

export const ssr = false;

export const load = ({ url }: any) => {
    const publicRoutes = ['/login'];
    if (publicRoutes.includes(url.pathname)) {
        return {};
    }

    if (!checkAuth()) {
        throw redirect(307, '/login');
    }

    return {};
};
