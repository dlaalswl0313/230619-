<template>
    <div id="wrap">
        <div id="nwrite">
            <p>공지사항</p>
            <table id="list">
                <tr>
                    <td>번호</td>
                    <td>제목</td>
                    <td>작성자</td>
                    <td>날짜</td>
                </tr>
            </table> 
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
table tr td{width:200px;}
table tr td:nth-child(2){width:480px;}
#number_list{
    display: flex;
}
</style>