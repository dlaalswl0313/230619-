<template>
    <div id="wrap">
        <div id="nwrite">
            <p>공지사항</p>
            <label>공지 확인 부탁드립니다.</label>        
        <div class="writer">
            <h3>관리자</h3><h3>{{ getCurrentDate() }}</h3>
        </div>
        <div id="admin">
            <div class="note">
                <span>안녕하십니까,관리자입니다.<br>다들 사이트 재밌게 즐기고 계신가요?<br>다름이 아니라 몇몇 회원분들이 공지를 숙지하지 못하고 리뷰 게시판에서
                    무작위로 게시하시는 분이 있어 공지를 올립니다<br><br>저희 사이트는 필독 글을 읽어보면 아시겠지만 하루에 올릴 수 있는 리뷰 게시글의 양이 
                    정해져 있습니다.<br>자세한 이유는 공지글과 필독글을 읽어보시기 바랍니다.<br>사이트를 즐기고 계시다가
                    공지를 어겨 활동 정지를 받지 않기를 바라면서 글 마치겠습니다.<br>그럼 다들 사이트를 재밌게 다시 즐겨주시길 바랍니다.
                </span>
            </div>
        </div>
      </div>
    </div>

</template>
<script>
import data from '../data/notice.js'

export default {
    name: 'Read',
    data() {
        return {
            data: data
        }
    },
    methods: {
        getCurrentDate() { //날짜 형식 YYYY-MM-DD
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
    }
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
    margin-bottom:200px;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
    width:1000px;
}
h3:nth-child(2){font-size: 17px;font-weight: 100;}
.writer{
    display: flex;
    gap:20px;
    align-items: flex-start;
}
label{
    background: #D9D9D9;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 23px 20px;
    font-size: 23px;
    font-weight: 700;
}
#admin{
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-self: stretch;
}
#nwrite p{font-size: 23px;font-weight: 700;}
.note span{
    font-size: 17px;
    font-weight: 400;
}
</style>