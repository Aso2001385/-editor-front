<template>
  <v-container style="background-color: #dcdcdc">
    <v-row>
      <div
        :to="project_link"
        class="white--text"
        style="text-decoration: none"
        @click="RoutePages(ProjectData.PreviewId)"
      >
        <v-row style="float: left; background-color: white">
          <div class="pt-5 pb-5" style="width: 100%" :style="{ backgroundColor: ProjectData.PreviewBackColor }">
            <v-col
              cols="12"
              class="black--text"
              style="height: 9rem; width: 60rem; margin-left: 1%; padding-bottom: 10rem"
            >
              <div id="DesignHtml" class="warp" style="height: 5rem; width: 80%" v-html="ProjectData.PreviewText"></div>
            </v-col>
          </div>
          <v-col
            cols="12"
            class="black--text"
            style="border-top: 1px solid lightgrey; background: transparent; overflow: hidden; width: 100%"
          >
            <p
              id="project-name"
              style="
                font-size: 17px;
                margin-left: 2.5%;
                color: #212121;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 12rem;
              "
            >
              {{ ProjectData.PreviewName }}
            </p>
          </v-col>
        </v-row>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    ProjectData: Object,
  },
  data() {
    return {
      markdown: '# Marked in the browserRendered by **marked**.',
      project_link: '',
      EDITORSETTING: 1,
      tagName: [],
      h1TagComp: [],
      h2TagComp: [],
      designSetH1: {},
      designSetH2: {},
      count: 0,
    }
  },
  mounted() {
    this.count = Number(localStorage.getItem('DesignCount'))
    const userProjectId = localStorage.getItem('projectCreateUpdate')
    const killDesignSetH1 = localStorage.getItem('DesignSetH1')
    this.designSetH1 = killDesignSetH1.split(',')
    const killDesignSetH2 = localStorage.getItem('DesignSetH2')
    this.designSetH2 = killDesignSetH2.split(',')

    if (this.ProjectData.ProjectLink === this.EDITORSETTING) {
      this.project_link = `/projects/${userProjectId}/pages/${userProjectId}/settings`
      // this.$router.push({ path: `/projects/${userProjectId}/pages/${userProjectId}/settings` })
    }
    const design = document.getElementById('DesignHtml')
    design.id = 'disign-set' + this.count
    this.count = this.count + 1
    localStorage.setItem('DesignCount', this.count)
    const designPrimary = document.getElementById(design.id)
    // console.log(designPrimary)
    this.selectGenreComp(designPrimary, this.designSetH1, this.designSetH2, this.count)
  },
  methods: {
    RoutePages(value) {
      // 押された瞬間にローカルに押されたページ(createなのかupdateなのかの判定に)
      localStorage.setItem('projectCreateUpdate', value)
      // 1がデザイン 0がプロジェクトの作成更新
      if (this.ProjectData.ProjectLink === this.EDITORSETTING) {
        // デザインなどの変更ページへ
        // localStorage.setItem('projectCreateUpdate', value)  いらない
        this.$router.push({ path: `${this.project_link}` })
      } else {
        //  create-editorページへ
        // if (localStorage.getItem('projectCreateUpdate') === '0') {
        //   // 空だったら編集しているデータがないという証拠
        //   this.$router.push({ path: `/projects/${value}` })
        // }

        //  前回編集していた情報が0(新規作成ページ)だった場合そのデータを保存しておくか削除させるかをユーザーに決めさせる
        const confirm = window.confirm(
          '編集途中のプロジェクトがあります。保存しますか？(保存しない場合、編集したデータは破棄されます。)'
        )
        if (confirm) {
          // trueの場合は保存をする
          // apiでデータベースに保存させる処理をかく
          // ローカルのHtmlFronMarkdownデータを
          // マークダウンデータを初期化する
          this.$router.push({ path: `/projects/${value}` })
        } else {
          // データを破棄する
          // localStorage.setItem('projectCreateUpdate', null)
          // 更新ならデータベースのデータを入れる
          // 新規の破棄ならデフォルトのデータを入れる
          localStorage.setItem('MarkdownData', ' タイトル \n ## サブタイトル')
          this.$router.push({ path: `/projects/${value}` })
        }
      }
    },
    async selectGenreComp(value, colorh1, colorh2, cnt) {
      this.h1TagComp = await value.getElementsByTagName('h1')
      this.h2TagComp = await value.getElementsByTagName('h2')
      if (this.h1TagComp !== '') {
        this.h1TagComp[0].style.color = colorh1[cnt - 1]
      }
      if (this.h2TagComp !== '') {
        this.h2TagComp[0].style.color = colorh2[cnt - 1]
      }
    },
  },
}
</script>

<style lang="scss">
#project-names {
  background: #eee;
  overflow: hidden;
  width: 30%;

  #project-name {
    overflow: hidden;
    white-space: nowrap;
  }
}
.container {
  background: #eee;
  overflow: hidden;
  width: 100%;
  height: 100%;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.warp {
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
