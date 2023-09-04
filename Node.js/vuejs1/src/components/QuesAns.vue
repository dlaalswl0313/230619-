<template>
 <main id="main">
            <section id="content">
                <div id="qsList">
                    <div class="qsTitle">
                        <h2>문의</h2>
                        <a href="javascript:questionWrite();">문의하기</a>
                    </div>
                    <div class="search_wrap">
                        <input type="text" name="word" id="word">
                    </div>
                    <div class="qsList_box">
                        <table>
                            <thead>
                                <th>번호</th><th>제목</th><th>작성자</th>
                                <th>작성일</th><th>답변</th>
                            </thead>
                                <tbody id="qs">
                                    <tr v-for="q in qdata" :key="q.id" >
                                        <td class="num">{{q.id}}</td>
                                        <td class="title">{{q.title}}</td>
                                        <td class="writer">{{q.write}}</td>
                                        <td class="date">{{q.date}}</td>
                                        <td class="ans">{{q.to}}</td>
                                    </tr>
                                </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section id="side">
                <div class="login_bt"><a href="/login">로그인</a></div>
            </section>
        </main> 
</template>
<script>
import data from '@/assets/question.json';
const qdata = data;


export default {
    data(){
        return { qdata, };
    },
    name: 'QuesAns',
}
</script>
<style>
@import '@/assets/question.css'; /*css파일 따로 만들고 불러오기*/
</style>