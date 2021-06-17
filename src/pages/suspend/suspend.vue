<template>
  <div class="suspend-page">
     <!-- 头部 -->
    <div class="head-wrap">
      <div class="head-bg">
        <img class="head-bg-pic" src="/assets/images/header.png">
      </div>
      <p class="head-title">无人机智能操控平台</p>
    </div>
     <!-- 左侧巡检 -->
    <div class="inspect-lft">
      <div class="inspect-cont">
        <img class="inspect-icon" src="/assets/images/icon_time_full.png">
        <span>当前巡检：</span><em>09:10:28</em>
      </div>
    </div>

    <!-- 右侧时间 -->
    <div class="time-rgt">
      <div class="time-cont">
        <span class="time-date">2021-06-06 09:10:28 星期一</span>
        <img class="weather-icon" src="/assets/images/icon_sun.png">
      </div>
    </div>

    <!-- content -->
    <div class="suspend-body">
      <div class="suspend-left">
        <div class="suspend-item suspend-item1">
          <p class="item-title">距离下次巡检</p>
          <p class="uav-start">立即起飞</p>
          <p class="item-time">12:00:00</p>
          <div class="item-lists clearfix">
            <div class="item-list">
              <span class="item-list-lab">累计任务数：</span>
              <div class="item-list-val">
                <em>89</em><i>个</i>
              </div>
            </div>
            <div class="item-list"></div>
            <div class="item-list"></div>
            <div class="item-list"></div>
          </div>
        </div>
        <div class="suspend-item suspend-item2"></div>
        <div class="suspend-item suspend-item2"></div>
      </div>
      <div class="suspend-right"></div>
    </div>


  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.suspend-page{
  width:1920px;
  /* height:100vh; */
  background: url('/assets/images/s-bg.png')no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
}
.head-bg{
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:161px;
  z-index:1;
}
.head-bg-pic{
  width:100%;
  height:100%;
}
.head-title{
  position: fixed;
  top: 0;
  z-index: 2;
  width: 50%;
  margin:0 25%;
  text-align: center;
  color:#e5f5ff;
  padding-top:10px;
  font-size:32px;
  font-weight: bold;
  line-height: 48px;
  text-shadow: 0 0 14px #4AD4FF;
}
.inspect-lft{
  position: fixed;
  left:74px;
  top: 34px;
  z-index: 2;
}
.inspect-cont{
  display:flex;
  justify-content: flex-start;
  align-items: center;
}
.inspect-icon{
  width:24px;
}
.inspect-cont span,.inspect-cont em{
  font-size:14px;
  color:#fff;
  font-style: normal;
}
.time-rgt{
  position: fixed;
  right:74px;
  top: 34px;
  z-index: 2;
}
.time-cont{
  display:flex;
  justify-content: flex-end;
  align-items: center;
}
.time-date{
  font-size:14px;
  color:#fff;
  margin-right: 10px;
}
.weather-icon{
  flex-shrink: 0;
  width:24px;
}
/* content */
.suspend-body{
  position: relative;
  margin-top:86px;
  display:flex;
  z-index:4;
}
.suspend-left{
  width:656px;
  margin-left: 20px;
  flex-shrink: 0;
}
.suspend-right{
  flex-grow: 1;
  width:1210px;
  margin-left: 20px;
  background: url('/assets/images/s-r-bg.png')no-repeat center top;
  background-size:100%;
}
.suspend-item{
  display: block;
  padding:10px 15px 0;
}
.suspend-item1{
  height:351px;
  background:url('/assets/images/s-l-bg1.png')no-repeat center top;
  background-size:cover;
}
.suspend-item2{
  height:336px;
  background:url('/assets/images/s-l-bg1.png')no-repeat center top;
  background-size:cover;
}
.item-title{
  margin:0;
  padding-bottom: 5px;
  padding-left:20px;
  font-size:16px;
  color:#fff;
  font-weight: bold;
  background:url('/assets/images/tittle.png')no-repeat center bottom;
  background-size: 100%;
}
/* one */
.uav-start{
  cursor: pointer;
  float: right;
  margin:4px 0;
  width:101px;
  height:33px;
  text-align: center;
  background:url('/assets/images/btn.png')no-repeat center center;
  background-size: cover;
  line-height:33px;
  font-size: 14px;
  color:#fff;
  text-shadow: 0 0 14px #4AD4FF;
}
.item-time{
  font-size:100px;
  color:#fff;
  font-weight:bold;
  text-align: center;
  margin:30px 0 0;
  text-shadow: 0 0 14px #4AD4FF;
}
.item-lists{
  padding:0 40px;
}
.item-list{
  width:25%;
  float:left;
}
.item-list-lab{
  font-size: 14px;
  color:#fff;
  line-height:22px;
}
.item-list-val{}
.item-list-val em{
  font-size:24px;
  color:#32FCCD;
  font-style: normal;
  text-shadow: 0 0 14px #4AD4FF;
}

.clearfix:before, .clearfix:after {
    content: "";
    display: table;
}
.clearfix:after {
    clear: both;
}
.clearfix {
    *zoom: 1;
    /*ie6,7*/
}
</style>
