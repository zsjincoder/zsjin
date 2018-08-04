
<template>
  <div class="body">
    <div class="bw">
      <div class="Info">
        <div class="classname">
          <div class="content">test第三集是的开发建设的第三集士大夫的风景的克拉科夫楼上的</div>
          <p class="infolist"><span>报名人数2万</span>|<span>好评率</span>|<span>2666评论</span></p>
          <span class="free">免费</span>
          <p style="font-size: 20px;margin-top:15px;padding: 0px">老师介绍<span style="font-size: 18px;margin-left: 5px">(5)</span></p>
          <div class="teachercard">
            <div class="teacherinfo">
              <img class="teacherimg" src="http://10.url.cn/eth/ajNVdqHZLLCHNUDvsBaTEXfL8OlNnu7gf9QqQ6bibU9lEl8TY65oib3N4YxKLeIicVFshFen5AZ7U0/" alt="">
              <div class="teachereva">
                <h3>学生it班...</h3>
                <p>好评度</p>
                <p>课程数</p>
                <p>学生数</p>
              </div>
            </div>
            <div class="teacherpresent">刘超老师-资深HR，人力资源专家，现任学神IT就业指导顾问，帮助学员推荐就业，在此恭祝各位加入学神IT，4个月的高温锻造，体会自信与成功，从此在运维架构师之路上势如破竹，如日中天，步步高升！</div>
          </div>
          <div class="teachercard">
            <div class="teacherinfo">
              <img class="teacherimg" src="http://10.url.cn/eth/ajNVdqHZLLCHNUDvsBaTEXfL8OlNnu7gf9QqQ6bibU9lEl8TY65oib3N4YxKLeIicVFshFen5AZ7U0/" alt="">
              <div class="teachereva">
                <h3>学生it班...</h3>
                <p>好评度</p>
                <p>课程数</p>
                <p>学生数</p>
              </div>
            </div>
            <div class="teacherpresent">刘超老师-资深HR，人力资源专家，现任学神IT就业指导顾问，帮助学员推荐就业，在此恭祝各位加入学神IT，4个月的高温锻造，体会自信与成功，从此在运维架构师之路上势如破竹，如日中天，步步高升！</div>
          </div>
          <p style="text-align: center;margin: 0;margin-top: 10px;font-size: 22px"><i class="el-icon-arrow-down"></i></p>
        </div>
      </div>
    </div>
    <div class="bw">
      <div class="Info1">
        <div class="course-details">
          <h3>课程详情</h3>
          <div class="details">热烈庆祝学神IT与腾讯强强联合，共推linux高级架构师课程，已帮助上万学员实现高薪梦想，更多优秀学员进驻腾讯公司。</div>
          <x-img src='https://10.url.cn/qqke_course_info/ajNVdqHZLLAicHQUQUClbYvb12KJLkoicEibIjTk9KNOxzar6sicMUuzib3pLFntCDPJ8AHj4RGL8tt8/?tp=webp' class="ximg-demo" error-class="ximg-error" :offset="-100"></x-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {XImg} from "vux"
  export default {
    name: "Info",
    components:{
      "xImg":XImg
    }
  }
</script>

<style scoped>
  .body{
    background-color: #ddd;
  }
  .bw{
    background-color: #fff;
  }
  .Info{
    margin: 5px 10px auto 10px;
    padding:0;
    bottom: 5px;
  }
  .Info1{
    margin: 5px;
    padding:0;
    bottom: 5px;
  }
  .classname{
    width: 100%;
    margin-top: 10px;
    background-color: #fff;
    font-family: "Microsoft Yi Baiti";
  }
.content{
  font-family: "Microsoft YaHei";
  width:100%;
  padding-bottom:5px ;
  overflow: hidden;
  /**white-space:nowrap;**/
  -ms-text-overflow:ellipsis;
  -o-text-overflow:ellipsis;
  text-overflow:ellipsis;
  font-size: 18px;
  text-indent: 2rem;
  font-weight: unset;
  color: black;
}
  .infolist{
    margin: 0;
    font-size: 14px;
    color:#777 ;
    margin-bottom: 5px;
  }
  .infolist span{
    margin: 0 10px;
  }
  .free{
    font-size: 16px;
    color: #9bef37;
  }
  .teachercard{
    position:relative;
    margin-top: 65px;
    width: 100%;
    height: 190px;
    border: 1px #dadada solid;
    font-family: "Microsoft YaHei UI";
  }
  .teacherpresent{
    margin: 0;
    overflow: hidden;
    font-family: "Microsoft YaHei UI";
    color: #3c3f41;
    text-indent: 2rem;
    padding: 75px 5px 0 5px;
  }
  .teacherinfo {
    position: absolute;
    width: 70%;
    height: 90px;
    left: 15%;
    top: -35px;
    background-color: #fff;
  }
  .teacherimg{
    float: left;
    border-radius: 45px;
    width:90px;
    height:90px;
  }
  .teachereva{
    float: left;
    display: block;
    height: 90px;
    width: 57%;
    text-align: center;
  }
  .teachereva h3{
    margin: 0;
    margin-top: 5px;
    font-weight: inherit;
    font-family: "Microsoft YaHei UI";
    font-size: 18px;
  }
  .teachereva p{
    margin: 0;
    font-family: "Microsoft YaHei UI";
    font-size: 14px;
    margin-top: 2px;
    color: #2b2b2b;
  }
  .course-details{
    width: 100%;
    margin-top:10px ;
    padding-bottom: 10px;
  }
  .course-details h3{
    font-weight: inherit;
    font-family: "Microsoft YaHei UI";
    margin: 0;
  }
  .course-details img{
    display: inline-block;
    margin-top: 5px;
    min-width: 1px;
    max-width: 100%;
    line-height: 1;
    vertical-align: -2px;
  }
  .details{
    margin-top: 10px;
    color: red;
    font-weight: bold;
    font-size: 20px;
    text-indent: 2rem;
  }
  .ximg-demo {
    width: 100%;
    height: auto;
  }
</style>
