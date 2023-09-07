<template>
    <div class="login">
        <h3>Login</h3>
        <input type="text" placeholder="email"><br>
        <input type="password" placeholder="password"><br>
        <button>로그인</button>
        <p>만약 계정이 없다면, 회원 가입을 먼저 진행해주세요</p>
    </div>
</template>
<script>
    export default{
        name:'login',
        data(){
            return {

            }
        },methods:{}
    }
</script>
<style scoped>
    .login{
        margin:0 auto;
        display:flex;
        flex-direction: column;
    }
    .login input{
        height:50px;
        padding:5px 15px;
    }
    .login button{height: 30px;}
</style>