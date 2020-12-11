<template>
  <div>
  <input type="text">
    <ul>
        <li v-for="(item,index) in list" :key="index">
            <h2>{{item.name}}</h2>
            <p>{{item.title}}</p>
        </li>
    </ul>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import Axios from 'axios'
import HelloWorld from '../../components/HelloWorld'
export default {
    components:{
        HelloWorld
    },
    data() {
        return {
            list:[]
        }
    },
    created() {
        this.get_list()
    },
    methods: {
        get_list(){
            Axios.get('/api/list').then(res=>{
                this.list=res.data.data
            })
        }
    },
}
</script>

<style>

</style>