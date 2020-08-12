<template>
  <div class="brand">
    <div class="top_text">
      마이페이지
    </div>
    <div class="big">
      <div class="margin">
        <div class="grid one">
          <img src="" alt="">
          <router-link to="mypage" id="page">배송 조회></router-link>
        </div>
      </div>
      <div class="margin">
        <div class="grid two">
          <img src="" alt="">
          <router-link to="point" id="text">포인트 {{point}} ></router-link>
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
          <router-link to="QnA" id="text">Q&A></router-link>
        </div>
      </div>
      <div class="margin">
        <div class="grid five">
          <img src="" alt="">
          <router-link to="FAQ" id="text">FAQ></router-link>
        </div>
      </div>
    </div>

    <div class="">
      <table id="myTable">
        <tr id="table_head">
            <td>상품정보</td>
            <td>주문일자</td>
            <td>주문번호</td>
            <td>주문금액</td>
            <td>주문상태</td>
        </tr>
          
          
        <tr class="head one">
          <td class="head one">

          </td>
          <td class="head one">

          </td>
        </tr>
      </table>
    </div>
    <input type="button" value="반팔 시키기" @click="myCreateFunction">
  </div>
</template>

<script>
export default {
  methods: {
    myCreateFunction() {
      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = "이쁜 반팔";
      cell2.innerHTML = "2020.07.14";
      cell3.innerHTML = "202007141234";
      cell4.innerHTML = "23000원";
      cell5.innerHTML = "배송완료";
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
  #table_head {
    border-top: black 2px solid;
    border-bottom: black 1px solid;
  }
  .head {
    padding: 10px;
  }

  

  table {
    width: 100%;
  }
  table>tr {
     border-top: black 2px solid;
    border-bottom: black 1px solid;
  }
  * {
    text-align: center;
  }
</style>