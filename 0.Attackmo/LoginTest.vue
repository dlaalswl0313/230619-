<template>
    <div>
      <div>
        <nav>
      	    <router-link to="/login">Login</router-link>
        </nav>
        <h2>로그인</h2>
        <div id="loginForm"> 
          <form @submit.prevent="fnLogin"> 
            <p>
              <input class="w3-input" name="uid" placeholder="ID를 입력해주세요" v-model="user_id"><br>
  
  
  
  
            </p>
            <p>
              <input name="password" class="w3-input" placeholder="PW를 입력해주세요" v-model="user_pw" type="password">
            </p>
            <p>
              <button type="submit" class="w3-button w3-green w3-round">Login</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </template>
  <script>

  export default {
    data() {
      return {
        user_id: '',
        user_pw: ''
      }
    },
    methods: {
      fnLogin() {
        if (this.user_id === '') {
          alert('ID를 입력하세요.')
          return
        }
  
        if (this.user_pw === '') {
          alert('비밀번호를 입력하세요.')
          return
        }
  
        alert('로그인 되었습니다.')
      }
    }
  }
  </script>