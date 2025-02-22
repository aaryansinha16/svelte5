import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const isAuthenticated = writable(false);

export function checkAuth() {
    if (!browser) return false;
    const userData = localStorage.getItem('user');
    isAuthenticated.set(!!userData);
    return !!userData;
}

export function login(email: string, password: string) {
    if (!browser) return;
    localStorage.setItem('user', JSON.stringify({ email }));
    isAuthenticated.set(true);
}

export function logout() {
    if (!browser) return;
    localStorage.removeItem('user');
    isAuthenticated.set(false);
}
