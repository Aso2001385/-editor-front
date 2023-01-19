<template>
  <v-row>
    <v-col cols="12" class="text-h6 d-flex align-center"> BackGround </v-col>
    <v-col cols="12" class="align-center">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> th </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes['th-back-ground']" />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> td </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes['td-back-ground']" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> BorderWidth </v-col>
    <v-col cols="12" class="d-flex align-center">
      <v-text-field v-model="attributes['inner-border-width'].value" hide-details="auto" solo required />
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> BorderStyle </v-col>
    <v-col cols="12" class="d-flex align-center">
      <v-select v-model="attributes['inner-border-style'].value" :items="borderStyles" solo hide-details="auto" />
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> BorderColor </v-col>
    <v-col cols="12" class="">
      <PalletPicker :receive="attributes['inner-border-color']" />
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> BoxShadow </v-col>
    <v-col cols="12" class="align-center">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> X </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['box-shadow-x'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Y </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['box-shadow-y'].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Blur </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['box-shadow-blur'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Color </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes['box-shadow-color']" />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" class="text-h6 d-flex align-center"> FontShadow </v-col>
    <v-col cols="12" class="align-center">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> X </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['text-shadow-x'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Y </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['text-shadow-y'].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Blur </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['text-shadow-blur'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Color </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes['text-shadow-color']" />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" class="text-h6 d-flex align-center"> FontSize </v-col>
    <v-col cols="12" class="d-flex align-center">
      <v-row>
        <v-col cols="2" class="align-center"> th </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['th-font-size'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> td </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['td-font-size'].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> FontWeight </v-col>
    <v-col cols="12" class="align-center">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> th </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['th-font-weight'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> td </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['td-font-weight'].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> FontColor </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> th </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes['th-color']" />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> td </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes['td-color']" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> LineHeight </v-col>
    <v-col cols="12" class="d-flex align-center">
      <v-text-field v-model="attributes['line-height'].value" hide-details="auto" solo required />
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> Spacing </v-col>
    <v-col cols="12" class="d-flex align-center">
      <v-text-field v-model="attributes['letter-spacing'].value" hide-details="auto" solo required />
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
  },
  data() {
    return {
      borderStyles: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
    }
  },
  computed: {
    attributes: {
      get() {
        console.log(this.receive)
        return this.receive
      },
    },
  },
}
</script>
