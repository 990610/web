<template>
  <div id="app">
    <router-view/>
    <main-tabbar/>
  </div>
</template>

<script>
import MainTabbar from './components/maintabbar/MainTabbar.vue'

export default {
  name: 'App',  
  components: { 
    MainTabbar
  }
}
</script>

<style>
 /* 在style导入文件方式 */
  @import "./assets/css/base.css";
</style>
