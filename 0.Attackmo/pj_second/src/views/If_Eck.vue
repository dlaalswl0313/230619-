<template>
      <div id="wrap">
        <div id="edit_box">
             <label>회원정보수정</label>
             <p>회원정보 수정을 하기 위해선<br>먼저 회원님의 비밀번호를 입력해야합니다</p>
            <div id="input_box">
                <input id="input_pw" type="password" placeholder="비밀번호를 입력해주세요">
            </div>
            <div id="button_bt">
                <button id="cancel" class="bt">취소</button>
                <button @click="move" type="submit" id="check" class="bt">확인</button> 
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
          // 빈 문자열 데이터 init
          return{
            input_pw:'',
          };
      }, 
      methods: {
          move(){
              this.$router.push('/InfoEdit');
          } 
      }
  }
</script>
<style>
    #wrap{
        display: flex;
        margin-top: 140px;
        margin-bottom:260px;
        flex-direction: column;
        align-items: center;
    }
    #edit_box{
        display: flex;
        width:556px;
        height: 300px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        gap:10px;
    }
    #edit_box label{font-size: 30px; font-weight: 700;}
    #edit_box p{
        font-size: 23px;
        font-style: normal;
        color: #7A7979;
        font-weight: 700;
    }
    #input_box{
        width: 500px;
        height: 50px;
    }
    #input_pw{
        width: 500px;
        height: 50px;
        border-radius: 10px;
        border: 1px solid black;
    }
    #button_bt{
        display: flex;
        width: 450px;
        justify-content: space-between;
        align-items: flex-start;
    }
    .bt{
        width: 200px;
        height: 50px;
        flex-shrink: 0;
        border:none;
        border-radius: 10px;
        color:white;
        font-size: 23px;
        font-weight: 700;
    }
    #cancel{background:#B91646;}
    #check{background:black;}
</style>