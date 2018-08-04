<template>
  <div id="coursr">
    <div class="vidio">
      <video width="375" height="200"  controls src="http://117.41.241.14/vedu.tc.qq.com/t14187jcf3r.m701.mp4?vkey=637BC505E050D6D2B41CC3FF2495798648F90FC43E551FBDE765C8E33E0435F17C590D4BB724D66E1F8982E18171DDC1DDB1759D4A0EC1F9F829F2090836FB1136F771AD0A454AA0C22959DA92D0DF110B9D24594F85BD96&amp;br=16&amp;platform=2&amp;fmt=auto&amp;level=0&amp;sdtfrom=v3010&amp;guid=e477e5d6ade3db8a52fb690b9b5651f3"></video>
    </div>
    <tab>
      <tab-item  selected @on-item-click="onItemClick">
        <router-link to="/Course/Info" tag="div">详情</router-link>
      </tab-item>
      <tab-item  @on-item-click="onItemClick">
        <router-link to="" tag="div">目录</router-link>
      </tab-item>
      <tab-item  @on-item-click="onItemClick">
        <router-link to="" tag="div">相关课程</router-link>
      </tab-item>
    </tab>
    <router-view/>
  </div>
</template>
<script>
  import {Tab,TabItem} from 'vux'
  export default {
    name: "Info",
    data(){
      return{
        avtiveindex:1
      }
    },
    components:{
      "tab":Tab,
      "tabItem":TabItem
    },
    methods:{
      onItemClick(index){
        this.avtiveindex=index+1;
        // console.log(this.avtiveindex);
      }
    }
  }
</script>

<style scoped>
  body{
    margin: 0px;
    padding: 0px;
  }
  .vidio{
    width: 100%;
    height: 200px;
    background-color: lightskyblue;
  }
  .blur{
    color: lightskyblue;
  }
</style>

