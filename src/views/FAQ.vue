<template>
<v-main>
  <div class="Faq">
    <div class="top_text">
      마이페이지
    </div>
    <div class="big">
      <div class="margin">
        <div class="grid one">
          <img src="" alt="">
          <router-link to="mypage" id="text" class="page">배송 조회></router-link>
        </div>
      </div>
      <div class="margin">
        <div class="grid two">
          <img src="" alt="">
          <router-link to="point" id="text">포인트></router-link>
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
          <router-link to="QnA" id="text" >Q&A></router-link>
        </div>
      </div>
      <div class="margin">
        <div class="grid five">
          <img src="" alt="">
          <router-link to="FAQ" id="page">FAQ></router-link>
        </div>
      </div>
    </div>

    <div class="thing one">
      <div class="header1">
        취소/환불/교환 관련
      </div>
      <div class="q one">
        <div @click="t1_1=!t1_1" v-show="!t1_1" class="fonts">▶주문취소가 안돼요</div>
        <div @click="t1_1=!t1_1" v-show="t1_1" class="fonts">▼주문취소가 안돼요</div>
        <div class="click" v-show="t1_1">
          배송준비 상태로 변경 시 판매자 배송기간으로 +3영업일 동안 주문취소가 불가합니다.<br>
          배송기간 내에 취소를 희망하실 경우 구매하신 스토어 고객센터로 문의주셔서 취소가 가능한지 확인 부탁드립니다.
        </div>
      </div>
      <div class="q two">
        <div @click="t1_2=!t1_2" v-show="!t1_2" class="fonts">▶반품/교환 하고 싶어요</div>
        <div @click="t1_2=!t1_2" v-show="t1_2" class="fonts">▼반품/교환 하고 싶어요</div>
        <div class="click" v-show="t1_2">
          교환/반품 모두 [MY페이지 ▶ 주문/배송조회] 에서 주문 건 [환불요청] 신청 후 진행 됩니다.<br>
          1) [환불요청] 신청 후 스토어 고객센터로 연락주시거나 Q&A게시글을 통해 교환또는 반품 의사를 밝혀주세요! <br>
          2) 의사를 비춘 이후에는 상품 회수요청 접수해주세요! <br>
          (스토어 교환/반품 규정에 따라 직접 상품을 반송해야하는 경우도 있습니다) <br>
        </div>
      </div>
    </div>

  </div>
  </v-main>
</template>

<script>
export default {
  data () {
    return {
      t1_1:false,
      t1_2:false
    }
  },
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
  .thing {
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 50px;
  }
  .header1 {
    font-size: 25px;
    border-bottom: black solid 1px;
  }
  .click {
    padding: 15px;
    background-color: rgba(241, 227, 227, 0.253);
    margin-bottom: 17px;
  }
  .fonts {
    font-size: 15px;
    padding: 17px;
    
  }
  .q {
    border-bottom: rgb(214, 214, 214) solid 1px;
  }
</style>