<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-center pa-4 grey darken-2">
            <h3 class="text-center white--text">UPDATE</h3>
          </v-card-title>
          <v-divider class="pb-5"></v-divider>
          <div class="pa-10">
            <v-text-field v-model="email" label="email" type="text"></v-text-field>
            <!-- <v-text-field v-model="password" label="password" type="password"></v-text-field> -->
            <v-row justify="center" class="mt-5 mb-5">
              <v-col cols="4">
                <ApiEventButton color="grey darken-2" :click-callback="Back">Back</ApiEventButton>
              </v-col>
              <v-col cols="4">
                <ApiEventButton color="grey darken-2" :click-callback="Update">Update</ApiEventButton>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  layout: 'auth',
  data() {
    return {
      url: '/information',
      layout: 'auth',
      email: '',
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.api.userInfo,
    }),
  },
  mounted() {
    this.email = this.userInfo[2]
    if (this.email === '') {
      this.email = localStorage.getItem('email')
    }
  },
  methods: {
    Back() {
      this.$router.push({ path: this.url })
    },
    ...mapActions({
      userUpdate: 'api/userInfoUpdate',
    }),
    ...mapActions({
      getUser: 'api/postLogin',
    }),
    Update() {
      // 実装できるか検討中
      //   this.userUpdate()
      //   this.getUser()
      this.$router.push({ path: this.url })
    },
  },
}
</script>
