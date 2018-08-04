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
    name: "Languagelist",
    data(){
      return{
        catItems: [
          {
            subTitle: '实用英语',
            subItems: [
              '英语口语',
              '学术英语',
              '新概念英语',
              '词汇语法',
              '职场英语'
            ]
          },
          {
            subTitle: '出国留学',
            subItems: [
              '雅思',
              '托福',
              'K12留学',
              '研究生留学',
              '留学指导'
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
