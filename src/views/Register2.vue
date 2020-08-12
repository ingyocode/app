<template>
  <div class="register2">
    <div class="top_content">
      회원가입
    </div>
    <div class="border">
      <div class="process" >
        <div class="con one">
          <div class="icon1">
            <img src="" alt="">
          </div>
          <div>
            본인인증
          </div>
        </div>
        <div class="con two">
          <div class="icon2">
            <img src="" alt="">
          </div>
          <div>
            정보수집동의
          </div>
        </div>
        <div class="con three">
          <div class="icon3">
            <img src="" alt="">
          </div>
          <div>
            정보입력
          </div>
        </div>
        <div class="con four">
          <div class="icon4">
            <img src="" alt="">
          </div>
          <div>
            가입완료
          </div>
        </div>
      </div>
      <div>
    </div>
    </div>

    <div class="big">
        <div class="strong">
            가입약관동의
        </div>
        <div class="first_check">
            <input type="checkbox" v-model="all"> 모두동의
        </div>

        <div class="big_check">
            <div><input type="checkbox" v-bind="must1" class="check num1">브랜디 약관 동의 <span class="color">(필수)</span> <span id="right">내용보기</span></div>
            <div><input type="checkbox" v-bind="must2" class="check num2">개인정보수집 및 이용에 대한 안내 <span class="color">(필수)</span><span id="right">내용보기</span></div>
            <div><input type="checkbox" class="check num3">이벤트/마케팅 수신 동의 <span class="color">(선택)</span><span id="right">내용보기</span></div>
            <div><input type="checkbox" class="check num4">야간 혜택 알림 수신 동의 <span class="color">(선택)</span><span id="right">내용보기</span></div>
        </div>
        <router-link to="/register3"><input type="button" value="다음" class="btn" @click="Check_must"></router-link>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .top_content {
  margin: 50px;
  text-align: center;
  font-size: 30px;
    }
  .button {
    background-color: black;
    color: white;
    padding: 5px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 7px;
    margin: 50px;
  }
  .process {
    text-align: center;
    margin-left: 450px;
    margin-right: 450px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
  }
  .con {
    padding-bottom: 20px;
  }
  .two {
    
    border-left: black 1px solid;
    border-right: black 1px solid;
  }
  .border {
    border-top: black 1px solid;
    border-bottom: black 1px solid;
  }
  .bottom_content {
    padding: auto;
  }
  .bottom {
    text-align: center;
  }
  .color {
      color: red;
  }
  .strong {
      font-weight: bold;
      margin: 20px;
      margin-left: 0;
  }
  .big {
      margin-left: 500px;
      margin-right: 500px;
  }
  .first_check {
      margin: 10px;
      margin-left: 0;
      font-weight: bold;
  }
  #right {
      float: right;
  }
  .check {
      margin: 10px;
  }
  .btn {
      margin: 130px;
      margin-top: 50px;
      border-radius: 6px;
      height: 50px;
      width: 200px;
      background-color: gray;
      color: white;
  }
</style>

<script>
export default {
    data: {
        
    },
    method: {
        Check_must() {
            if(must1 == false || must2 == false )
                alert('필수사항은 체크하셔야합니다!')
            
        }
    }
}
</script>