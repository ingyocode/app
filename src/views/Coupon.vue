<template>
<v-main>
  <div id="coupon">
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
          <router-link to="point" id="text">포인트></router-link>
        </div>
      </div>
      <div class="margin">
        <div class="grid three">
          <img src="" alt="">
          <router-link to="coupon" id="page">쿠폰></router-link>
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
          <router-link to="FAQ" id="text" >FAQ></router-link>
        </div>
      </div>
    </div>

    <div class="show_coupon">
      발급받은 쿠폰 {{coupon}}
    </div>
  <table id="Table">
        <tr id="table_head">
            <td>쿠폰번호</td>
            <td>쿠폰명</td>
            <td>할인금액</td>
        </tr>
          
          
        <tr class="head one">
          <td class="head one">

          </td>
          <td class="head one">

          </td>
        </tr>
      </table>
    <input type="button" value="쿠폰 받기" @click="getCoupon();coupon+=1">
    
  </div>
  </v-main>
</template>

<script>
export default {

  data() {
      return {
            coupon:0
      }
  },
  methods: {
    getCoupon() {
      var t = document.getElementById("Table");
      var r = t.insertRow(1);
      var c1 = r.insertCell(0);
      var c2 = r.insertCell(1);
      var c3 = r.insertCell(2);
      c1.innerHTML = "001";
      c2.innerHTML = "할인쿠폰";
      c3.innerHTML = "10%";
    },
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
    margin-bottom: 50px;
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
  table {
    width: 50%;
    text-align: center;
    margin-left: 25%;
  }
  .show_coupon {
    margin-bottom: 15px;
    font-size: 25px;
    border-bottom: black 1px solid;
    margin-left: 200px;
    margin-right: 200px;
  }
  #table_head {
    font-weight: bold;
    border-top: black 2px solid;
    
    margin: 10px;
  }
</style>