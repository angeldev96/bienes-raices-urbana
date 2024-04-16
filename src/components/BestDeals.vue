<template>
    <div>
        <div class='w-11/12 md:w-1/2 xl:w-1/3 m-auto text-center py-10'>
            <h1 class='text-4xl font-bold'>Descubre las Oportunidades Inmobiliarias Imperdibles</h1>
            <p class='text-xs text-gray-400'>Explora una selección exclusiva de propiedades que te brindarán las mejores
                opciones para encontrar tu nuevo hogar. Nuestro equipo está aquí para guiarte en cada paso del camino y
                hacer que tu experiencia sea excepcional.</p>
        </div>
        <div class="deals w-full grid lg:grid-flow-col grid-row-2 gap-8">
            <div v-for="(house, index) in houses" :key="index" class="deal relative" :class="getClass(index)">
                <img :src="house" alt="" class='rounded-xl w-full h-full object-cover' />
                <div class='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
                    <h1 class='text-3xl font-bold'>LUGAR</h1>
                    <p class='flex items-center space-x-2 text-sm'><io-location-outline />Kissimmee, Florida, EE. UU.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>



</script>

<style scoped>
/* Añade tus estilos aquí */
</style>