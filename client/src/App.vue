<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>AquaRental</span>
        <span class="font-weight-light">Movie rent</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <login />
    </v-content>
  </v-app>
</template>

<script>
import login from "./components/login";

export default {
  name: "App",
  components: {
    login
  },
  data: () => ({
    //
  })
};
</script>
