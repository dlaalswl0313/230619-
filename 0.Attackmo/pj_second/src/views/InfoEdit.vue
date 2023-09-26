<template>
    <div id="wrap">
          <div id="sign_box">
               <h1>회원정보수정</h1>
               <div id="change_pw">
                  <label>비밀번호 변경</label><input type="password">
               </div>
               <div id="check_pw">
                  <label>비밀번호 확인</label><input type="password">
               </div>
               <div id="phone">
                  <label>휴대폰번호</label>
                  <div id="num">
                      <input type="number">-<input type="number">-<input type="number">
                  </div>        
               </div>
               <div id="button_box">
                  <button id="cancel" class="bt">취소</button>
                  <button id="check" class="bt">확인</button>
               </div>
          </div>
      </div>
  </template>
  <script>
  
  </script>
  <style>
      #wrap{
          display: flex;
          padding-top: 187px;
          padding-bottom:206px;
          flex-direction: column;
          align-items: center;
          height: 900px;
      }
      h1{text-align: center;}
      #sign_box{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:20px;
        height: 507px;
      }
      #change_pw, #check_pw,#phone{
        display: flex;
        width:500px;
        height: 97px;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
      }
      #change_pw input , #check_pw input{width:500px;height:97px;border-radius: 10px;}
      #num{
        display: flex;
        width: 500px;
        align-items: center;
        gap: 5px;
      }
      #num input{
        width: 150px;
        height: 50px;
        border-radius: 10px;
      }
      label{color:#7A7979;font-size: 23px;font-weight: 700;}
      #button_box{
        display: flex;
        width: 450px;
        justify-content: space-between;
        align-items: flex-start;
     }
     .bt{
        width: 200px;
        height: 50px;
        flex-shrink: 0;
        border-radius: 10px;
        color:white;
        border:none;
        font-size: 23px;
        font-weight: 700;
     }
     #cancel{background:#B91646;}
     #check{background:black;}
  </style>