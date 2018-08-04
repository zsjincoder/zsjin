<template>
    <div class="con">
      <ul class="lists" v-model="isActive">
        <li class="listitem"  @click="setActive(1)">
          <router-link tag="div" class="listbtn" to="/classinfo/itlist">
           <p  v-if="isActive!=1"> IT.互联网</p>
           <p v-if="isActive===1" class="active"> IT.互联网</p>
          </router-link>
        </li>
        <li class="listitem"  @click="setActive(2)">
          <router-link tag="div" class="listbtn" to="/classinfo/designlist">
            <p  v-if="isActive!=2"> 设计.制作</p>
            <p v-if="isActive===2" class="active">设计.制作</p>
          </router-link>
        </li>
        <li class="listitem"  @click="setActive(3)">
          <router-link tag="div" class="listbtn" to="/classinfo/languagelist">
            <p  v-if="isActive!=3">语言.留学</p>
            <p v-if="isActive===3" class="active">语言.留学</p>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Leftm",
      data(){
          return{
            isActive:1
        }
      },
      methods:{
          setActive(index){
            this.isActive=index
          }
      }
    }
</script>

<style scoped>
  .con{
    position: fixed;
    height: 100%;
    width: 25%;
    display: flex;
    margin-top: 10px;
    background-color: aliceblue;
  }
.lists{
  list-style-type: none;
  width: 100%;
  text-align: center;
  margin: 0px;
  padding: 0px;
}
.listitem{
  border-bottom: 1px solid #eee;
  height: 50px;
  line-height: 50px;
  width: 100%;
  z-index: 99;
  color:lightslategray;
 }
.listitem p{
  margin: 0px;
  padding: 0px;
  font-size: 14px;
}
  .active{
    background-color: #fff;
  }
</style>
