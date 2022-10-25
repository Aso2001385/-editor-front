<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-center pa-4 grey darken-4">
            <h3 class="text-center white--text">SIGN IN</h3>
          </v-card-title>
          <v-divider class="pb-5"> </v-divider>
          <v-form>
            <div class="pa-10">
              <v-text-field></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                required
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                :error-messages="passwordErrors"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                @click:append="show1 = !show1"
              ></v-text-field>
              <div class="pt-5 position: relative">
                <v-row justify="center">
                  <v-col cols="4">
                    <ApiEventButton color="grey darken-4"> Next </ApiEventButton>
                  </v-col>
                </v-row>
              </div>
              <v-row class="mt-10" justify="center">
                アカウントをお持ちではありませんか？<NuxtLink to="/sign-up">こちらから新規登録</NuxtLink>
              </v-row>
              <v-row class="mt-10" justify="center">
                アカウントをお持ちではありませんか？<NuxtLink to="/prac">練習場所</NuxtLink>
              </v-row>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: 'auth',

  // email: '1001999@s..ac.jp',
  // password: 'test-2022Aso',
}
</script>
