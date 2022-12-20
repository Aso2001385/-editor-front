<template>
  <v-row>
    <v-col cols="12" class="text-h6 d-flex align-center"> FontPropertys </v-col>
    <v-col cols="12" class="align-center">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Size </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['ul-font-size'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Weight </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['ul-font-weight'].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Line<br />Height </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['ul-line-height'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Letter<br />Spacing </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['ul-letter-spacing'].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> Color </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Font </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes['ul-color']" />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Mark </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes['li-marker-color']" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> All </v-col>
        <v-col cols="10">
          <PalletPicker :receive="fontColorAll" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> Margin </v-col>
    <v-col cols="12" class="">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Top </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['ul-margin-top'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Bottom </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['ul-margin-bottom'].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center">Y</v-col>
        <v-col cols="10" class="d-flex align-center">
          <v-text-field v-model="marginAll.value" hide-details="auto" solo required />
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
  },
  data() {
    return {
      borderStyles: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
      fontColorAll: { value: 'rgba(50,50,50,1)' },
      marginAll: { value: '0' },
    }
  },
  computed: {
    attributes: {
      get() {
        return this.receive
      },
    },
  },
  watch: {
    fontColorAll: {
      handler() {
        this.attributes['ul-color'].value = this.attributes['li-marker-color'].value = this.fontColorAll.value
      },
      deep: true,
    },
    marginAll: {
      handler() {
        this.attributes['ul-margin-top'].value = this.attributes['ul-margin-bottom'].value = this.marginAll.value
      },
      deep: true,
    },
  },
}
</script>
