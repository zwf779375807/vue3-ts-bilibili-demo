<template>
  <van-tabs v-model:active="active">
  <van-tab  v-for="item in data.list" :key="item.id" :title="item.text"></van-tab>
</van-tabs>
</template>
<script setup lang="ts"> 
import{ ref,reactive } from 'vue'
import axios from 'axios'
const active = ref(0);
interface ITabView{
  id:string
  text:string
}
const data = reactive({
   list:[] as ITabView[]
})
axios({
  url: '/navList',
  method: 'get'
}).then(res => {
   data.list = res.data.result
})
</script>
