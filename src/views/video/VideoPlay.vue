<template>
  <homeHeadVue/>
  <videoPlay :videoInfo='videoInfo'/>
   <videoDetialVue :videoInfo='videoInfo'/>
   <videoBottom/>
</template>

<script lang="ts" setup>
import axios from 'axios'
import homeHeadVue from '@/components/home-head.vue';
import videoPlay from "./compontents/videoPlay.vue";
import videoDetialVue from './compontents/videoDetial.vue';
import videoBottom from './compontents/video-bottom.vue'

import { ref } from 'vue';
import {IVideoInfo} from './types'
import { useRoute } from 'vue-router'
const route = useRoute();
const videoInfo = ref<IVideoInfo>({})
axios({
  url: '/videoDetail',
  method: 'get',
  // 根据路由对象的 id 参数发送请求获取对应的视频详情
  params: { id: route.query.id }
}).then(({ data }) => {
  videoInfo.value = data.result
  console.log('视频详情数据', data.result)
})
</script>