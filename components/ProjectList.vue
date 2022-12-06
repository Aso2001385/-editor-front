<!-- eslint-disable vue/no-v-html -->
<template>
  <v-container style="background-color: #dcdcdc">
    <v-row>
      <div :to="project_link" class="white--text" style="text-decoration: none" @click="RoutePages(id)">
        <v-row style="float: left; background-color: white">
          <div class="pt-5 pb-5" style="width: 100%" :style="{ backgroundColor: backColor }">
            <v-col
              cols="12"
              class="black--text"
              style="height: 9rem; width: 60rem; margin-left: 1%; padding-bottom: 10rem"
            >
              <div id="DesignHtml" class="warp" style="height: 5rem; width: 80%" v-html="text"></div>
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
              {{ name }}
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
    receive: {
      type: Object,
      default: () => ({
        id: 0,
        name: '',
        text: '',
        backgroundColor: '',
        primaryColor: '',
        secondaryColor: '',
        projectLink: 0,
      }),
    },
  },
  data() {
    return {
      markdown: '# Marked in the browserRendered by **marked**.',
      project_link: '',
      EDITORSETTING: 1,
      DESIGNSET: 2,
      DESIGNPREVIEW: 3,
      tagName: [],
      h1TagComp: [],
      h2TagComp: [],
      designSetH1: {},
      designSetH2: {},
      count: 0,
    }
  },
  computed: {
    id: {
      get() {
        console.log('idの値は' + this.receive.id)
        return this.receive.id
      },
      // set(newVal) {
      //   this.$emit('changeSkill', { index: this.index, key: 'name', value: newVal })
      // },
    },
    name: {
      get() {
        return this.receive.name
      },
    },
    text: {
      get() {
        return this.receive.text
      },
    },
    backColor: {
      get() {
        return this.receive.backgroundColor
      },
    },
    primaryColor: {
      get() {
        return this.receive.primaryColor
      },
    },
    secondaryColor: {
      get() {
        return this.receive.secondaryColor
      },
    },
    projectLink: {
      get() {
        return this.receive.projectLink
      },
    },
  },
  mounted() {
    this.count = Number(localStorage.getItem('DesignCount'))
    // const userProjectId = localStorage.getItem('projectCreateUpdate')
    const killDesignSetH1 = localStorage.getItem('DesignSetH1')
    this.designSetH1 = killDesignSetH1.split(',')
    const killDesignSetH2 = localStorage.getItem('DesignSetH2')
    this.designSetH2 = killDesignSetH2.split(',')

    // if (this.projectLink === this.EDITORSETTING) {
    //   console.log('ページ遷移が行われている')
    //   this.project_link = `/projects/${userProjectId}/pages/${userProjectId}`
    // }
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
      if (this.projectLink === this.EDITORSETTING) {
        // デザインなどの変更ページへ
        this.$router.push({ path: `${this.project_link}` })
      } else if (this.projectLink === this.DESIGNSET) {
        //
      } else if (this.projectLink === this.DESIGNPREVIEW) {
        this.$router.push({ path: `/design-preview` })
      } else {
        // データが保存されていたら確認画面移る/ない場合は普通にcreate-editorの画面が開く
        const confilmMarkdownData = localStorage.getItem('MarkdownData')
        console.log(confilmMarkdownData !== '')
        if (confilmMarkdownData !== '') {
          //  前回編集していた情報が0(新規作成ページ)だった場合そのデータを保存しておくか削除させるかをユーザーに決めさせる
          const confirm = window.confirm(
            '編集途中のプロジェクトがあります。保存しますか？(保存しない場合、編集したデータは破棄されます。)'
          )
          if (confirm) {
            localStorage.setItem('ProjectId', value)
            this.$router.push({ path: `/projects/${value}/pages/1` })
          } else {
            localStorage.setItem('ProjectId', value)
            localStorage.setItem('MarkdownData', '')
            localStorage.setItem('HtmlFromMarkdown', '')
            this.$router.push({ path: `/projects/${value}/pages/1` })
          }
        } else {
          this.$router.push({ path: `/projects/${value}/pages/1` })
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
