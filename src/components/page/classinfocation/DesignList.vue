<template>
  <div id="ITlist">
    <div v-for="items in catItems">
      <divider class="divier">{{items.subTitle}}</divider>
      <ul class="itemgroup">
        <li class="ititem" v-for="i in (items.subItems.length-1)">
          <router-link to="/classinfo/mask" tag="div">
            {{items.subItems[i]}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {Divider} from "vux"
  export default {
    name: "Designlist",
    data(){
      return{
        catItems: [
          {
            subTitle: '平面设计',
            subItems: [
              '网页美工',
              '摄影后期',
              '广告海报',
              '综合平面设计',
              'VI设计'
            ]
          },
          {
            subTitle: 'UI设计',
            subItems: [
              '交互设计',
              '游戏UI设计',
              'Web UI设计',
              'APP UI设计',
              '图标设计',
              '其他'
            ]
          }
        ]
      }
    }
    ,
    components:{
      "divider":Divider
    }
  }
</script>

<style scoped>
  .divier{
    margin: 0px;
    font-size: 17px;
  }
  .itemgroup{
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    display:flex;
    flex-wrap: wrap;
  }
  .ititem{
    border-radius: 10px;
    background-color:lightgrey;
    width:29%;
    font-size: 15px;
    opacity: 0.9;
    margin: 5px;
    text-align: center;
    line-height: 45px;
    height:45px;
  }
</style>
