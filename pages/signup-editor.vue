<template>
  <div class="markdown-editor">
    <MenuHeader />
    <no-ssr>
      <mavon-editor
        :toolbars="markdownOption"
        language="ja" style="height:85%"
      />
    </no-ssr>
  </div>
</template>

<script>
import MenuHeader from '~/components/MenuHeader.vue';
// import MenuHeader from '~/components/MenuHeader.vue';
  export default {
    props: {
        model: {
            //  type: Object | null,
            default: null,
        }
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
        };
    },
    components: { MenuHeader }
};
</script>

<style scoped>
  .markdown-editor {
    width: 100%;
    height: 100%;
  }
</style>
