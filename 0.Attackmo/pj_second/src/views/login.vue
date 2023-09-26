<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
      <div id="wrap">
        <div id="login_box">
            <div id="title">
                <label>로그인</label>
            </div>
            <div id="content">
                <input type="email" placeholder="이메일">
                <input type="password" placeholder="비밀번호">
                <button id="login_bt">로그인</button>  
                <div id="find">
                    <label>ID/PW 찾기</label>
                    <label>회원가입</label>
                </div>
            </div>
                <div id="social_login">
                    <a href="" id="facebook" class="social_bt"><i class="bi bi-facebook"></i></a>
                    <a href="" id="twitter" class="social_bt"><i class="bi bi-twitter"></i></a>
                    <a href="" id="instagram" class="social_bt"><i class="bi bi-instagram"></i></a>
                </div>
        </div>
    </div>
</template>
<script>

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
        padding: 25px 368px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-size: 23px;
        border-radius: 8px;
        background: #F9C041;
        border:none;
        color:white;
    }
    #social_login{
        display: flex;
        align-items: flex-start;
        gap: 87px;
    }
    .social_bt{
        width: 106.013px;
        height: 106.013px;
        border: 1px solid black;
        text-align: center;
        font-size: 32px;
        border-radius:100%;
    }
    #find{
        display: flex;
        align-items: flex-start;
        gap: 11px;
    }
    #find label{font-size: 17px;color:#7A7979;}
</style>