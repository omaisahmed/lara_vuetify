<template>
  <div>
    <v-app-bar app dark>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" right v-show="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <img src="https://digitalhub.fifa.com/transform/16afb381-ed2f-49d0-957e-9c6b41a3b400/FIFA-logo-3?io=transform:fill,height:24,width:99" alt="Logo" height="32" />
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <div class="hidden-sm-and-down">
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/about">About</v-btn>
    <v-btn text to="/contact">Contact</v-btn>
    </div>

  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app dark>
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <router-link v-bind:to="item.to">
        <v-list-item-title >{{ item.title }}</v-list-item-title>
      </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</div>
</template>


<script>
export default {
  name: 'NavigationComponent',
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'mdi-home', to: '/' },
        { title: 'About', icon: 'mdi-information', to: '/about' },
        { title: 'Contact', icon: 'mdi-email', to: '/contact' },
      ],
    }
  },
}
</script>