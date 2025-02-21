<script lang="ts">
    import { logout } from '../../lib/stores/auth.js';
    import { goto } from '$app/navigation';
    
    function handleLogout() {
        logout();
        goto('/login');
    }
</script>

<div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
    <h1 class="text-4xl font-bold text-gray-900 mb-8">Protected Page</h1>
    <button
        on:click={handleLogout}
        class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    >
        Logout
    </button>
</div>
