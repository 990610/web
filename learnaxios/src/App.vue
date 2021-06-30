<template>
<div class="btn">
  <input type="button" value="点击" @click="itemClick()">
  <input type="button" value="点击2" @click="item2Click()">
  <input type="button" value="点击3" @click="item3Click()">
</div>
  
</template>

<script>
import axios from 'axios'
import {instance} from '../src/api/request'
import {getHome} from './api/home.js'

export default {
  name: 'App',
  components: {
    
  },
  methods: {
    itemClick() {
      axios({
        url:'http://152.136.185.210:7878/api/m5/home/multidata'
      }).then(res => {
        console.log(res);
      })
    },
    item2Click() {
      instance({
        url:'home/multidata'
      }).then(res => {
        console.log(res.data);
      })
    },
    item3Click() {
      getHome().then(res => {
        console.log(res.data);
      })
    }
  },
  create() {
    this.getHome()
  }
}
</script>

<style>

</style>
