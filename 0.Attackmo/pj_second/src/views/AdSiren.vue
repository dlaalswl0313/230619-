<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <div id="wrap">
        <div id="nwrite">
            <p>신고관리</p>
            <span>목록{{ sortedData.length}}</span>
            <table id="list">
                <tr>
                    <td>사유</td>
                    <td>신고대상</td>
                    <td>일자</td>
                </tr>
            </table> 
            <table id="list2">
                <tr v-for="(value) in visiblePosts" :key="value.id" @click="gonote">
                    <td>{{ value.option}}</td>
                    <td>{{ value.name }}</td>
                    <td>{{ getCurrentDate() }}</td>
                </tr>
            </table>
            <div id="totalPage">
                <i @click="before()" class="bi bi-chevron-bar-left"></i>   
                <i @click="before()" class="bi bi-chevron-compact-left"></i>
                    <div id="page">
                        <button id="pgnum" v-for="block in blocks" :key="block" @click="changePage(block)">{{ block }}</button>
                    </div>
                <i @click="next()" class="bi bi-chevron-compact-right"></i>  
                <i @click="next()" class="bi bi-chevron-bar-right"></i>
            </div>
        </div>
        
    </div>
</template>
<script>
import data from '../data/siren.js'

export default {
    name: 'Read',
    data() {
        return {
            data: data,
            itemsPerPage: 10, //목록 몇개까지 표시할것인가
            currentPage: 1, //페이지 이동 수 
        }
    },
    computed: {
        sortedData() {
            return this.data.slice().sort((a, b) => {
                // 날짜를 기준으로 내림차순 정렬
                return new Date(b.Date) - new Date(a.Date);
            });
        }, 
        totalPage() {
            return Math.ceil(this.data.length / this.itemsPerPage);
        }, 
        visiblePosts() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.sortedData.slice(start, end);
        }, 
        visiblePosts() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.sortedData.slice(start, end);
        },
        blocks() {
            const blocks = [];
            for (let i = 1; i <= this.totalPage; i++) {
                blocks.push(i);
        }
         return blocks;
        },
  },
    methods: {
        getCurrentDate() { //날짜 형식 YYYY-MM-DD
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
        gonote(){
           alert("클릭미");
            
        },
        changePage(page) {
            this.currentPage = page;
        },
        before(){
            //alert("이전");
            if(this.currentPage>1){
                this.currentPage--; 
            }
        },
        next(){
            //alert("다음");
            if(this.currentPage < this.totalPage){
                this.currentPage++;
            }
        }
    },
}
</script>
<style>
#wrap{
    display: flex;
    flex-direction: column;
    align-items: center; 
}
#nwrite{
    display: flex;
    margin-top: 50px;
    margin-bottom:100px;
    flex-direction: column;
    align-items: flex-start;
    gap: 55px;
    width:1020px;
    height: 1166px;
}
#nwrite p{font-size: 23px;font-weight: 700;}
#list{
    width:1000px;
    text-align: center;
    border-bottom: 1px solid black;
    display: flex;
    padding: 20px 0px;
    align-items: flex-start;
}
#list2{
    width:1000px;
    text-align: center;
    gap:20px;
}
#list2:hover{cursor: pointer;}
table tr td{width:200px;padding:15px;}
table tr td:nth-child(2){width:480px;}
#totalPage{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}
#page{
    list-style-type: none;
    display: inline-flex;
    height: 40px;
    padding: 0px 30px;
    align-items: center;
    flex-shrink: 0;
    gap:25px;
}
#pgnum{
    border:none;
    background: white;
}
</style>