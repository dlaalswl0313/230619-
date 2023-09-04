<template>
    <main id="main">
            <section id="content">
                <h3>스드메 회원가입</h3>
                <table id="list">
                    <tr>
                        <td>
                            <label>아이디</label>
                        </td>
                        <td>
                            <input type="text" name="id" id="id">
                            <button id="ck">중복확인</button>
                        </td>
                    </tr>  
                    <tr></tr> 
                        <td>
                            <label>비밀번호</label>
                        </td>
                        <td>
                            <input type="password" name="pw" id="pw">
                        </td> 
                    <tr>                      
                        <td>
                            <label>비밀번호 확인</label>
                        </td>  
                        <td> 
                            <input type="password" name="pwck" id="pwck">
                        </td>
                    </tr> 
                    <tr> 
                        <td>
                            <label>이름</label>
                        </td>
                        <td>
                            <input type="text" name="name" id="name">
                            
                        </td>
                    </tr>
                    <tr> 
                        <td>
                            <label>전화번호</label>
                        </td>
                        <td>
                            <input type="number" name="tel" id="tel">
                        </td>
                    </tr>
                    <tr> 
                        <td>
                            <label>주소</label>
                        </td>
                        <td>
                            <input type="text" name="add" id="add">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>결혼예정일</label>
                        </td>
                        <td>
                            <input type="date" name="wDate" id="wDate">
                        </td>
                    </tr>
                </table>
                <div id="bt_list">
                    <button id="send">등록</button>
                    <button id="cencal">취소</button>
                </div>
            </section>
           
        </main> 
</template>
<script>
export default {
  name: 'SignUp',
}
</script>
<style>
h3{text-align: center;}
#list{
    border:1px solid black; 
    width:70%;
    margin:20px auto;
}
table tr td{
    width:50px;
    height:40px;
    border: 1px solid #aaa;
}
#list td:nth-child(1){
    background:#F28E85;
    text-align: center;
}
#list td input{margin:30px;width:50%;padding:10px;}
#ck{
    background:#403D37;
    color:white;
    border-radius: 5%;
    border:none;
}
#bt_list{
    display: flex;
    justify-content: center;
    gap:20px;
}
#send, #cencal{
    width:100px;
    color:white;
    border-radius: 5px;
    border:none;
    font-weight: 200;
    padding:10px;
}
#send{background:#F28E85;}
#cencal{background:#403D37;}
</style>