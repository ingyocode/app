<template>
  <div>
    <v-main>
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
          <router-link to="point" id="page" >포인트></router-link>
        </div>
      </div>
      <div class="margin">
        <div class="grid three">
          <img src="" alt="">
          <router-link to="coupon" id="text" >쿠폰></router-link>
        </div>
      </div>
      <div class="margin">
        <div class="grid four">
          <img src="" alt="">
          <router-link to="QnA" id="text">Q&A></router-link>
        </div>
      </div>
      <div class="margin">
        <div class="grid five">
          <img src="" alt="">
          <router-link to="FAQ" id="text" >FAQ></router-link>
        </div>
      </div>
    </div>

    <div class="text">
      포인트
    </div>
    <div class="border">
      <span>보유</span><span class="point">{{point}}p</span>
    </div>

    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      point: 2000
    }
  }
}
</script>

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
  .text {
    margin-left: 100px;
    font-size: 30px;
    margin-bottom: 5px;
  }
  .border {
    font-size: 20px;
    border-top: black 1px solid;
    border-bottom: black 1px solid;
    padding: 10px;
    margin-left: 100px;
    margin-right: 100px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 50px;
  }
  .point {
    margin-left: 30px;
  }
</style>