<template>
    <div class="login reg">
        <h3 class="title">注册</h3>
        <button @click="goback" class="back">&lt;</button>
        <p class='userinfo'><label for="username" class="labels">用户名:</label><input type="text" id="username" class="infomation"></p>
        <p class='userinfo'><label for="password" class="labels">密码:</label><input type="password" id="password" class="infomation"></p>
        <p><button class='submit'>提交</button></p>
    </div>
</template>
<script>
export default {
    methods:{
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>
<style>

</style>


