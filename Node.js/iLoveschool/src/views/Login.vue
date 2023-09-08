<template>
    <div class="login">
        <h3>Login</h3>
        <input type="text" v-model ="email" placeholder="email"><br>
        <input type="password" v-model="password" placeholder="password"><br>
        <button v-on:click="login">로그인</button>
        <p>또는 페이스북 로그인<br>
            <button v-on:click="facebookLogin" class="facebook">
                <img src="@/assets/facebook.png">
            </button>
        </p>
        <p>만약 계정이 없다면, <RouterLink to="/signup">회원 가입</RouterLink>을 먼저 진행해주세요</p>
    </div>
</template>
<script>
import{ RouterLink, useRouter }from 'vue-router'
import firebase from 'firebase'


const router = useRouter();

var provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.setCustomParameters({
    'display':'popup'
})
const sessionStorage = window.sessionStorage 

    export default{
        name:'Login',
        data(){
            return { email:'',password:''}
        },methods:{
            facebookLogin(){
                firebase.auth().signInWithPopup(provider).then(
                    (result) => {
                        var token = result.credential.accessToken
                        var user = reusult.user
                        alert('로그인 성공')
                    }
                ).catch( (err) => { alert('에러:' +err.message)})
            },  
            login(){
                firebase.auth().signInWithEmailAndPassword(this.email,this.password)
                .then((user) =>{
                    this.$session.set('user_id',user.user.uid)
                    this.$router.replace('msg'); //로그인성공
                    sessionStorage.setItem('user_id',user.user.id);//(키,값)

                }).catch((err) => { //로그인 실패
                    alert('에러:'+err.message)
                })
            
            },
        },
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
    .facebook{width:200px;height: 50px;border:0;background:#fff;}
    .facebook img{width:100%;}
</style>