<template>
    <swipe class="banner">
      <swipe-item class="slide" v-for="(item,index) of imgs" :key="index"><img :src="item" alt="!"></swipe-item>
    </swipe>
</template>
<script>
import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe'
export default {
    props:['imgs'],
    components:{ Swipe, SwipeItem}
}
</script>

<style>
.banner {
 width:100%;
 height: 2.4rem;
}
.banner img{
 width:100%;
 height: 2.4rem;
}
.slider {
 width:100%;
 height: 2.4rem;
}
</style>