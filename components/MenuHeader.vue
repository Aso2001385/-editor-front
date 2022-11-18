<template>
  <div class="menuBar" style="width: 100%">
    <v-flex>
      <v-row class="grey darken-3 ma-0 pa-2">
        <v-col>
          <div class="white--text" @click="RoutePages(0)">HOME</div>
          <!-- <NuxtLink to="/project-list" class="white--text" style="text-decoration: none">HOME</NuxtLink> -->
        </v-col>
        <v-col><a href="#" class="white--text" style="text-decoration: none">PAGES</a></v-col>
        <v-col>
          <div class="white--text" @click="RoutePages(2)">SETTING</div>
          <!-- <NuxtLink to="/editor-setting" class="white--text" style="text-decoration: none">SETTING</NuxtLink> -->
        </v-col>
        <v-col><a href="#" class="white--text" style="text-decoration: none" @click="getMarkData()">SAVE</a></v-col>
      </v-row>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markData: '# タイトル \n ## サブタイトル',
    }
  },
  methods: {
    getMarkData() {
      localStorage.setItem('markdownData', this.markData)
      alert('保存しました')
      this.markData = ''
    },
    RoutePages(value) {
      const userProjectId = localStorage.getItem('projectCreateUpdate')
      console.log('Homeボタンなどが押された')
      if (value === 0) {
        this.$router.push({ path: `/projects/` })
      } else if (value === 2) {
        // ここで今何ページ目なのかをローカルに入れたデータを取得して表示するようにする
        this.$router.push({ path: `/projects/${userProjectId}/pages/${userProjectId}/settings` })
      } else {
        this.$router.push({ path: `/projects/` })
      }
    },
  },
}
</script>

<!-- <style scoped>
.markdown-editor {
  width: 100%;
  height: 100%;
}
nav ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  background-color: black;
}
/* ナビ部分 */
nav ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 1em auto 0 auto;
  width: 100%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  text-align: center;
}
nav li {
  display: block;
  width: 50%;
  border-bottom: 3px solid transparent;
}
nav a {
  display: block;
  width: 50%;
  text-decoration: none;
  color: lightgrey;
  padding-bottom: 5px;
}
nav li.current {
  font-weight: 900;
  border-bottom: 3px solid orange;
}

nav li:hover {
  color: black;
  font-weight: 900;
}
</style> -->
