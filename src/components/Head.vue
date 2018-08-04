<template>
  <div class="head">
      <span><i class="el-icon-search serchicon"></i></span>
      <input type="search" class="search" maxlength="" autocomplete="off" autocorrect="off" placeholder="查询"/>
  </div>
</template>

<script>
    export default {
        name: "Head",
      data() {
        return {

        }
      },
      methods: {

      }
    }
</script>

<style scoped>
  .head{
    position: fixed;
    background-color: #fff;
    top: 0;
    left: 0;
    right: 0;
    padding: 0px;
    padding-bottom: 15px;
    z-index: 99;
  }
.serchicon{
  margin-top: 10px;
  font-size: 18px;
  padding-right: 10px;
  margin-left: 20px;
}
  .search{
    border: 1px solid #fff;
    line-height: 25px;
    background-color:floralwhite;
    border-radius: 10px;
    width: 75%;
    padding-left: 15px;
  }
</style>
