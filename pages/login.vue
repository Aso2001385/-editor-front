<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-center pa-4 grey darken-2">
            <h3 class="text-center white--text">SIGN IN</h3>
          </v-card-title>
          <v-divider class="pb-5"> </v-divider>
          <!-- <v-form> -->
          <div class="pa-10">
            <v-text-field v-model="email" label="email" type="email"></v-text-field>
            <v-text-field v-model="password" label="password" type="password"></v-text-field>
            <!-- <div class="pt-5 position: relative"> -->
            <v-row justify="center" class="mt-5 mb-5">
              <!-- <v-col cols="4"> -->
              <ApiEventButton color="grey darken-2" @click="sendUserInfo()">Next</ApiEventButton>
              <!-- </v-col> -->
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/signup">サインインページへ</NuxtLink>
            </v-row>
            <v-row class="mt-10" justify="center">
              <NuxtLink to="/sign-up">パスワードを忘れましたか？</NuxtLink>
            </v-row>
            <!-- </div> -->
          </div>
          <!-- </v-form> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: 'auth',
  email: '1001999@s..ac.jp',
  password: 'test-2022Aso',

  data() {
    return {
      url: 'http://localost:8080/api/login',
      // userId: 0,
      // bulletins: [],
      // bulletinCount: 0,
      // boxSkill: -1,
      // categoryColor: {
      //   language: 'red',
      //   framework: 'blue',
      //   database: 'green',
      //   infrastructure: 'purple',
      //   other: 'indigo darken -3',
      // },
      // sendSearch: [],
      // searchFlg: 0,
      // searchIds: [],
    }
  },
  // computed: {
  //   user() {
  //     return this.$store.state.user
  //   },
  // },
  mounted() {
    // this.sendSearch = JSON.parse(sessionStorage.getItem('sendSearch'))
    // this.searchFlg = sessionStorage.getItem('searchFlg')
    // this.searchId()
    // this.getBulletin()
  },
  methods: {
    // getSession(value) {
    //   // どの掲示板の詳細を表示するか
    //   sessionStorage.setItem('bulletinDetail', value)
    // },
    // color(value) {
    //   if (value < 16) {
    //     return 'red'
    //   } else if (value < 31) {
    //     return 'blue'
    //   } else if (value < 37) {
    //     return 'green'
    //   } else if (value < 48) {
    //     return 'purple'
    //   } else {
    //     return 'indigo darken-3'
    //   }
    // },
    // skillCount(cnt) {
    //   return this.bulletinSkillCount[cnt - 1]
    // },
    // getSkillId() {
    //   this.boxSkill = this.boxSkill + 1
    //   return this.bulletinSkillId[this.boxSkill]
    // },
    // searchId() {
    //   for (let i = 0; i < this.sendSearch.length; i++) {
    //     this.searchIds.push(this.sendSearch[i].id)
    //   }
    // },
    sendUserInfo() {
      // this.$axios
      //   .get(this.url)
      //   .then(response => {
      // return response.data
      return this.$router.push({ path: `/projects/` })
      // })
      // .catch(err => {
      //   console.log(err)
      //   return err.response
      // })
    },
  },
}
</script>
