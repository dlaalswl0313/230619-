<template>
    <div id="wrap">
      <div id="login_box">          
          <div id="title">
              <label>로그인</label>
          </div>
              <form v-on:submit.prevent="registerUser" id="content">
                  <input type="email" placeholder="이메일" v-model="user_email" id="email-new">
                  <input type="password" placeholder="비밀번호" v-model="user_pw" id="pw-new">
                  <!-- <button @click="togo" @keyup="togo" id="login_bt">로그인</button>   -->
                  <button @click="login" id="login_bt">로그인</button> 
              
                    <div id="find">
                        <label><a href="./FindE">ID</a><a href="./FindP">/PW찾기</a></label>
                        <label><a href="./SignUp">회원가입</a></label>
                    </div>
              </form>
              <div id="social_login">
                  <a href="https://www.facebook.com/?locale=ko_KR" id="facebook" class="social_bt"><img src="../images/facebook.png"></a>
                  <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoia28ifQ%3D%3D%22%7D" id="twitter" class="social_bt"><img src="../images/twitter.svg"></a>
                  <a href="https://www.instagram.com/accounts/login/" id="instagram" class="social_bt"><img src="../images/instagram.png"></a>
              </div>
      </div>
  </div>
</template>
<script>
//import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
  setup(){
    
    const isLogin = ref(false);

    const login = () => {
      const sessionStorage = window.sessionStorage;
      if( sessionStorage.getItem('login') === 'false' ){
        sessionStorage.setItem('login', true);
        isLogin.value = true;

        console.log('login is : ' + sessionStorage.getItem('login'));
      }else{
        sessionStorage.setItem('login', false);
        isLogin.value = false;

        console.log('login is : ' + sessionStorage.getItem('login'));
      }
    }

    onMounted(() => {
      const sessionStorage = window.sessionStorage;
      sessionStorage.setItem('login', false);
    })

    return { login, isLogin }
  }
  // data: function() {
  //   return {
  //     user_email: '',
  //     user_pw: ''
  //   }
  // },
  // methods: {
  //   Login: function() {
  //     //event.preventDefault();
  //     console.log(this.user_email, this.user_pw);
  //     const url = 'https://jsonplaceholder.typicode.com/users';
  //     const data = {
  //       email: this.user_email,
  //       password: this.user_pw
  //     }
  //     axios.post(url, data)
  //       .then(function(response) {
  //         console.log('로그인 성공', response);
  //         alert("로그인 성공");
  //         //this.togo();
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //    },
  //   togo() {
  //     this.$router.push('/');
  //   }
  // }
}
</script>

 
<style>
    #wrap{
        display: flex;
        padding-top: 150px;
        padding-bottom:150px;
        flex-direction: column;
        align-items: center;
        gap: 150px;
    }
    #title{
        display: flex;
        width: 1000px;
        height: 136px;
        padding: 41px 0px 41px 40px;
        align-items: center;
        gap: 10px;
        border: none;
        background: #F9C041;
        font-size: 23px;
        font-weight: 700;
        color:white;
    }
    #login_box{
        display: flex;
        padding-bottom: 0px;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        border: 1px solid black;
        height: 719px; 
    }
    #content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
    }
    #content input{
        display: flex;
        width: 831px;
        height: 85px;
        padding: 10px 40px;
        align-items: center;
        gap: 10px;
        font-size: 23px;
        font-weight: 700;
    }
    #login_bt{
        display: flex;
        width: 831px;
        height: 85px;
        justify-content: center;
        align-items: center;
        padding: 25px 368px;
        font-size: 23px;
        border-radius: 8px;
        background: #F9C041;
        border:none;
        color:white;
    }
    #login_bt:hover{cursor: pointer;}
    #social_login{
        display: flex;
        align-items: flex-start;
        gap: 87px;   
    }
    .social_bt{
        font-size: 34px;
        width: 130px;
        margin-bottom:40px;
    }
    .social_bt img{ 
        width: 106.013px;
        height: 106.013px;
    }
    #find{
        display: flex;
        align-items: flex-start;
        gap: 11px;
    }
    #find label{font-size: 17px;color:#7A7979;}
    a{text-decoration: none;}
    
    /*반응형*/
    @media screen and (min-width: 768px) and (max-width: 991px) { 
    #wrap {
      display: flex;
      width: 834px;
      height: 1194px;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    #login_box{
      display: flex;
      width: 536px;
      padding-bottom: 40px;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
    #title{
      display: flex;
      width: 534px;
      height: 76px;
      padding: 41px 0px 41px 40px;
      align-items: center;
      gap: 10px;
      align-self: stretch;
    }
    #content{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
    #content input{
      display: flex;
      width: 430px;
      height: 67px;
      padding: 10px 40px;
       
    }
    #login_bt{
      display: flex;
      width: 430px;
      height: 67px;
      padding: 10px 40px;
    }
    #login_bt:hover{cursor: pointer;}
    #social_login{
      display: flex;
      width: 278px;
      height: 77px;
      align-items: flex-start;
      gap: 25px;
    }
    .social_bt img{ 
      width: 76px;
      height: 77px;
      
    }
    #find{
      display: flex;
      align-items: flex-start;
      gap: 20px;
      align-self: stretch;
    }
    #find label{font-size: 17px;color:#7A7979;}
    a{text-decoration: none;}
  }
</style>