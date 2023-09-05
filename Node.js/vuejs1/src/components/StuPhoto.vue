<template>
    <main id="main">
        <section id="content">
            <h1>스드메 스튜디오</h1>
                <div id="image_box">
                    <img src="../assets/studio1.jpg">
                    <img src="../assets/studio2.jpg">
                    <img src="../assets/studio3.jpg">
                    <img src="../assets/studio4.jpg">
                    <img src="../assets/studio5.jpg">    
                    <img src="../assets/logo.jpg">    
                </div>        
        </section>
        <section id="side">
                <div class="login_bt"><a href="/login">로그인</a></div>
        </section>
    </main>
</template>
<script>
    export default{
        name: 'StuPhoto',
    }
</script>
<style>
@import '@/assets/studio.css';
</style>