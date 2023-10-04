<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
  <div id="wrap">
        <form @submit.prevent="submitForm" id="sign_box">
             <h1>회원가입</h1>
             <div id="email">
                <label><i class="bi bi-asterisk"></i>이메일</label>
                <input type="email" name="mail" v-model="formData.mail" id="mail">
             </div>
             <div id="pw">
                <label><i class="bi bi-asterisk"></i>비밀번호</label>
                <input type="password" name="password1"  v-model="formData.password1" id="pw">
             </div>
             <div id="pw_ck">
                <label><i class="bi bi-asterisk"></i>비밀번호 확인</label>
                <input type="password" name="password2" v-model="formData.password2">
                <p>비밀번호는 6자리 이상의 영문과 숫자에 조합하여야합니다</p>
             </div>
             <div id="nickname">
                <label><i class="bi bi-asterisk"></i>활동명</label>
                <input type="text" name="n_name" v-model="formData.n_name" id="aname">
             </div>
             <div id="phone">
                <label><i class="bi bi-asterisk"></i>휴대폰번호</label>
                <div id="num">
                  <!-- <input type="number" name="number" v-model="formData.number1" id="number1" @input="limitCharacters('number1')" placeholder="010">
                  -<input type="number" name="number" v-model="formData.number2" id="number2" @input="limitCharacters('number2')">
                  -<input type="number" name="number" v-model="formData.number3" id="number3" @input="limitCharacters('number3')"> -->
                  <input type="number" name="number" v-model="formData.number" id="number" @input="limitCharacters('number')" placeholder="01012341235">
                </div>       
             </div>
             <div id="button_box">
                <button type="submit" id="sign" class="bt">가입하기</button>
                <button type="button" id="cancel" class="bt">취소</button>
             </div>
        </form>
    </div>
</template>
<script>
export default {
  data(){
    return{
      formData:{
        mail:"",
        password1:"",
        password2:"",
        n_name:"",
        // number1:"",
        // number2:"",
        // number3:"",
        number:"",
      },
      submittedData: [], // 입력된 데이터를 저장할 배열
    };
  },
  methods: {
    checkAll() {
      // const mail = document.forms["sign_box"]["mail"].value;
      // const password1 = document.forms["sign_box"]["password1"].value;
      // const password2 = document.forms["sign_box"]["password2"].value;
      // const n_name = document.forms["sign_box"]["n_name"].value;
      // const phone = this.formData.number1 + this.formData.number2 + this.formData.number3; // 전화번호 합치기
      
      const mail = this.formData.mail;
      const password1 = this.formData.password1;
      const password2 = this.formData.password2;
      const n_name = this.formData.n_name;
      //const phone = this.formData.number1 + this.formData.number2 + this.formData.number3;
      const phone = this.formData.number;
      
      if (!this.checkMail(mail)) {
        //console.log("이메일 값: " + this.formData.mail);
        return false;
      }
      if (!this.checkPassword(password1, password2)) {
        //console.log("비밀번호 값: " + this.formData.password1);
        //console.log("비밀번호 값: " + this.formData.password2);
        return false;
      }
      if (!this.checkName(n_name)) {
       // console.log("활동명 값: " + this.formData.n_name);;
        return false;
      }
      if (!this.checkPhone(phone)) {
        //console.log("휴대폰번호 값: " + this.formData.number1 + this.formData.number2 + this.formData.number3);
        console.log("휴대폰번호 값: " + this.formData.number);
        return false;
      }
      return true;
    },
    checkMail(mail) {
      // emailRegExp 정의 및 이메일 형식 확인
      const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
      if (!emailRegExp.test(mail)) {
        alert("이메일 형식이 올바르지 않습니다!");
        return false;
      }
      return true; // 확인이 완료되었을 때
    },
    checkPassword(password1, password2) {
      // 비밀번호 확인
      if (password1 !== password2) {
        alert("비밀번호가 맞지않습니다");   
        return false;
      }
      if (password1.length < 6) {
        alert("비밀번호는 6자리 이상이어야 합니다.");
        return false;
      }
      return true; // 확인이 완료되었을 때
    },
    checkName(n_name) {
      if (!n_name) {
        alert("활동명을 입력해주세요!");
        return false;
      }
      const nameRegExp = /^[가-힣]{2,4}$/;
       if (!nameRegExp.test(n_name)) {
            alert("이름이 올바르지 않습니다.");
            return false;
        }
      return true; // 확인이 완료되었을 때 
    },
    checkPhone(phone) {
      const phoneNumberPattern = /^[0-9]{11}$/;
      return phoneNumberPattern.test(phone);
    },
   
    submitForm() {
      if (this.checkAll()) {
        // 폼 제출 시 formData를 submittedData 배열에 추가
        this.submittedData.push({
          mail: this.formData.mail,
          password1: this.formData.password1,
          password2: this.formData.password2,
          n_name: this.formData.n_name,
          //number: this.formData.phone,
        });
        this.formData = {
            mail: '',
            password1: '',
            password2: '',
            n_name: '',
            // number1: "",
            // number2: "",
            // number3: "",
            number:"",
          },
          console.log(this.submittedData);
        }
      },
    },
};
</script>
<style>
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
    /* #phone input{
        width: 250px;
        height: 60px;
        padding: 13px 26px;
    } */
    #num{ 
        width: 915px;
        height: 60px;
        display: flex;
        align-items: center;
        gap:50px;
    }
    #num input{
        width: 918px;
        height: 75px;
        padding: 13px 26px;
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
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>