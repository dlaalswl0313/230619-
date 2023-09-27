<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
  <div id="wrap">
        <div id="sign_box">
             <h1>회원가입</h1>
             <div id="email">
                <label><i class="bi bi-asterisk"></i>이메일</label><input type="email">
             </div>
             <div id="pw">
                <label><i class="bi bi-asterisk"></i>비밀번호</label><input type="password">
             </div>
             <div id="pw_ck">
                <label><i class="bi bi-asterisk"></i>비밀번호 확인</label><input type="password">
                <p>비밀번호는 6자리 이상의 영문과 숫자에 조합하여야합니다</p>
             </div>
             <div id="nickname">
                <label><i class="bi bi-asterisk"></i>활동명</label><input type="text">
             </div>
             <div id="phone">
                <label><i class="bi bi-asterisk"></i>휴대폰번호</label>
                <div id="num">
                    <input type="number">-<input type="number">-<input type="number">
                </div>       
             </div>
             <div id="button_box">
                <button id="sign" class="bt">가입하기</button>
                <button id="cancel" class="bt">취소</button>
             </div>
        </div>
    </div>
</template>
<script>

</script>
<style>
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    #wrap{
        display: flex;
        padding-top: 103px;
        padding-bottom:103px;
        flex-direction: column;
        align-items: center;
        gap: 150px;
    }
    h1{text-align: center;}
    #sign_box{
      border: 1px solid black;
      display: flex;
      width: 1000px;
      padding: 50px 41px;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      gap: 49px 42px;
      flex-wrap: wrap;
    }
    #email{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
    #email input{
        width: 916px;
        height: 75px;   
    }
    #pw{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
    #pw input{
        width: 916px;
        height: 75px;
    }
    #pw_ck{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
    #pw_ck input{
        width: 916px;
        height: 75px;
    }
    #pw_ck p{
        display: flex;
        width: 918px;
        height: 75px;
        padding: 22px 135px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        background: #F9C041;
        color:white;
        font-weight: 700;
        font-size: 23px;
    }
    #nickname{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
    #nickname input{
        width: 916px;
        height: 75px;
    }
    #phone{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap:20px;
        width: 916px;
    }
    #phone input{
        width: 250px;
        height: 60px;
        padding: 13px 26px;
    }
    #num{ 
        width: 915px;
        height: 60px;
        display: flex;
        align-items: center;
        gap:50px;
    }
    label{font-size: 23px;font-weight: 700;}
    label i {font-size: 23px;color:#B91646;}
    #button_box{
        display: flex;
        width:100%;
        padding: 25px 368px;
        justify-content: center;
        align-items: center;
        gap: 42px;
    }
    .bt{
        display: flex;
        width: 433px;
        height: 66px;
        padding: 21px 152px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        border-radius: 10px;
        color:white;
        border:none;
        font-size: 23px;
        font-weight: 700;

    }
    #sign{ background: #F9C041;}
    #cancel{ background:  #B91646;}
</style>