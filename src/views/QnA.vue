<template>
  <div class="Qna">
    <div class="top_text">
      마이페이지
    </div>
    <div class="big">
      <div class="margin">
        <div class="grid one">
          <img src="" alt="">
          <router-link to="mypage" id="text">배송 조회></router-link>
        </div>
      </div>
      <div class="margin">
        <div class="grid two">
          <img src="" alt="">
          <router-link to="point" id="text" >포인트></router-link>
        </div>
      </div>
      <div class="margin">
        <div class="grid three">
          <img src="" alt="">
          <router-link to="coupon" id="text">쿠폰></router-link>
        </div>
      </div>
      <div class="margin">
        <div class="grid four">
          <img src="" alt="">
          <router-link to="QnA" id="page" >Q&A></router-link>
        </div>
      </div>
      <div class="margin">
        <div class="grid five">
          <img src="" alt="">
          <router-link to="FAQ" id="text" class="page">FAQ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  
  .big {
    margin-left: 200px;
    margin-right: 200px;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    border: black 1px solid;
    margin-bottom: 30px;
  }
  #text {
    text-decoration: none;
    color: gray;
  }
  
  #page {
    text-decoration: none;
    color: black;
  }
  .top_text {
    text-align: center;
    margin-top: 70px;
    font-size: 23px;
    margin-bottom: 10px;
  }
  .grid {
    padding: 30px;
    border-right: black solid 1px;
    text-align: center;
  }
  .margin {
    margin-top: 50px;
    margin-bottom: 50px;
  }
</style>