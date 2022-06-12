<template>

  <div class="list" >
     <VideoItem v-for="item in list" :key="item.id" :video='item'/>
  </div>
 
</template>

<script lang="ts" setup>
 import VideoItem from "@/components/video-item.vue";
import axios from 'axios'
import {ref} from 'vue'
 interface IVideoInfo{
    id?: string,
    link?: string,
    imgSrc?: string,
    desc?: string,
    playCount?: string,
    commentCount?: string,
    videoSrc?: string
}
 const list = ref<IVideoInfo[]>([])
 axios({
  url: '/videosList',
  method: 'get'
}).then(res => {
   list.value = res.data.result
})
</script>

<style lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1vw;
}
</style>