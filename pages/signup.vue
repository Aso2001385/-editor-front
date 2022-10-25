<template>
  <v-flex>
    <v-app id="app">
      <v-row>
        <!-- 入力欄追加 -->
        <v-col cols="12" md="4">
          <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="First name" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mt-5 pa-0 justify-center">
        <v-col cols="12" class="mt-10 pt-10 mb-10 white--text text-h6">
          <h2 style="text-align: center">必要事項入力するform</h2>
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-col cols="12" class="text-h5">
          <p style="text-align: center">
            <NuxtLink to="/login" class="blue--te xt"><button>次へボタン</button></NuxtLink>
          </p>
          <p style="text-align: center"><NuxtLink to="/login" class="blue--te xt">ログインページへ</NuxtLink></p>
        </v-col>
      </v-row>
    </v-app>
  </v-flex>
</template>
