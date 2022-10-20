<template>
  <v-container style="background-color:#dcdcdc" class="mt-10%">
      <v-row class="mt-15">
        <v-card style="background-color:white; float:left; width:30%; height:12%" class="mr-5 mt-16 ml-3" v-for="list in lists" :key="list.id">
          <v-col cols="8" class="black--text" text-align:center>
            <p>{{ list.name }}</p>
            <p>{{ list.text }}</p>
          </v-col>
        </v-card>
      </v-row>
  </v-container>
  </template>

<script>
export default {
  data(){
    return {
      lists:[
      {id:1,name:'project1',text:'project1の内容表示'},
      {id:2,name:'project2',text:'project2の内容表示'},
      {id:3,name:'project3',text:'project3の内容表示'},
      {id:4,name:'project4',text:'project4の内容表示'},
      {id:5,name:'project5',text:'project5の内容表示'},
      {id:6,name:'新規作成',text:'projectの新規作成'}
      ]
    }
  }
}
</script>
