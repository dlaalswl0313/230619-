<template>
        <div id="wrap">
            <div id="nwrite">
                <p>문의사항</p>
                <label>문의 드립니다</label>        
            <div class="writer">
                <h6>작성자</h6><h3>뒹굴찹쌀떡</h3>
            </div>
            <div class="question">
                <span>혹시 이 사이트에 성인 영화는 없나요? 찾으려던 영화가 있는데 안 보이네요</span>
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
                    <span>안녕하십니까,ATTACKMO 문의사항 관리자입니다.<br>
                    현재 저희 사이트는 성인 등급 영화 및 에로 영화 관련 정보제공/리뷰 서비스를 제공하고 있지 않습니다.<br>
                    이용해주셔서 감사하며, 지금까지 ATTACKMO 문의 사항 관리자였습니다.
                    </span>
                </div>
            </div>
          </div>
        </div>
</template>
<script>
    
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
   #line{
    width:100%;
    border: 1px solid black;
   }
   #name{
    display: flex;
    width: 1000px;
    flex-direction: column;
    align-items: flex-start;
    gap: 39px;
    flex-shrink: 0;
   }
   #admin{
        display: flex;
        flex-direction: column;
        gap: 25px;
        align-self: stretch;
    }
    #nwrite p{font-size: 23px;font-weight: 700;}
</style>