<template>
  <v-row>
    <v-col cols="12" class="text-h6 d-flex align-center"> FontPropertys </v-col>
    <v-col cols="12" class="align-center">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Size </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[13].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Weight </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[14].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> LineHeigh </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[16].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Spacing </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[17].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Indent </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[18].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> color </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes[15]" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> Padding </v-col>
    <v-col cols="12" class="">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Top </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[2].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Bottom </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[3].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Left </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[4].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Right </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[5].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center">All</v-col>
        <v-col cols="10" class="d-flex align-center">
          <v-text-field v-model="paddingAll.value" hide-details="auto" solo required />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> Margin </v-col>
    <v-col cols="12" class="">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Top </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[6].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Bottom </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[7].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center">Y</v-col>
        <v-col cols="10" class="d-flex align-center">
          <v-text-field v-model="marginAll.value" hide-details="auto" solo required />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" class="text-h6 d-flex align-center"> BackGround </v-col>
    <v-col cols="12" class="align-center">
      <PalletPicker :receive="attributes[10]" />
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> BoxShadow </v-col>
    <v-col cols="12" class="align-center">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> X </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[20].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Y </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[21].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Blur </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[22].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Color </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes[23]" />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" class="text-h6 d-flex align-center"> FontShadow </v-col>
    <v-col cols="12" class="align-center">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> X </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[24].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Y </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[25].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Blur </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[26].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Color </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes[27]" />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" class="text-h6 d-flex align-center"> BorderStyle </v-col>
    <v-col cols="12" class="">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Top </v-col>
        <v-col cols="4">
          <v-select v-model="attributes[32].value" :items="borderStyles" solo hide-details="auto" />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Bottom </v-col>
        <v-col cols="4">
          <v-select v-model="attributes[34].value" :items="borderStyles" solo hide-details="auto" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Left </v-col>
        <v-col cols="4">
          <v-select v-model="attributes[35].value" :items="borderStyles" solo hide-details="auto" />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Right </v-col>
        <v-col cols="4">
          <v-select v-model="attributes[33].value" :items="borderStyles" solo hide-details="auto" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center">All</v-col>
        <v-col cols="10" class="d-flex align-center">
          <v-select v-model="borderStyleAll.value" :items="borderStyles" solo hide-details="auto" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> BorderWidth </v-col>
    <v-col cols="12" class="">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Top </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[28].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Bottom </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[30].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Left </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[31].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Right </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes[29].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center">All</v-col>
        <v-col cols="10" class="d-flex align-center">
          <v-text-field v-model="borderWidthAll.value" hide-details="auto" solo required />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> BorderColor </v-col>
    <v-col cols="12" class="">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Top </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes[36]" />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Bottom </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes[38]" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Left </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes[39]" />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Right </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes[37]" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center">All</v-col>
        <v-col cols="10">
          <PalletPicker :receive="borderColorAll" />
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
  },
  data() {
    return {
      borderStyles: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'],
      marginAll: { value: '0' },
      paddingAll: { value: '0' },
      borderWidthAll: { value: '0' },
      borderStyleAll: { value: 'none' },
      borderColorAll: { value: 'rgba(0,0,0,1)' },
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
    paddingAll: {
      handler() {
        this.attributes[2].value =
          this.attributes[3].value =
          this.attributes[4].value =
          this.attributes[5].value =
            this.paddingAll.value
      },
      deep: true,
    },
    marginAll: {
      handler() {
        this.attributes[6].value = this.attributes[7].value = this.marginAll.value
      },
      deep: true,
    },
    borderStyleAll: {
      handler() {
        this.attributes[32].value =
          this.attributes[33].value =
          this.attributes[34].value =
          this.attributes[35].value =
            this.borderStyleAll.value
      },
      deep: true,
    },
    borderWidthAll: {
      handler() {
        this.attributes[28].value =
          this.attributes[29].value =
          this.attributes[30].value =
          this.attributes[31].value =
            this.borderWidthAll.value
      },
      deep: true,
    },
    borderColorAll: {
      handler() {
        this.attributes[36].value =
          this.attributes[37].value =
          this.attributes[38].value =
          this.attributes[39].value =
            this.borderColorAll.value
      },
      deep: true,
    },
  },
}
</script>
