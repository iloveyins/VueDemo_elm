<template>
  <div id="app">
    <headers></headers>
    <div class="item">
      <div class="item-items">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="item-items">
        <router-link to="/puts">评论家</router-link>
      </div>
      <div class="item-items">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from './components/header'

export default {
  name: 'App',
  components:{
    'headers':header
  }
}
</script>

<style>
   #app>.item{
      width: 100%;
      height: 40px;
      display: flex;
    }
    #app>.item .item-items{
      text-align: center;
      color: #4d555d;
      flex: 1;
      font-size: 14px;
      line-height: 40px;
    }
</style>
