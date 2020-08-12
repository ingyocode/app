<template>
  <v-main>
    <div class="store">
      <div class="head">장바구니</div>
      <div class="thing_one">
        <input type="checkbox" class="all_check">
        <span class="asdf">전체선택</span>
        <input type="button" value="전체삭제" class="d_btn">
      </div>
      <div class="basket">
        <span class="text">배송 상품</span>
          <table class="thing1">
            <thead>
              <td>
              </td>
              <td id="no_align" class="cell">
                내셔널 지오그래픽
              </td>
              <td>
                수량
              </td>
              <td>
                주문금액
              </td>
            </thead>
            <tbody>
              
              <tr>
                <td>
                  <input type="checkbox" @click="total=value1*num1*2" @change="total=total-value1*num1">
                </td>
                <td  id="no_align">
                  <img src="" alt="">
                  <span>좋은 옷입니다</span>
                  <input type="button" value="x" class="box_btn">
                </td>
               <td>
                  <input type="button" value="-" class="box_btn" @click="num1-=1">
                  <span class="box_btn" id="number">{{num1}}</span>
                  <input type="button" value="+" class="box_btn" @click="num1+=1">
                </td>
                <td>
                  <div>{{value1*num1}}원</div>
                </td>
              </tr>
            </tbody>
          </table>

      </div>
      <div class="total">
        <div>총 결제 금액</div>
        <div class="total_price">총 결제 금액 {{total}}원</div>
      </div>

      <input type="button" value="구매하기" class="buy" onclick="alert('구매가 성공적으로 완료되었습니다!')">
    </div>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      num1:1,
      value1:69000,
      total:0
    }
  },
}
</script>

<style scoped>
  .head {
    margin-top: 50px;
    text-align: center;
    margin-bottom: 20px;
    font-size: 30px;
  }
  .store {
    margin-left: 10%;
    margin-right: 10%;
  }
  .d_btn {
    float: right;
    padding: 10px;
    border: black 1px solid;
  }
  .thing_one {
    background-color: rgb(209, 209, 209);
    font-size: 20px;
    padding: 30px;
    padding-left: 15px;
    margin-bottom: 20px;
  }
  .all_check {
    padding-left: 20px;
  }
  .asdf {
    padding: 15px;
  }
  .thing1 {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
  .box_btn {
    border: rgb(107, 107, 107) 1px solid;
    width: 30px;
  }
  #no_align {
    text-align: left;
  }
  .text {
    font-size: 20px;
  }
  thead {
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
  }
  table{
    border-top: black 1px solid;
    border-bottom: black 1px solid;
    padding-bottom: 20px;
    font-size: 20px;
    margin-bottom: 50px;
  }
  .cell {
    padding-top: 20px;
    padding-bottom:30px
  }
  .total {
    font-size: 20px;
    border-top: black 1px solid;
    border-bottom: black 1px solid;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .total_price {
    float: right;
    font-weight: bold;
  }
  .buy {
    background-color: black;
    color: white;
    padding: 25px;
    padding-right: 50px;
    padding-left: 50px;
    margin-left: 45%;
    margin-top: 50px;
  }
  .number {
    width: 30px;
  }
</style>