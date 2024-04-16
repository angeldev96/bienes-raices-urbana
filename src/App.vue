<template>
  <div class="app w-11/12 md:w-4/5 m-auto">
    <!-- Aquí se renderizarán los componentes de vue-router -->
    <router-view />
    <!-- Tu componente Footer siempre estará visible al final -->
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    FooterComponent,
  },
};
</script>
