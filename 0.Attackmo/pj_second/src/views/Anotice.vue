<template>
    <div id="wrap">
            <div id="admin">
                <label>작성하기</label>
                <div id="title">
                    <label>제목</label>
                    <input type="text" placeholder="제목을 입력해주세요">
                </div>
                <div class="file_box">
                    <label>첨부파일</label>
                    <input type="file" name="file" id="file">
                </div>
                <div id="notice">
                    <label>내용</label>
                    <input type="text">
                </div>
                <div id="button_box">
                    <button id="cancel" class="bt">취소</button>
                    <button id="check" class="bt">등록하기</button>
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
    .file_box{
        display: flex;
        width: 1000px;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        font-size: 17px;
        width:100%;
    }
    input[type=file]::file-selector-button {
        width: 99px;
        height: 33px;
        background: #fff;
        border-radius: 30px;
    }
    #notice{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        width:100%;
    }
    #notice input{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        align-self: stretch;
        height: 436px;
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