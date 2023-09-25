<script>
import {inject} from 'vue'
export default {
    name:'sideMenu',
    setup(){
        const isSlideMenuToggle = inject('isSlideMenuToggle');
        const sideMenuOpen = inject('sideMenuOpen');
        return{isSlideMenuToggle,sideMenuOpen}
    }
}
</script>

<template>
    <div class="side-menu">
      <div class="top-side">
        <img class="LOGO" src="@/images/LOGO.svg" />
        <div class="frame">
          <img class="person-icon" src="@/images/personicon.svg" />
          <div class="text-wrapper">로그인 / 회원가입</div>
        </div>
      </div>
      <div class="frame2">
          <img class="person-icon" src="@/images/personicon.svg" />
          <div class="text-wrapper">로그인 / 회원가입</div>
      </div>
      <div class="category">
        <div class="c-title"><div class="div">영화</div></div>
        <div class="c-childs">
          <div class="child"><div class="text-wrapper-2">- 상영중인 영화</div></div>
          <div class="child"><div class="text-wrapper-2">- 상영예정 영화</div></div>
          <div class="div-wrapper"><div class="text-wrapper-3">- 이벤트</div></div>
          <div class="child-2"><div class="text-wrapper-3">- 시사회</div></div>
        </div>
      </div>
      <div class="category">
        <div class="c-title"><div class="div">리뷰</div></div>
        <div class="c-childs">
          <div class="child"><div class="text-wrapper-4">- 리뷰페이지</div></div>
          <div class="child"><div class="text-wrapper-3">- 좋아요</div></div>
          <div class="div-wrapper"><div class="text-wrapper-3">- 북마크</div></div>
          <div class="child-2"><div class="text-wrapper-3">- 시사회</div></div>
        </div>
      </div>
      <div class="category">
        <div class="c-title"><div class="div">공지사항</div></div>
      </div>
      <div class="category">
        <div class="c-title"><div class="div">문의사항</div></div>
        <div class="c-childs">
          <div class="child"><div class="text-wrapper-5">- 문의 게시판</div></div>
          <div class="child-2"><div class="text-wrapper-6">- 신고 게시판</div></div>
        </div>
      </div>
    </div>
    <div @click="sideMenuOpen" class="darkBG"></div>
</template>

<style>
@import url(./sideMenu.css);
</style>