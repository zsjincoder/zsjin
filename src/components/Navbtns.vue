<template>
    <div id="Navbtns" v-model="active">
        <router-link to='/' class="itembtn" @click.native="setIndex(1)" tag="div" active-class="av">
          <i v-if="active===1" class="el-icon-menu active"></i>
          <p v-if="active===1" class="active">首页</p>
          <i v-if="active!=1" class="el-icon-menu "></i>
          <p v-if="active!=1" class="">首页</p>
        </router-link>
      <router-link to='/classinfo/itlist' class="itembtn" tag="div" @click.native="setIndex(2)">
        <i v-if="active===2" class="el-icon-news active"></i>
        <p v-if="active===2" class="active">分类</p>
        <i v-if="active!=2" class="el-icon-news"></i>
        <p v-if="active!=2">分类</p>
      </router-link>
      <router-link to='/' class="itembtn" tag="div" @click.native="setIndex(3)">
        <i v-if="active===3" class="el-icon-date active"></i>
        <p v-if="active===3" class="active">课程表</p>
        <i v-if="active!=3" class="el-icon-date"></i>
        <p v-if="active!=3">课程表</p>
      </router-link>
      <router-link to='/' class="itembtn" tag="div" @click.native="setIndex(4)">
        <i v-if="active===4" class="el-icon-share active"></i>
        <p v-if="active===4" class="active">关于</p>
        <i v-if="active!=4" class="el-icon-share"></i>
        <p v-if="active!=4">关于</p>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "Navbtns",
      data(){
          return{
            active:1,
            av:false
          }
      },
      methods:{
          setIndex(index){
            this.active=index;
          }
      },
      mounted(){
          this.active=1;
      }
    }
</script>

<style scoped>
  #Navbtns{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    text-align: center;
    background-color: #Fff;
    padding-top: 5px;
  }
  .itembtn{
    flex:1;
    height: 50px;
    font-size: 16px;
    color: darkgray;
    text-align: center;
    text-decoration: none;

  }
  .itembtn p{
    margin-top: 0px;
    font-size: 14px;
  }
  .itembtn i{
   margin-top: 5px;
  }
  .active{
    font-size: 22px;
    color: #188eee;
  }
</style>
