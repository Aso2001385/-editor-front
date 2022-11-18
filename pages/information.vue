<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="9" sm="10" xs="10">
        <v-card class="pb-10 mx-auto fill-width">
          <v-card-title class="d-flex justify-left pa-4 grey darken-4">
            <h3 class="text-left white--text">会員情報</h3>
          </v-card-title>
          <v-divider class="pb-5"> </v-divider>
          <v-form>
            <div class="pa-10">
              <v-text-field v-model="name" label="Name" required></v-text-field>
              <v-text-field v-model="email" label="Email" required></v-text-field>
              <v-text-field v-model="password" label="Password" required></v-text-field>
              <div class="pt-5 position: relative">
                <v-row justify="center">
                  <v-col cols="4">
                    <button
                      type="button"
                      class="btn btn-danger"
                      v-if="isEdit"
                      v-bind:disabled="noChange"
                      data-toggle="modal"
                      data-target="#companyModal"
                    >
                      更新
                    </button>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import { validationMixin } from 'vuelidate'
// import { required, maxLength, email, minLength } from 'vuelidate/lib/validators'
export default {
  //   mixins: [validationMixin],
  //   layout: 'auth',
  //   validations: {
  //     email: { required, email, maxLength: maxLength(23), minLength: minLength(23) },
  //     password: { required, minLength: minLength(8) },
  //   },
  data: () => ({
    show1: false,
    email: '',
    password: '',
    user: {},
    name: '',
  }),
  // email: '1001999@s..ac.jp',
  // password: 'test-2022Aso',
  computed: {
    // nameErrors() {
    //   const errors = []
    //   if (!this.$v.name.$dirty) return errors
    //   !this.$v.email.email && errors.push('Must be valid e-mail')
    //   !this.$v.email.required && errors.push('E-mail is required')
    //   return errors
    // },
    // emailErrors() {
    //   const errors = []
    //   if (!this.$v.email.$dirty) return errors
    //   !this.$v.email.email && errors.push('Must be valid e-mail')
    //   !this.$v.email.required && errors.push('E-mail is required')
    //   return errors
    // },
    // passwordErrors() {
    //   const errors = []
    //   if (!this.$v.password.$dirty) return errors
    //   !this.$v.password.minLength && errors.push('Password must be at least 8 characters')
    //   !this.$v.password.required && errors.push('Password is required')
    //   return errors
    // },
  },
  methods: {
    // async submit() {
    //   this.$v.$touch()
    //   const sendSearch = []
    //   sessionStorage.setItem('sendSearch', JSON.stringify(sendSearch))
    //   sessionStorage.setItem('searchFlg', 0)
    //   this.user = {
    //     email: this.email,
    //     password: this.password,
    //   }
    //   await this.$axios.post(`${this.$urls.API}/auth`, this.user).then(async response => {
    //     await this.$store.commit('restoreLogin', response.data)
    //   })
    // },
    // clear() {
    //   this.$v.$reset()
    //   this.name = ''
    //   this.email = ''
    //   this.select = null
    //   this.checkbox = false
    // },
  },
}
</script>
<style lang="scss"></style>
