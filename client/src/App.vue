<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>AquaRental</span>
        <span class="font-weight-light caption">Movie rent</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content class="text-center">
      <v-container>
        <div class="displayButtons">
          <v-btn @click.prevent="loginForm" x-large>
            Login
            <v-icon right dark>mdi-account-key</v-icon>
          </v-btn>
          <v-btn @click.prevent="registerForm" x-large>
            Register
            <v-icon right dark>mdi-account-plus</v-icon>
          </v-btn>
          <login v-if="loginShow" />
          <register v-if="registerShow" />
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import login from "./components/login";
import register from "./components/register";

export default {
  name: "App",
  components: {
    login,
    register
  },
  data: () => ({
    loginShow: false,
    registerShow: false
  }),
  methods: {
    loginForm() {
      this.loginShow = true;
    },
    registerForm() {
      this.registerShow = true;
    }
  }
};
</script>

<style lang="scss">
.displayButtons {
  display: flex;
  flex-direction: column;
}
</style>
