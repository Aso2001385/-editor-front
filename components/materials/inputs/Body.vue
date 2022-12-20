<template>
  <v-row>
    <v-col cols="12" class="text-h6 d-flex align-center"> BackGround </v-col>
    <v-col cols="12" class="align-center">
      <PalletPicker :receive="attributes[0]" />
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> Padding </v-col>
    <v-col cols="12" class="d-flex align-center">
      <v-text-field v-model="attributes[1].value" hide-details="auto" solo required />
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> AllFontColor </v-col>
    <v-col cols="12" class="align-center">
      <PalletPicker :receive="fontColorAll" />
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> AllTextShadow </v-col>
    <v-col cols="12" class="align-center">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> X </v-col>
        <v-col cols="4">
          <v-text-field v-model="fontShadowXAll.value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Y </v-col>
        <v-col cols="4">
          <v-text-field v-model="fontShadowYAll.value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Blur </v-col>
        <v-col cols="4">
          <v-text-field v-model="fontShadowBlurAll.value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Color </v-col>
        <v-col cols="4">
          <PalletPicker :receive="fontShadowColorAll" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import PalletPicker from '@/components/materials/dialogs/PalletPicker.vue'
export default {
  components: {
    PalletPicker,
  },
  props: {
    receive: {
      type: Array,
      default: () => [],
    },
    all: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      fontColorAll: { value: 'rgba(200,200,200,1)' },
      fontShadowXAll: { value: '0' },
      fontShadowYAll: { value: '0' },
      fontShadowBlurAll: { value: '0' },
      fontShadowColorAll: { value: 'rgba(200,200,200,1)' },
    }
  },
  computed: {
    attributes: {
      get() {
        return this.receive
      },
    },
    alls: {
      get() {
        return this.all
      },
    },
  },
  watch: {
    fontColorAll: {
      handler() {
        this.alls[1].attributes[15].value =
          this.alls[2].attributes[15].value =
          this.alls[3].attributes[15].value =
          this.alls[4].attributes[15].value =
          this.alls[5].attributes[15].value =
          this.alls[6].attributes[15].value =
            this.fontColorAll.value
      },
      deep: true,
    },
    fontShadowXAll: {
      handler() {
        this.alls[1].attributes[24].value =
          this.alls[2].attributes[24].value =
          this.alls[3].attributes[24].value =
          this.alls[4].attributes[24].value =
          this.alls[5].attributes[24].value =
          this.alls[6].attributes[24].value =
            this.fontShadowXAll.value
      },
      deep: true,
    },
    fontShadowYAll: {
      handler() {
        this.alls[1].attributes[25].value =
          this.alls[2].attributes[25].value =
          this.alls[3].attributes[25].value =
          this.alls[4].attributes[25].value =
          this.alls[5].attributes[25].value =
          this.alls[6].attributes[25].value =
            this.fontShadowYAll.value
      },
      deep: true,
    },
    fontShadowBlurAll: {
      handler() {
        this.alls[1].attributes[26].value =
          this.alls[2].attributes[26].value =
          this.alls[3].attributes[26].value =
          this.alls[4].attributes[26].value =
          this.alls[5].attributes[26].value =
          this.alls[6].attributes[26].value =
            this.fontShadowBlurAll.value
      },
      deep: true,
    },
    fontShadowColorAll: {
      handler() {
        this.alls[1].attributes[27].value =
          this.alls[2].attributes[27].value =
          this.alls[3].attributes[27].value =
          this.alls[4].attributes[27].value =
          this.alls[5].attributes[27].value =
          this.alls[6].attributes[27].value =
            this.fontShadowColorAll.value
      },
      deep: true,
    },
  },
}
</script>
