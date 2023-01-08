<template>
  <v-row>
    <v-col cols="12" class="text-h6 d-flex align-center"> BackGround </v-col>
    <v-col cols="12" class="align-center">
      <PalletPicker :receive="attributes['back-ground']" />
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> Padding </v-col>
    <v-col cols="12" class="d-flex align-center">
      <v-text-field v-model="attributes['padding'].value" hide-details="auto" solo required />
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
      type: Object,
      default: () => {},
    },
    all: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      fontColorAll: { value: '#FFFFFF' },
      fontShadowXAll: { value: '0' },
      fontShadowYAll: { value: '0' },
      fontShadowBlurAll: { value: '0' },
      fontShadowColorAll: { value: '#555555' },
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
        this.alls.h1.attributes.color.value =
          this.alls.h2.attributes.color.value =
          this.alls.h3.attributes.color.value =
          this.alls.h4.attributes.color.value =
          this.alls.h5.attributes.color.value =
          this.alls.h6.attributes.color.value =
          this.alls.p.attributes.color.value =
            this.fontColorAll.value
      },
      deep: true,
    },
    fontShadowXAll: {
      handler() {
        this.alls.h1.attributes['text-shadow-x'].value =
          this.alls.h2.attributes['text-shadow-x'].value =
          this.alls.h3.attributes['text-shadow-x'].value =
          this.alls.h4.attributes['text-shadow-x'].value =
          this.alls.h5.attributes['text-shadow-x'].value =
          this.alls.h6.attributes['text-shadow-x'].value =
          this.alls.p.attributes['text-shadow-x'].value =
            this.fontShadowXAll.value
      },
      deep: true,
    },
    fontShadowYAll: {
      handler() {
        this.alls.h1.attributes['text-shadow-y'].value =
          this.alls.h2.attributes['text-shadow-y'].value =
          this.alls.h3.attributes['text-shadow-y'].value =
          this.alls.h4.attributes['text-shadow-y'].value =
          this.alls.h5.attributes['text-shadow-y'].value =
          this.alls.h6.attributes['text-shadow-y'].value =
          this.alls.p.attributes['text-shadow-y'].value =
            this.fontShadowYAll.value
      },
      deep: true,
    },
    fontShadowBlurAll: {
      handler() {
        this.alls.h1.attributes['text-shadow-blur'].value =
          this.alls.h2.attributes['text-shadow-blur'].value =
          this.alls.h3.attributes['text-shadow-blur'].value =
          this.alls.h4.attributes['text-shadow-blur'].value =
          this.alls.h5.attributes['text-shadow-blur'].value =
          this.alls.h6.attributes['text-shadow-blur'].value =
          this.alls.p.attributes['text-shadow-blur'].value =
            this.fontShadowBlurAll.value
      },
      deep: true,
    },
    fontShadowColorAll: {
      handler() {
        this.alls.h1.attributes['text-shadow-color'].value =
          this.alls.h2.attributes['text-shadow-color'].value =
          this.alls.h3.attributes['text-shadow-color'].value =
          this.alls.h4.attributes['text-shadow-color'].value =
          this.alls.h5.attributes['text-shadow-color'].value =
          this.alls.h6.attributes['text-shadow-color'].value =
          this.alls.p.attributes['text-shadow-color'].value =
            this.fontShadowColorAll.value
      },
      deep: true,
    },
  },
}
</script>
