<template>
  <v-container style="background-color: #dcdcdc" class="mt-15">
    <v-row class="mt-15">
      <v-col v-for="(preview, index) in default_previews" :key="index" cols="4" style="float: left">
        <NuxtLink to="/create-editor" class="white--text" style="text-decoration: none">
          <v-row style="float: left; width: 100%">
            <v-card style="background-color: white; width: 100%; height: 20rem" class="mt-2">
              <div class="mt-5 mb-15" style="width: 100%; height: 30%; margin-top: 30%; padding-bottom: 40%">
                <v-col cols="12" class="black--text" style="height: 10px">
                  <div id="container" class="warp" v-html="preview.text"></div>
                </v-col>
              </div>
              <v-col
                cols="12"
                class="black--text"
                style="
                  border-top: 1px solid lightgrey;
                  background: transparent;
                  overflow: hidden;
                  width: 100%;
                  margin-top: 20%;
                "
              >
                <p
                  id="project-name"
                  style="
                    font-size: 20px;
                    margin-left: 2.5%;
                    padding-top: 5%;
                    color: #212121;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 200px;
                  "
                >
                  {{ preview.name }}
                </p>
              </v-col>
            </v-card>
          </v-row>
        </NuxtLink>
      </v-col>
      <v-col cols="4" style="float: left">
        <NuxtLink to="/create-editor" class="white--text" style="text-decoration: none">
          <v-row style="width: 100%; float: left">
            <v-card style="background-color: transparent; height: 15rem; width: 100%" class="mt-3">
              <div
                class="mt-15 mb-15"
                style="width: 100%; height: 30%; margin-top: 30%; padding-bottom: 32%; text-align: center"
              >
                <v-col cols="12" class="black--text">
                  <v-icon large class="grey--text" style="font-size: 80px; margin-left: auto">mdi-plus-circle</v-icon>
                </v-col>
              </div>

              <v-col cols="12" class="black--text" style="border-top: 1px solid lightgrey; background-color: white">
                <p style="font-size: 20px; margin-left: 2.5%; margin-top: 3%; margin-bottom: 3%; color: #212121">
                  Project新規作成
                </p>
              </v-col>
            </v-card>
          </v-row>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import previews from '../assets/previews.json'

export default {
  data() {
    return {
      markdown: '# Marked in the browserRendered by **marked**.',
      lists: [
        { id: 1, name: 'project1', text: 'project1の内容表示' },
        { id: 2, name: 'project2', text: 'project2の内容表示' },
        { id: 3, name: 'project3', text: 'project3の内容表示' },
        { id: 4, name: 'project4', text: 'project4の内容表示' },
        { id: 5, name: 'project5', text: 'project5の内容表示' },
      ],
      default_previews: null,
    }
  },
  mounted() {
    const data = previews
    this.default_previews = data
  },
  methods: {},
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
