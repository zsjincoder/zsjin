<template>
  <div class="block">
    <el-carousel height="200px" style="margin-top: 0px">
      <el-carousel-item v-for="(item,index) in themeImg" :key="index">
          <img v-bind:src="item.img.url" style="width: 100%;height: 100%">
      </el-carousel-item>
    </el-carousel>
    <div class="con"  v-for="(ctitem,index) in courseItems" :key="index">
      <p style="text-align: center">/{{ctitem.title}}/</p>
      <ul class="custom">
        <li class="custom-item" v-for="zz in ctitem.course">
          <router-link to="/Course/Info" tag="div" class="custom-href">
            <div class="c-item" >
              <img v-bind:src="zz.pic" class="item-img" alt="londing">
            </div>
              <p>{{zz.desc}}</p>
              <span>{{zz.price}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import axios from 'axios';
    export default {
        name: "Home",
      data() {
       return{
         themeImg:null,
        courseItems: [
          {
            title: 'IT互联网',
            course: [
              {
                pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBjW3Q3mWPDV8HIVYFfjhquLT6TgibpA99ewichkBwhEshzDgryvLCUmCibBH4HiasZ11o/220?tp=webp',
                desc: 'CD-Linux高级运维架构师课程/云计算/安全/docker/虚拟化/调优',
                price: '免费'
              },
              {
                pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCUt1qTkJXNZR9Pkf9PxLrunHFZ2pqGCvEncOdwt7qx0Wj3f3pa2RVFX2puateIfMQ/220?tp=webp',
                desc: 'JAVA开发/Nginx/NoSQL/高并发/架构/集群/性能优化【动脑学院】',
                price: '免费'
              },
              {
                pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDriaGpS1J9q34e9HtpaCmrn48BaxXMZdkAAq4kpgy32dqickRjV4SOibaE4lsFPpArnU/220?tp=webp',
                desc: '高级前端开发晋升班【动脑学院】',
                price: '免费'
              },
              {
                pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCx31vPjTpp0ibIL4yDQibtV2MNsPzfA4pxUkNVzWnh5j9xsEVyXjQhK7y1z2Y0GeB3I/220?tp=webp',
                desc: '软件测试自学/面试/接口/压力/自动化/性能/入门到精通【柠檬班】',
                price: '免费'
              },
              {
                pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLAgeoR0OBnvPS422xIZ7SJd4dUib9323FkItCICiaXtku7iaZv6ZG697kkATGcOnpnbrk/220?tp=webp',
                desc: 'Android开发/安卓/NDK/架构/数据结构算法/性能优化【动脑学院】',
                price: '免费'
              },
              {
                pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBFB9RqSao5wvvfzL7iccib09MjzhfO4m56ibgViazTImOKUaIcByksSzeSIUx66CWWSho/220?tp=webp',
                desc: '18个标题法则 ：助你打造10万+级文章的标题',
                price: '￥99.00'
              }
            ]
          },
          {
            title: '设计创作',
            course: [
              {
                pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBjW3Q3mWPDV8HIVYFfjhquLT6TgibpA99ewichkBwhEshzDgryvLCUmCibBH4HiasZ11o/220?tp=webp',
                desc: 'CD-Linux高级运维架构师课程/云计算/安全/docker/虚拟化/调优',
                price: '免费'
              },
              {
                pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCUt1qTkJXNZR9Pkf9PxLrunHFZ2pqGCvEncOdwt7qx0Wj3f3pa2RVFX2puateIfMQ/220?tp=webp',
                desc: 'JAVA开发/Nginx/NoSQL/高并发/架构/集群/性能优化【动脑学院】',
                price: '免费'
              },
              {
                pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDriaGpS1J9q34e9HtpaCmrn48BaxXMZdkAAq4kpgy32dqickRjV4SOibaE4lsFPpArnU/220?tp=webp',
                desc: '高级前端开发晋升班【动脑学院】',
                price: '免费'
              },
              {
                pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCx31vPjTpp0ibIL4yDQibtV2MNsPzfA4pxUkNVzWnh5j9xsEVyXjQhK7y1z2Y0GeB3I/220?tp=webp',
                desc: '软件测试自学/面试/接口/压力/自动化/性能/入门到精通【柠檬班】',
                price: '免费'
              },
              {
                pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLAgeoR0OBnvPS422xIZ7SJd4dUib9323FkItCICiaXtku7iaZv6ZG697kkATGcOnpnbrk/220?tp=webp',
                desc: 'Android开发/安卓/NDK/架构/数据结构算法/性能优化【动脑学院】',
                price: '免费'
              },
              {
                pic: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBFB9RqSao5wvvfzL7iccib09MjzhfO4m56ibgViazTImOKUaIcByksSzeSIUx66CWWSho/220?tp=webp',
                desc: '18个标题法则 ：助你打造10万+级文章的标题',
                price: '￥99.00'
              }
            ]
          }
        ]
       }
      },
      mounted: function () {
        this.$nextTick(function () {
          // Code that will run only after the
          // entire view has been rendered
          this.show();
        })
      },
      methods:{
        show(){
          axios(
            {
              method:'get',
              url:'/api/api/v1/banner/1',
              header:{'content-type': 'application/x-www-form-urlencoded'},
              withCredentials:true,
            }
          ).then(reponse=>(this.themeImg=reponse.data.items))
        }
      }
    }
</script>

<style scoped>
  .block{
    margin-top: 50px;
  }
  .custom{
    padding: 0px;
    margin-left: 10px;
  }
  .custom-item{
    display: inline-block;
    margin: 0px 5px 10px 5px;
    width: 46%;
    vertical-align: top;
  }
  .custom-href{
    text-decoration: none;
  }
  .custom-href p{
    margin: 0px;
    margin-top: 5px;
    padding-left: 5px;
    color: black;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .custom-href span{
    color: deepskyblue;
  }
  .c-item img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
</style>
