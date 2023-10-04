<template>
    <div id="wrap">
        <form @submit.prevent="write" id="admin">
            <label>공지사항(관리자)</label>
            <div id="title">
                <label>제목</label>
                <input type="text" v-model="title" placeholder="제목을 입력해주세요">
            </div>
            <div id="notice">
                <label>내용</label>
                <textarea v-model="content"></textarea>
            </div>
            <div id="button_box">
                <button id="cancel" class="bt">취소</button>
                <button @click="write" id="check" class="bt">등록하기</button>
            </div>
        </form>
      
    </div>
</template>
<script> 
import data from '../data/data.js'

export default {
    name: 'Create',
    data() {
        return {
            data: data,
            writer: "",
            title: "",
            content: ""
        }
    },
    methods: {
        write() {
            this.data.push({
                Number:this.Number,
                title: this.title,
                writer: this.writer,
            })
            this.$router.push({
                path:"/AskMe"
            })
        }
    }
}      
</script>

<style>
    #wrap{
        display: flex;
        flex-direction: column;
        align-items: center; 
    }
    #admin{
        display: flex;
        margin-top: 50px;
        margin-bottom:200px;
        flex-direction: column;
        align-items: flex-start;
        gap: 50px;
        width:1000px;
    }
    #title{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        width:100%;
    }
    #title input{
        display: flex;
        padding: 23px 20px;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        align-self: stretch;
        display: flex;
        font-size: 26px;
    }
    #notice{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        width:100%;
    }
    #notice textarea{
        display: flex;
        gap: 20px;
        align-self: stretch;
        height: 436px;
        width: 100%;
        
    }
    #button_box{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 50px;
        width:100%;
    }
    .bt{
        border-radius: 8px;
        border:1px solid red;
        display: flex;
        width: 100px;
        padding: 7px 0px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background: none;
        font-size:15px;
        font-weight: 400;
    }
    #cancel{color:red;}
    #check{background:red;color:white;}
    label{font-size:23px;font-weight: 700;}
    
</style>