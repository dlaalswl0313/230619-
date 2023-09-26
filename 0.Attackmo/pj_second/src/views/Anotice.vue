<template>
    <div id="wrap">
            <div id="admin">
                <h1>작성하기</h1>
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
</style>