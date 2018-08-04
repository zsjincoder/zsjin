<template>
  <div id="app">
    <v-header></v-header>
    <div class="position">
        <router-view/>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from '@/components/Head'
  import footer from '@/components/Navbtns'
export default {
  name: 'App',
  components:{
    'vHeader':header,
    'vFooter':footer,
  }
}
</script>

<style>
#app {

}
body{
  margin: 0px;
  padding: 0px;
}
  .position{
    margin-top: 50px;
    margin-bottom: 55px;
  }
</style>
