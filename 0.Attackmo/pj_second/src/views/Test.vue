<!-- // AxiosTest.vue
<script>
import axios from "axios";

export default {
  data() {
    return {
      getData: "null",
      postData: "null",
    };
  },
  methods: {
    async onClickAsync() {
      const getOfPostResultValue = await this.onClickPostData();
      console.log("비동기 진행 중 입니다.");
      this.onClickGetData(getOfPostResultValue);
    },
    onClickGetData(arg) {
      console.log(`---axios Get 시작----  콜백 함수 값 = ${arg} `);
      axios
        .get(`https://reqres.in/api/users?/page=2`, {})
        .then((res) => {
          console.log("---axios Get 성공---- ");
          this.getData = res.data;
        })
        .catch((res) => {
          console.error(res);
        });
    },
    onClickPostData() {
      const params = {
        name: "morpheus",
        job: "leader",
      };
      console.log("---axios Post 시작----");
      return axios
        .post(`https://reqres.in/api/users`, params, {})
        .then((res) => {
          console.log("---axios Post 성공---- ");
          this.postData = res.data;
          return "성공";
        })
        .catch((res) => {
          console.error(res);
          return "실패";
        });
    },
  },
};
</script>
 
<template>
  <h2 class="boxTest">axios Test</h2>
  <button type="button" @click="onClickGetData(getDataId)">axios Get</button>
  <button type="button" @click="onClickPostData()">axios Post</button>
  <button type="button" @click="onClickAsync()">axios async</button>
 
  <div v-show="postData.name">
    Post 데이터 : {{ postData }}
    <p>name : {{ postData.name }}</p>
    <p>job : {{ postData.job }}</p>
    <p>id : {{ postData.id }}</p>
    <p>createdAt : {{ postData.createdAt }}</p>
  </div>
 
  <hr />
  get 데이터
  <ul>
    <li v-for="(v, i) in getData.data" :key="`getData${i}`">
      <p>id : {{ v.id }}</p>
      <p>email : {{ v.email }}</p>
      <p>first_name : {{ v.first_name }}</p>
      <p>last_name : {{ v.last_name }}</p>
      <p>avatar : {{ v.avatar }}</p>
    </li>
  </ul>
  통신 데이터 : {{ getData }}
</template>
 
<style>
.boxTest {
  width: 200px;
  height: 50px;
  text-align: center;
  border: 1px solid #000;
}
</style> -->
<!-- <template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm: function() {
      // event.preventDefault();
      console.log(this.username, this.password);
      const url = 'https://jsonplaceholder.typicode.com/users';
      const data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
        
    }
  }
}
</script> -->

<template>
  <div>
    <p>This is a {{ name }} component.</p>
  </div>
</template>

<script>
export default {
  name: 'MyComponent', // 컴포넌트 이름 설정
  data() {
    return {
      name: this.$options.name, // 컴포넌트 이름을 변수에 할당
    };
  },
};
</script>



