<template>
    <ul class="goodslist">
      <li v-for="item of list" :key="item.id">
        <router-link :to="'/detail/'+item.id+'?dataName=' + dataName" >
          <img :src="item.src">
          <p class="over">{{item.subitem}}</p>
          <i>￥{{item.price}}</i>
          <em>赚&nbsp;￥&nbsp;{{item.price}}</em>
        </router-link>
      </li>
    </ul>
</template>
<script>
export default {
  props: ["list", "dataName"]
};
</script>
<style>
</style>


