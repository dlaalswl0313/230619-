// template.js

module.exports = { //객체형식,modul.exportss는 모듈에서 외부로 내보낼 항목 정의   
        questionHTML:function(main,login,qsData){
            var tag='';
            for(var q of qsData){
               tag += "<tr><td>"+q.id+"</td><td>"+q.title+"</td><td>"+q.write
               +"</td><td>"+q.date+"</td><td>"+q.to+"</td></tr>";
            }

            var qsHTML=`
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
                            <tbody id="qs">${tag}</tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section id="side">
                <div class="login_bt">
                    <a href="/${login.url}">${login.text}</a>
                </div>
            </section>`;
            return ( commonHTML(main,mainHTML,"question") );
     },
    mainHTML:function(main, login){
    var mainHTML=` 
        <section id="content">
            <img src="./image/${main.main_img}">
        </section>
        <section id="side">
            <div class="login_bt">
                <a href="/${login.url}">${login.text}</a>
            </div>
        </section>`;
        return ( commonHTML(main,mainHTML,"index") );
    },
    
    loginHTML:function(main){
        var loginHTML=`
        <section id="content">
                <h3>스드메 로그인</h3>
               <div class="login_wrap">
                    <form name="loginf" id="loginf" method="get" action="/">
                        <input type="hidden" name="part" value="login_check">
                        <div class="login_box">
                                <div class="login_input">
                                    <input type="text" name="sdmId" id="sdmId">
                                    <label for="sdmId">ID</label>
                                </div>
                                <div class="login_input">
                                    <input type="password" name="sdmPw" id="sdmPw">
                                    <label for="sdmPw">PW</label>
                                </div>
                                <div class="login_bt">
                                    <a href="javascript:login();">LOGIN</a>
                                </div>
                        </div>
                    </form>
                    <div class="joinAfind">
                        <p class="find">아이디/비밀번호 찾기</p>
                        <p class="join"><a href="/sign">회원가입</a></p>
                    </div>
               </div>
            </section>`;
        return (commonHTML(main,loginHTML,"login"));
    },
    signupHTML:function(main){
        var signupHTML=`
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
            </section>`;
        return (commonHTML(main,signupHTML,"sign")); 
        //commonHTML 함수를 호출하는 부분, main 전달되는 메인정보객체, 회원가입페이지의 html내용, 문자열로 css파일을 표현
    }
}

function commonHTML(main,html,css){//commonHTML 문서의 공통구조 생성(메인,html,css를 받아 동적으로 생성)
    var menu = "";
    for(var key of Object.keys(main.menu)){//${}데이터 삽입
        menu+=`<li class="menu"><a href="/${key}">${main.menu[key]}</a></li>`;//${main.menu[key]} 메뉴이름삽입 menu변수에 누적
    }
    return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>스드메의 모든것</title>
    
        <link rel="stylesheet" href="./lib/main.css">
        <link rel="stylesheet" href="./lib/${css}.css">
    </head>
    <body>
        <div id="wrap">
            <header id="header">
                <div class="logo"><a href="/"><img src="./image/${main.logo}"></a></div>
                <nav class="nav">
                    <ul class="menuList">
                       ${menu}
                    </ul>
                </nav>
            </header>
            <main id="main">
                ${html}
            </main>
        </div>
    </body>
    </html>        
    `);
}