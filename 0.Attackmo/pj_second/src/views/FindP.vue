<template>
    <div id="wrap">
        <div id="find_box">
             <h1>비밀번호 찾기</h1>
             <div id="email">
                <input type="email" placeholder="이메일">
             </div>
             <div id="phone">
                <label>휴대폰번호</label>
                <div id="num">
                    <input type="number" placeholder="010">-<input type="number">-<input type="number">
                </div>   
                <div id="button_box">
                    <button id="find_p" class="bt">비밀번호 찾기</button>
                </div>    
            </div>
                <div id="find">
                    <label>본인인증찾기</label>
                    <p>본인 인증 시 제공되는 정보는 해당 인증 기관에서 직접 수집하며, 인증 이외의 용도로 이용 또는 저장되지 않습니다.</p>
                    <div id="num">
                        <input type="number" placeholder="010">-<input type="number">-<input type="number">
                    </div>  
                </div>
                <div id="find_bt">
                    <button id="mine" class="bt">본인인증찾기</button>
                </div> 
        </div>
    </div>
</template>
<script>
</script>
<style>
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    #wrap{
        display: flex;
        margin-top: 130px;
        margin-bottom:130px;
        flex-direction: column;
        align-items: center;
    }
    #find_box{
        border: 1px solid black;
        display: flex;
        width: 1000px;
        padding: 73px 80px;
        flex-direction: column;
        align-items: center;
        gap: 53px;
    }
    #email{
        width: 831px;
        height: 85px;
    }
    #email input{
        display: flex;
        width: 831px;
        height: 85px;
        padding: 13px 26px;
        align-items: center;
        border-radius: 10px;
        font-size: 23px;
        color:#7A7979;
    }
    #phone{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap:15px;
    }
    #phone label{
        font-size:23px;
        font-weight: 700;
    }
    #num{
        display: flex;
        align-items: center;
        gap: 30px;
        display: flex;
        justify-content: space-between;
    }
    #num input{
        width: 230px;
        height: 60px;
        padding: 13px 26px;
        border-radius: 10px;
        font-size: 23px;
        color:#7A7979;
    }
    #button_box{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        align-items: center; 
        gap: 15px; 
    }
    #find_p{
        width: 831px;
        height: 85px;
        padding: 25px 318px;
        gap: 10px;
        border-radius: 10px;
        background: #F9C041;
        border:none;
        color:white; 
        font-weight:700;
        font-size:23px;
    }
    #find{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
    #find label{font-size:30px;font-weight: 700;}
    #find p{font-size:15px;font-weight: 400;color:#7A7979;}
    #find_bt{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        align-items: center; 
        gap: 15px; 
    }
    #mine{
        width: 335px;
        height: 85px;
        padding: 24px 84px;
        gap: 10px;
        background: #F9C041;
        border:none;
        color:white; 
        border-radius: 10px;
        font-weight:700;
        font-size:23px;
    }
</style>