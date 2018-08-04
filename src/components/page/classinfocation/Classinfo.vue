<template>
<div>
  <v-left></v-left>
  <div class="pst-right">
    <transition>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>

  </div>
</div>
</template>

<script>
  import vLeft from "@/components/Leftm"
    export default {
        name: "Classinfo",
      components:{
          "vLeft":vLeft
      }
    }
</script>

<style scoped>
.pst-right{
  float: right;
  right: 0;
  width: 75%;
  opacity: 0.5;
}
</style>
