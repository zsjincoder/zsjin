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
        name: "ITlist",
      data(){
          return{
            catItems: [
              {
                subTitle: '互联网产品',
                subItems: [
                  '产品策划',
                  '游戏策划',
                  '产品运营',
                  '游戏运营'
                ]
              },
              {
                subTitle: '互联网营销',
                subItems: [
                  '网络营销理论',
                  '淘宝营销',
                  '微信营销',
                  'SEO',
                  '新媒体营销',
                  'SEM',
                  '电商营销',
                  '其他',
                  '收起'
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
