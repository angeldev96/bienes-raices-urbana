<template>
    <div class="h-full bg-white">
        <div class="h-full">
            <div class="flex min-h-full flex-1">
                <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div class="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <!-- Contenido del encabezado omitido por brevedad -->
                        </div>
                        <div class="mt-10">
                            <form @submit.prevent="handleEmailLogin" class="space-y-6">
                                <!-- Campos de formulario omitidos por brevedad -->
                            </form>
                        </div>
                        <div class="mt-10">
                            <!-- Botones de inicio de sesión con proveedores omitidos por brevedad -->
                            <button @click="handleGoogleLogin" class="...">
                                Sign in with Google
                            </button>
                        </div>
                    </div>
                </div>
                <div class="relative hidden w-0 flex-1 lg:block">
                    <!-- Imagen lateral omitida por brevedad -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default {
    setup() {
        const email = ref('');
        const password = ref('');
        const router = useRouter();

        const handleEmailLogin = async () => {
            try {
                await signInWithEmailAndPassword(auth, email.value, password.value);
                router.push('/'); // Redirige al usuario a la página de inicio
            } catch (error) {
                console.error("Error al iniciar sesión con email y contraseña:", error);
            }
        };

        const handleGoogleLogin = async () => {
            try {
                const provider = new GoogleAuthProvider();
                await signInWithPopup(auth, provider);
                router.push('/'); // Redirige al usuario a la página de inicio
            } catch (error) {
                console.error("Error al iniciar sesión con Google:", error);
            }
        };

        return {
            email,
            password,
            handleEmailLogin,
            handleGoogleLogin,
        };
    },
};
</script>