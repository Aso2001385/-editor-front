<template>
  <v-row>
    <v-col cols="4" class="text-h6 d-flex align-center"> Paddings </v-col>
    <v-col cols="8" class="">
      <v-row>
        <v-col cols="3" class="d-flex align-center"> TOP </v-col>
        <v-col cols="3">
          <v-text-field v-model="attributes[2].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="3" class="d-flex align-center"> Bottom </v-col>
        <v-col cols="3">
          <v-text-field v-model="attributes[3].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="d-flex align-center"> Left </v-col>
        <v-col cols="3">
          <v-text-field v-model="attributes[4].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="3" class="d-flex align-center"> Right </v-col>
        <v-col cols="3">
          <v-text-field v-model="attributes[5].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="4" class="text-h6 d-flex align-center">Margins </v-col>
    <v-col cols="8" class="">
      <v-row>
        <v-col cols="3" class="d-flex align-center"> TOP </v-col>
        <v-col cols="3">
          <v-text-field v-model="attributes[6].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="3" class="d-flex align-center"> Bottom </v-col>
        <v-col cols="3">
          <v-text-field v-model="attributes[7].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="d-flex align-center"> Left </v-col>
        <v-col cols="3">
          <v-text-field v-model="attributes[8].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="3" class="d-flex align-center"> Right </v-col>
        <v-col cols="3">
          <v-text-field v-model="attributes[9].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="4" class="text-h6 d-flex align-center"> BackGround </v-col>
    <v-col cols="8" class="d-flex align-center">
      <v-sheet
        :color="attributes[10].value"
        elevation="1"
        height="40"
        rounded="4"
        style="width: 100%"
        @click="colorDialogs.backGround = !colorDialogs.backGround"
      />
      <v-dialog v-model="colorDialogs.backGround" class="d-flex" width="auto">
        <v-color-picker v-model="attributes[10].value" class="mx-auto" />
      </v-dialog>
    </v-col>
    <!-- <v-col cols="3" class="text-h6 d-flex align-center"> BoxShadow </v-col>
    <v-col cols="9" class="d-flex align-center">
      <v-text-field v-model="attributes[11].value" hide-details="auto" solo required />
    </v-col> -->
    <v-col cols="4" class="text-h6 d-flex align-center"> Font </v-col>
    <v-col cols="8" class="d-flex align-center">
      <v-text-field v-model="attributes[12].value" hide-details="auto" solo required />
    </v-col>

    <v-col cols="4" class="text-h6 d-flex align-center"> FontSize </v-col>
    <v-col cols="8" class="d-flex align-center">
      <v-text-field v-model="attributes[13].value" hide-details="auto" solo required />
    </v-col>
    <v-col cols="4" class="text-h6 d-flex align-center"> FontWeight </v-col>
    <v-col cols="8" class="d-flex align-center">
      <v-text-field v-model="attributes[14].value" hide-details="auto" solo required />
    </v-col>
    <v-col cols="4" class="text-h6 d-flex align-center"> FontColor </v-col>
    <v-col cols="8" class="d-flex align-center">
      <v-sheet
        :color="attributes[15].value"
        elevation="1"
        height="40"
        rounded="4"
        style="width: 100%"
        @click="colorDialogs.font = !colorDialogs.font"
      />
      <v-dialog v-model="colorDialogs.font" class="d-flex" width="auto">
        <v-color-picker v-model="attributes[15].value" class="mx-auto" />
      </v-dialog>
    </v-col>
    <v-col cols="4" class="text-h6 d-flex align-center"> LineHeight </v-col>
    <v-col cols="8" class="d-flex align-center">
      <v-text-field v-model="attributes[16].value" hide-details="auto" solo required />
    </v-col>
    <v-col cols="4" class="text-h6 d-flex align-center"> Spacing </v-col>
    <v-col cols="8" class="d-flex align-center">
      <v-text-field v-model="attributes[17].value" hide-details="auto" solo required />
    </v-col>
    <v-col cols="4" class="text-h6 d-flex align-center"> Indent </v-col>
    <v-col cols="8" class="d-flex align-center">
      <v-text-field v-model="attributes[18].value" hide-details="auto" solo required />
    </v-col>
    <!-- <v-col cols="4" class="text-h6 d-flex align-center"> text-decoration-line </v-col>
    <v-col cols="8" class="d-flex align-center">
      <v-text-field v-model="attributes[19].value" hide-details="auto" solo required />
    </v-col> -->
    <!-- <v-col cols="4" class="text-h6 d-flex align-center"> TextShadow </v-col>
    <v-col cols="8" class="d-flex align-center">
      <v-text-field v-model="attributes[20].value" hide-details="auto" solo required />
    </v-col> -->

    <v-col cols="4" class="text-h6 d-flex align-center"> BorderColor </v-col>
    <v-col cols="8" class="">
      <v-row>
        <v-col cols="3" class="d-flex align-center"> TOP </v-col>
        <v-col cols="3">
          <v-text-field v-model="attributes[2].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="3" class="d-flex align-center"> Bottom </v-col>
        <v-col cols="3">
          <v-text-field v-model="attributes[3].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="d-flex align-center"> Left </v-col>
        <v-col cols="3">
          <v-text-field v-model="attributes[4].value" hide-details="auto" solo required />
        </v-col>
        <v-col cols="3" class="d-flex align-center"> Right </v-col>
        <v-col cols="3">
          <v-text-field v-model="attributes[5].value" hide-details="auto" solo required />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
    receive: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      colorDialogs: {
        backGround: false,
        font: false,
        top: false,
        bottom: false,
        left: false,
        right: false,
      },
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
