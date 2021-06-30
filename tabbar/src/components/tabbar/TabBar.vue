<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<style>
  #tab-bar {
    display: flex;
    /* background-color: rgba(255,192, 203,0.5); */
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -3px 1px rgba(100,100,100,0.5);
  }
</style>

<script>
export default {
  name: 'TabBar'
  
}
</script>
