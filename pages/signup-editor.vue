<template>
  <div class="markdown-editor">
    <MenuHeader />
    <no-ssr>
      <v-btn
        @click="color(colorName)"
        color="grey lighten-3"
        style="z-index: 2; position: absolute; margin-left: 88%; top: 90%"
      >
        <v-icon large :class="iconColor" style="font-size: 35px"> mdi-eyedropper-variant</v-icon>
        <div :class="iconColor">{{ name }}</div>
      </v-btn>
      <mavon-editor
        :toolbars="markdownOption"
        language="ja"
        style="height: 90vh; overflow: hidden !important; overflow-y: auto; z-index: 1"
      />
    </no-ssr>
  </div>
</template>

<script>
import MenuHeader from '~/components/MenuHeader.vue'

export default {
  props: {
    model: {
      //  type: Object | null,
      default: null,
    },
  },
  data() {
    return {
      markdownOption: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        imagelink: true,
        code: true,
        table: true,
        fullscreen: true,
        htmlcode: true,
      },
      iconColor: 'black--text',
      colorName: 1,
      name: 'black',
    }
  },
  methods: {
    color(value) {
      if (value === 1) {
        this.colorName = value + 1
        this.name = 'red'
        this.iconColor = 'red--text'
      } else if (value === 2) {
        this.colorName = value + 1
        this.name = 'blue'
        this.iconColor = 'blue--text'
      } else if (value === 3) {
        this.colorName = value + 1
        this.name = 'green'
        this.iconColor = 'green--text'
      } else if (value === 4) {
        this.colorName = 0
        this.name = 'purple'
        this.iconColor = 'purple--text'
      } else {
        this.colorName = 1
        this.name = 'black'
        this.iconColor = 'black--text'
      }
    },
  },
  components: { MenuHeader },
}
</script>

<style scoped>
.markdown-editor {
  width: 100%;
  height: 100%;
}
</style>
