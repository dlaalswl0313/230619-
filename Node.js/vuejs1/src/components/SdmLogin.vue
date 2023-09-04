<template>
  <main id="main">
            <section id="content">
                <h3>스드메 로그인</h3>
                <div class="login_wrap">
                    <form name=loginf id=loginf method="get" action="/">
                        <input type="hidden" name="part" value="login_check">
                        <div class="login_box">
                            <div class="login_input">
                                <input type="text" name="sdmId" id="sdmId">
                                <label>ID</label>
                            </div>
                            <div class="login_input">
                                <input type="password" name="sdmPw" id="sdmPw">
                                <label>PW</label>
                            </div>
                            <div class="login_bt">
                                <a href="javascript:login();">LOGIN</a>
                            </div>
                        </div>
                    </form>
                        <div class="joingAfind">
                            <p class="find">아이디/비밀번호 찾기</p>
                            <p class="join"><a href="/sign">회원가입</a></p>
                        </div>
                </div>
            </section>           
        </main> 
</template>
<script>
    export default {
        name : 'SdmLogin',
    }
</script>
<style>

</style>