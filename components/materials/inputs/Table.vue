<template>
  <v-row>
    <v-col cols="12" class="text-h6 d-flex align-center"> BackGround </v-col>
    <v-col cols="12" class="align-center">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> th </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes[0]" />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> td </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes[1]" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> BorderWidth </v-col>
    <v-col cols="12" class="d-flex align-center">
      <v-text-field v-model="attributes[2].value" hide-details="auto" solo required />
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> BorderStyle </v-col>
    <v-col cols="12" class="d-flex align-center">
      <v-select v-model="attributes[3].value" :items="borderStyles" solo hide-details="auto" />
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> BorderColor </v-col>
    <v-col cols="12" class="">
      <PalletPicker :receive="attributes[4]" />
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> BoxShadow </v-col>
    <v-col cols="12" class="align-center">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> X </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[11].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Y </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[12].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Blur </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[13].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Color </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes[14]" />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" class="text-h6 d-flex align-center"> FontShadow </v-col>
    <v-col cols="12" class="align-center">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> X </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[15].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Y </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[16].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Blur </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[17].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Color </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes[18]" />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" class="text-h6 d-flex align-center"> FontSize </v-col>
    <v-col cols="12" class="d-flex align-center">
      <v-row>
        <v-col cols="2" class="align-center"> th </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[19].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> td </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[20].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> FontWeight </v-col>
    <v-col cols="12" class="align-center">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> th </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[21].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> td </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[22].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> FontColor </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> th </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes[23]" />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> td </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes[24]" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> LineHeight </v-col>
    <v-col cols="12" class="d-flex align-center">
      <v-text-field v-model="attributes[25].value" hide-details="auto" solo required />
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> Spacing </v-col>
    <v-col cols="12" class="d-flex align-center">
      <v-text-field v-model="attributes[26].value" hide-details="auto" solo required />
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
  },
  data() {
    return {
      borderStyles: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
    }
  },
  computed: {
    attributes: {
      get() {
        return this.receive
      },
    },
  },
}
</script>
