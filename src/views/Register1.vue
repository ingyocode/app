<template>
  <div class="register1">
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

    <div class="bottom-content">

      <div class="bottom strong_con">
        <strong>하이버 본인 인증</strong>
      </div>
      <div>
        <img src="" class="bottom">
      </div>
      <div class="bottom li_con">
        <li>
          14세 미만 회원은 가입이 불가합니다.
        </li>
        <li>
          법인폰 사용자는 휴대폰 인증이 불가합니다
        </li>
      </div>
      <div class="bottom"><router-link to="/register2">
        <input type="button" value="휴대폰 인증" class="button">
      </router-link></div>

    </div>
  </div>
</template>
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
  .one {
    
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
  .strong_con {
    margin: 50px;
    font-size: 17px;
  }
  .li_con {
    margin-top: 30px;
  }
</style>