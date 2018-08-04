<template>
    <div class="topbar">
      <ul class="tabnar">
        <li>
          <span>综合排序</span>
          <i class="el-icon-caret-bottom"></i>
        </li>
        <li style="border-right: 1px solid #eee;border-left:1px solid #eee ">
          <span>产品策划</span>
          <i class="el-icon-caret-bottom"></i>
        </li>
        <li>
          <span>筛选</span>
          <i class="el-icon-caret-bottom"></i>
        </li>
      </ul>
      <div class="ror"></div>
      <div v-for="classs in classItems">
        <router-link to="/Course/Info" tag="div" class="clasitems">
          <div class="leftimg">
            <img v-bind:src="classs.img" width="100%" height="100%">
            <p class="shadow">{{classs.status}}</p>
          </div>
          <h3 class="classname">{{classs.name}}</h3>
          <p class="classinfo">{{classs.info}}</p>
          <span class="classprice">{{classs.price}}</span>
        </router-link>
      </div>
    </div>

</template>

<script>
    export default {
        name: "mask",
      data(){
          return{
            classItems:null
          }
      },
      mounted(){
          this.axios.get("https://www.easy-mock.com/mock/5943d53a8ac26d795f1c9a61/tencent/recomList")
            .then((res) => {
              this.classItems=res.data.recomList
            })
      },
      components:{

      },
      methods:{
        onImgError(item,$event){
          console.log(item,$event);
        }
      }
    }
</script>

<style scoped>
  .ror{
    height: 50px;
  }
  .topbar{
    margin-top: 51px;
  }
  .tabnar{
    position:fixed;
    width: 100%;
    background-color: #fff;
    list-style-type: none;
    display: flex;
    margin: 0px;
    padding: 0px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    z-index: 99;
  }
  .tabnar li{
    width: 33%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    opacity: 0.75;
    color:grey;
  }
  .active{
    background-color: seashell;
  }
  .clasitems{
    display: block;
    width: 95%;
    margin: 0px auto;
    height:120px;
  }
  .leftimg{
    position: relative;
    float:left;
    margin-right: 10px;
  }
  .leftimg img{
    width: 150px;
    height: 100px;
  }
  .leftimg p{
    position: absolute;
    bottom:2px;
    margin:0px;
    padding: 0px;
    width: 100%;
    text-align: center;
    background-color: black;
    opacity: 0.6;
    color: #eee;
  }
.classname{
  text-align: left;
  line-height: 20px;
  font-size: 16px;
  overflow: hidden;
  word-break: break-all;
  white-space: pre-wrap;
  text-overflow:ellipsis;

}
  .classinfo{
    margin: 0px;
    padding: 0px;
    font-size: 14px;
    color: grey;
  }
  .classprice{
    margin: 0px;
    padding: 0px;
    font-size: 18px;
    color: darkseagreen;
  }
</style>
