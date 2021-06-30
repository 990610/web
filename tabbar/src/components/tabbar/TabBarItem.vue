<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- slot预留两个空间 -->
    <!-- 用div包裹slot -->
    <div v-if="isActive">  <slot name="item-icon"></slot>   </div>
    <div v-else>  <slot name="item-active-icon"></slot>     </div>  
    <div :style="activeStyle">     <slot name="item-text"></slot>  </div>  
      
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    //传递path,和字体颜色
    //父组件的东西(/home)，在模板中传递给子组件(path)，子组件再注册(path)
    path: String,
    activeColor:{
      type: String,
      //默认颜色
      default: 'deepPink'
    }
  },
  data(){
    return {
    }
  },
  computed: {
    isActive() {
      //(比较难)判断自己的path（父组件传过来的path） 是否是活跃路由（当前路由）的path
     //home ->item1(/home) == true
      return this.$route.path == this.path
    },
    activeStyle(){
      return this.isActive ? {} : {color: this.activeColor}
    }
  },
  methods: {
    //点击切换页面
    itemClick() {
      //不想返回用replace  .catch(() => {})  解决连续点击报错
      this.$router.push(this.path).catch(() => {})
    }
  }
}
</script>

<style>
  .tab-bar-item{ 
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  /* .active{
    color: rgba(133, 128, 128, 0.459);
  } */
</style>