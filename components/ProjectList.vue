<template>
  <v-container style="background-color: #dcdcdc" class="mt-7">
    <v-row class="mt-8">
      <NuxtLink to="/create-editor" class="white--text" style="text-decoration: none">
        <v-row style="float: left">
          <v-card style="background-color: white; height: 20%">
            <div class="pt-5 pb-5" style="width: 100%; background-color: pink">
              <v-col
                cols="12"
                class="black--text"
                style="height: 9rem; width: 60rem; margin-left: 1%; padding-bottom: 10rem"
              >
                <div
                  id="container"
                  class="warp"
                  v-html="ProjectData.PreviewText"
                  style="height: 5rem; width: 80%"
                ></div>
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
                  font-size: 20px;
                  margin-left: 3%;
                  color: #212121;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  width: 15rem;
                "
              >
                {{ ProjectData.PreviewName }}
              </p>
            </v-col>
          </v-card>
        </v-row>
      </NuxtLink>
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
      lists: [
        { id: 1, name: 'project1', text: 'project1の内容表示' },
        { id: 2, name: 'project2', text: 'project2の内容表示' },
        { id: 3, name: 'project3', text: 'project3の内容表示' },
        { id: 4, name: 'project4', text: 'project4の内容表示' },
        { id: 5, name: 'project5', text: 'project5の内容表示' },
      ],
    }
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
