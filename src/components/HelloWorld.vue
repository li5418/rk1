<template>
  <div> 
    <router-link v-for="(item,index) in links" :key="index" :to="item.path">{{item.name}}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links:[{
        path:'/home',
        name:'首页'
      },{
        path:'/list',
        name:'联系人'
      },{
        path:'/my',
        name:'空间'
      }]
    }
  },
}
</script>

<style>

</style>