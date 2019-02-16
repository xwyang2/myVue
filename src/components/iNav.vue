<template>
  <div class="nav clear">
    <ul class="clear">
      <router-link to="/home" tag="li" active-class="active">
        <a href="javascript:;">推荐</a>
      </router-link>
      <router-link to="/beauty" tag="li" active-class="active">
        <a href="javascript:;">美妆</a>
      </router-link>
      <router-link to="/house" tag="li" active-class="active">
        <a href="javascript:;">家纺</a>
      </router-link>
      <router-link to="/sport" tag="li" active-class="active">
        <a href="javascript:;">运动</a>
      </router-link>
      <router-link to="/bus" tag="li" active-class="active">
        <a href="javascript:;">汽车</a>
      </router-link>
      <router-link to="/electric" tag="li" active-class="active">
        <a href="javascript:;">电器</a>
      </router-link>
    </ul>
    <a href="javascript:;" class="nav_r"></a>
  </div>
</template>
<script>
export default {};
</script>
<style>
.nav {
  width: 100%;
  height: 0.8rem;
  position: fixed;
  left:0;
  top:0.78rem;
  background: #fff;
  z-index: 2;
}
.nav ul {
  overflow: hidden;
  height: 0.8rem;
  text-align: center;
  float: left;
  margin-left: 0.15rem;
}
.nav ul li {
  float: left;
  margin-right: 0.3rem;
}
.nav ul li a {
  display: block;
  height: 0.7rem;
  font-size: 0.26rem;
  line-height: 0.7rem;
}
.nav ul li.active a {
  border-bottom: 0.1rem solid #fa6724;
  color: #fa6724;
}
/* .nav ul li:first-child a{
  border-bottom: 0.1rem solid #fa6724;
  color: #fa6724;
} */
.nav .nav_r {
  float: right;
  width: 0.3rem;
  height: 0.24rem;
  background: url(../assets/imgs/nav_bg01.jpg) no-repeat;
  background-size: 0.3rem 0.24rem;
  margin-top: 0.18rem;
  margin-right: 0.25rem;
}
</style>


