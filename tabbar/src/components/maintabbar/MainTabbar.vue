<template>
 <div class="main-tab-bar">
   <tab-bar>
      <!-- 可以传递颜色，不传则使用默认颜色 -->
      <tab-bar-item path="/home" activeColor='deepPink'> 
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
        <img slot="item-active-icon" src="../../assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/category">
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
        <img slot="item-active-icon" src="@/assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>

      <tab-bar-item path="/cart">
        <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-active-icon" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
        <img slot="item-active-icon" src="@/assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
  </tab-bar>
 </div>
  
  
</template>

<script>
//导入TabBar组件
import TabBar from '../tabbar/TabBar.vue'
import TabBarItem from '../tabbar/TabBarItem.vue'

export default {
  name: 'MainTabbar',
  components:{
    TabBar,
    TabBarItem
  }


}
</script>


<style>

</style>