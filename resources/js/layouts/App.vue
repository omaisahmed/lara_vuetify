<template>
  <v-app>
    <v-main>
      <NavigationComponent/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavigationComponent from '../components/NavigationComponent.vue';
export default {
  name: 'App',
  components: {
    NavigationComponent
      },
}
</script>

