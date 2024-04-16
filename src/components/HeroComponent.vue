<template>
    <div>
        <nav class="flex justify-between items-center py-5">
            <h1 class="text-xl md:text-2xl font-bold">Bienes Raíces Urbana</h1>
            <ul class="flex items-center space-x-5 text-xs md:text-base">
                <li>Características</li>
                <li>Tendencias</li>
                <li>Acerca de</li>
            </ul>
            <button class="bg-cyan-900 px-5 py-2 rounded-xl text-xs md:text-base text-gray-300">Contacto</button>
        </nav>
        <div class="h-[500px] relative">
            <img :src="image" alt="" class="w-full h-full object-cover rounded-md relative" />

            <div class="absolute bottom-5 w-full">
                <div
                    class="bg-white w-11/12 xl:w-4/5 m-auto grid grid-cols-2 lg:flex justify-between items-center p-5 drop-shadow-2xl md:space-x-5 md:rounded-md">
                    <div class="flex flex-col space-y-2">
                        <label for="location">Ubicación</label>
                        <input type="text" placeholder="Honduras" class="outline-0 text-xs" />
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="property">Tipo de propiedad</label>
                        <input type="text" placeholder="Terrenos" class="outline-0 text-xs" />
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="price">Precio máximo</label>
                        <input type="text" placeholder="HNL" class="outline-0 text-xs" />
                    </div>
                    <div>
                        <button class="bg-cyan-900 px-5 py-2 mt-5 md:mt-0 md:rounded-full text-gray-300">Buscar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
/* Tus estilos aquí */
</style>