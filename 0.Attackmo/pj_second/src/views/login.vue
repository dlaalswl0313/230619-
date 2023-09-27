<template>
      <div id="wrap">
        <div id="login_box">          
            <div id="title">
                <label>로그인</label>
            </div>
                <form id="content" @submit.prevent="Login">
                    <input type="email" placeholder="이메일" v-model="user_email">
                    <input type="password" placeholder="비밀번호" v-model="user_pw">
                    <button v-on:clcick="togo" v-on:keyup="togo" id="login_bt">로그인</button>  
                
                <div id="find">
                    <label><a href="./FindE">ID</a><a href="./FindP">/PW찾기</a></label>
                    <label><a href="./SignUp">회원가입</a></label>
                </div>
            </form>
                <div id="social_login">
                    <a href="" id="facebook" class="social_bt"><img src="../images/facebook.png"></a>
                    <a href="" id="twitter" class="social_bt"><img src="../images/twitter.png"></a>
                    <a href="" id="instagram" class="social_bt"><img src="../images/instagram.png"></a>
                </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                user_email:'',
                user_pw:''
            };
        }, 
        methods:{
            Login(){
                if(this.user_email ===''){
                    alert('이메일을 입력하세요');
                    return;
                }
                if (this.user_pw === '') {
                    alert('비밀번호를 입력하세요.');
                    return;
                }
                alert('로그인 되었습니다.');
                this.togo();
            },
            togo(){
                this.$router.push('/');
            }
            
        }
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
        width: 130px;
        height: 130px;
        margin:-11px;
    }
    #instagram img{width:106.013px;height: 106.013px;margin:0px;}
    #find{
        display: flex;
        align-items: flex-start;
        gap: 11px;
    }
    #find label{font-size: 17px;color:#7A7979;}
    a{text-decoration: none;}
</style>