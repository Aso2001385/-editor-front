<template>
  <v-row>
    <v-col cols="12" class="text-h6 d-flex align-center"> FontPropertys </v-col>
    <v-col cols="12" class="align-center">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Size </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['font-size'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Weight </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['font-weight'].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Line<br />Height </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['line-height'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Spacing </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['letter-spacing'].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Indent </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['text-indent'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Color </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes['color']" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> Padding </v-col>
    <v-col cols="12" class="">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Top </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['padding-top'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Bottom </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['padding-bottom'].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Left </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['padding-left'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-right"> Right </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['padding-right'].value" hide-details="auto" solo required />
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
          <v-text-field v-model="attributes['margin-top'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Bottom </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['margin-bottom'].value" hide-details="auto" solo required />
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
      <PalletPicker :receive="attributes['back-ground']" />
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

    <v-col cols="12" class="text-h6 d-flex align-center"> BorderStyle </v-col>
    <v-col cols="12" class="">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Top </v-col>
        <v-col cols="4">
          <v-select v-model="attributes['border-style-top'].value" :items="borderStyles" solo hide-details="auto" />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Bottom </v-col>
        <v-col cols="4">
          <v-select v-model="attributes['border-style-bottom'].value" :items="borderStyles" solo hide-details="auto" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Left </v-col>
        <v-col cols="4">
          <v-select v-model="attributes['border-style-left'].value" :items="borderStyles" solo hide-details="auto" />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Right </v-col>
        <v-col cols="4">
          <v-select v-model="attributes['border-style-right'].value" :items="borderStyles" solo hide-details="auto" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center">All</v-col>
        <v-col cols="10" class="d-flex align-center">
          <v-select v-model="borderStyleAll.value" :items="borderStyles" solo hide-details="auto" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> BorderRadius </v-col>
    <v-col cols="12" class="">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Top<br />Left </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['border-top-left-radius'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Top<br />Left </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['border-top-right-radius'].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Bottom<br />Left </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['border-bottom-left-radius'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Bottom<br />Right </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['border-bottom-right-radius'].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center">All</v-col>
        <v-col cols="10" class="d-flex align-center">
          <v-text-field v-model="borderRadiusAll.value" hide-details="auto" solo required />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-h6 d-flex align-center"> BorderWidth </v-col>
    <v-col cols="12" class="">
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Top </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['border-width-top'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Bottom </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['border-width-bottom'].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Left </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['border-width-left'].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Right </v-col>
        <v-col cols="4">
          <v-text-field v-model="attributes['border-width-right'].value" hide-details="auto" solo required />
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
          <PalletPicker :receive="attributes['border-color-top']" />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Bottom </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes['border-color-bottom']" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="d-flex align-center"> Left </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes['border-color-left']" />
        </v-col>
        <v-col cols="2" class="d-flex align-center"> Right </v-col>
        <v-col cols="4">
          <PalletPicker :receive="attributes['border-color-right']" />
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
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      borderStyles: ['none', 'hidden', 'solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset'],
      marginAll: { value: '0' },
      paddingAll: { value: '0' },
      borderRadiusAll: { value: '0' },
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
        this.attributes['padding-top'].value =
          this.attributes['padding-bottom'].value =
          this.attributes['padding-left'].value =
          this.attributes['padding-right'].value =
            this.paddingAll.value
      },
      deep: true,
    },
    marginAll: {
      handler() {
        this.attributes['margin-top'].value = this.attributes['margin-bottom'].value = this.marginAll.value
      },
      deep: true,
    },
    borderStyleAll: {
      handler() {
        this.attributes['border-style-top'].value =
          this.attributes['border-style-bottom'].value =
          this.attributes['border-style-left'].value =
          this.attributes['border-style-right'].value =
            this.borderStyleAll.value
      },
      deep: true,
    },
    borderRadiusAll: {
      handler() {
        this.attributes['border-top-left-radius'].value =
          this.attributes['border-top-right-radius'].value =
          this.attributes['border-bottom-left-radius'].value =
          this.attributes['border-bottom-right-radius'].value =
            this.borderRadiusAll.value
      },
      deep: true,
    },
    borderWidthAll: {
      handler() {
        this.attributes['border-width-top'].value =
          this.attributes['border-width-bottom'].value =
          this.attributes['border-width-left'].value =
          this.attributes['border-width-right'].value =
            this.borderWidthAll.value
      },
      deep: true,
    },
    borderColorAll: {
      handler() {
        this.attributes['border-color-top'].value =
          this.attributes['border-color-bottom'].value =
          this.attributes['border-color-left'].value =
          this.attributes['border-color-right'].value =
            this.borderColorAll.value
      },
      deep: true,
    },
  },
}
</script>
