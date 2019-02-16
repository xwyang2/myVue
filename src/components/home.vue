<template>
  <div class="home">
    <slider :imgs="imgs"></slider>
    <ul class="submeau">
      <li>
        <a href="javascript:;">
          <img src="../assets/imgs/submeau01.jpg">
          <em>一元集市</em>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../assets/imgs/submeau02.jpg">
          <em>赚赚</em>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../assets/imgs/submeau03.jpg">
          <em>十元五件</em>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../assets/imgs/submeau04.jpg">
          <em>限时秒杀</em>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../assets/imgs/submeau05.jpg">
          <em>厂家特卖</em>
        </a>
      </li>
    </ul>
    <div class="activity valign">
      <img src="../assets/images/activity01.jpg">
    </div>
    <div class="newUser">
      <h3>-&nbsp; 新人专属&nbsp;&nbsp;多重优惠&nbsp;-</h3>
      <div class="ad">
        <img src="../assets/images/newUser01.png">
        <img src="../assets/images/newUser02.png">
        <img src="../assets/images/newUser03.png">
      </div>
    </div>
    <ul class="goodslist">
      <li v-for="item of recommend" :key="item.id">
        <router-link :to="'/detail/'+item.id+'?dataName=' + dataName">
          <img :src="item.src">
          <p class="over">{{item.subitem}}</p>
          <i>￥{{item.price}}</i>
          <em>赚&nbsp;￥&nbsp;{{item.price}}</em>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import slider from "./slider.vue";
export default {
  data() {
    return {
      recommend: [
        {
          id: 8705,
          src:
            "https://img.alicdn.com/bao/uploaded/i2/39292133/TB2lqN0lItnpuFjSZFvXXbcTpXa_!!39292133.jpg_240x5000Q50s50.jpg_.webp",
          subitem:
            "旗袍2018女夏短款矮个子连衣裙 刺绣中式修身高档旧上海时尚礼服",
          price: "399"
        },
        {
          id: 8706,
          src:
            "https://gd2.alicdn.com/imgextra/i3/3041181316/TB25ws1XVyZBuNjt_jJXXbDlXXa_!!3041181316.jpg",
          subitem:
            "无钢圈少女性感蕾丝文胸套装小胸聚拢加厚胸罩收副乳防下垂内衣女",
          price: "239"
        },
        {
          id: 7703,
          src:
            "https://img.alicdn.com/imgextra/i2/787165457/TB2rIkdeVXXXXa7XXXXXXXXXXXX-787165457.jpg",
          subitem:
            "LIVEN/利仁 YG-D420智能电压力锅2升迷你家用美食营养高压锅饭煲",
          price: "209"
        },
        {
          id: 7704,
          src:
            "https://img.alicdn.com/imgextra/i4/684055444/TB2QI77bh6I8KJjSszfXXaZVXXa_!!684055444.jpg",
          subitem:
            "纽曼EX16蓝牙智能电子手表手环男士户外运动防水秒表计步遥控拍照",
          price: "218"
        }
      ],
      dataName: "home",
      imgs: [
        "https://img.alicdn.com/tps/i4/TB14ZyQCwHqK1RjSZFkSut.WFXa.jpg_q90",
        "https://img.alicdn.com/simba/img/TB1dTLEChTpK1RjSZR0SuvEwXXa.jpg",
        "https://img.alicdn.com/tps/i4/TB14ZyQCwHqK1RjSZFkSut.WFXa.jpg_q90_.webp",
        "https://img.alicdn.com/tps/i4/TB1diKiCPDpK1RjSZFrSuu78VXa.jpg_q90_.webp"
      ]
    };
  },
  components: { slider }
};
</script>
<style>
.home {
  width: 100%;
  padding-top:1.58rem;
}
.home .submeau {
  padding: 0.15rem 0.4rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.home .submeau li {
  width: 1rem;
  text-align: center;
}
.home .submeau li a {
  display: block;
}
.home .submeau li a img {
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 auto;
}
.home .submeau li a em {
  display: block;
  font-size: 0.22rem;
  line-height: 0.42rem;
  height: 0.42rem;
}
.home .activity {
  width: 100%;
  height: 1.8rem;
}
.home .activity img {
  width: 6.06rem;
  height: 1.6rem;
}
.home .newUser {
  padding: 0 0.15rem;
  background: #f24729;
  padding-bottom: 0.4rem;
}
.home .newUser h3 {
  text-align: center;
  font-size: 0.3rem;
  line-height: 0.72rem;
  font-weight: bold;
  height: 0.72rem;
}
.home .newUser .ad {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  background: #fff;
  padding: 0.15rem;
  height: 1.7rem;
  border-radius: 0.1rem;
}
.home .newUser .ad img {
  width: 1.8rem;
  height: 1.7rem;
  border-radius: 0.1rem;
}
</style>


