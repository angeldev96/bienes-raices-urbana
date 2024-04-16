<template>
    <div class="py-10">
        <p class="px-4 py-1 text-xs bg-cyan-500 w-16 rounded-lg text-white">NUEVO</p>
        <h1 class="text-4xl font-bold">NUEVAS OFERTAS</h1>
        <div class="deals grid 2xl:grid-cols-5 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">
            <div v-for="(house, index) in houses" :key="index"
                class="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div class="relative h-[60%]">
                    <img :src="house.src" alt="" class="w-full h-full object-cover rounded-t-xl" />
                    <div class="absolute top-0 right-0 p-4">
                        <BsSuitHeart size="1.5rem" class="text-white" />
                    </div>
                </div>
                <div class="p-4 space-y-4">
                    <div class="flex space-x-5 items-center">
                        <div class="flex items-center space-x-1">
                            <IoBedOutline />
                            <p class="text-sm text-gray-400">5 dormitorios</p>
                        </div>
                        <div class="flex items-center space-x-1">
                            <GiBathtub />
                            <p class="text-sm text-gray-400">3 baños</p>
                        </div>
                        <div class="flex items-center space-x-1">
                            <GiHomeGarage />
                            <p class="text-sm text-gray-400">1 garaje</p>
                        </div>
                    </div>
                    <h1 class="text-2xl font-semibold">{{ house.price }}</h1>
                    <div class="flex items-center space-x-2">
                        <IoLocationOutline />
                        <p class="text-sm text-gray-600">{{ house.location }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center py-5">
            <button class="bg-cyan-900 text-gray-100 px-5 py-2 rounded-md text-xl flex items-center space-x-2">
                <span>Ver Más</span>
                <AiOutlineDoubleRight />
            </button>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
/* Añade tus estilos aquí */
</style>