<template>
        <div id="content">
            <div id="name">
                <h1>문의작성</h1>
                <label>문의 드립니다</label>
            </div>
            <div class="writer">
                <h6>작성자</h6><h3>관리자</h3>
            </div>
            <div class="question">
                <p>혹시 이 사이트에 성인 영화는 없나요? 찾으려던 영화가 있는데 안 보이네요</p>
            </div>
            <div id="line"></div>
            <div id="admin">
                <div id="name">
                    <label>re:문의 드립니다</label>
                </div>
                <div class="writer">
                    <h6>작성자</h6><h3>관리자</h3>
                </div>
                <div class="question">
                    <p>안녕하십니까,ATTACKMO 문의사항 관리자입니다.<br>
                    현재 저희 사이트는 성인 등급 영화 및 에로 영화 관련 정보제공/리뷰 서비스를 제공하고 있지 않습니다.<br>
                    이용해주셔서 감사하며, 지금까지 ATTACKMO 문의 사항 관리자였습니다.
                    </p>
                </div>
            </div>
            </div>
</template>
<script>
</script>
<style>
    #content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 39px;
        flex-shrink: 0;
    }
    #name{
        display: flex;
        width: 1000px;
        flex-direction: column;
        align-items: flex-start;
        gap: 39px;
        flex-shrink: 0;
    }
    #line{
        height: 1px;
        align-self: stretch;
        border: 1px solid black ;
        background:black;
        display: flex;
        align-items: flex-start;
        gap: 50px;
    }
    label{
        background: #D9D9D9;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        padding: 23px 20px;
        font-size: 23px;
        font-weight: 700;
    }
   .writer{
    display: flex;
    gap:20px;
    align-items: flex-start;
   }
   #admin{
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-self: stretch;
    width:1920px;
    }
</style>