<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-form>
            <p class="text-center">Login</p>
            <v-text-field label="E-mail" dense rounded filled></v-text-field>
            <v-text-field label="Password" dense rounded filled :type="'password'"></v-text-field>
            <v-btn depressed medium color="primary" align="center">Login</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "login"
};
</script>