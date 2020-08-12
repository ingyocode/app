<template>
  <div class="register4">
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

    <div class="box">
        <div class="img">

        </div>
        <div class="strong">
            회원가입을 축하 드립니다!
        </div>
        
        <router-link to="/"><input type="button" value="시작하기" class="btn"></router-link>
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
  .four {
    
    border-left: black 1px solid;
    border-right: black 1px solid;
  }
  .border {
    border-top: black 1px solid;
    border-bottom: black 1px solid;
  }
    .box {
        margin-left: 650px;
    }
    .strong {
        font-weight: bold;
        margin: 30px;
        margin-left: 0px;
    }
    .btn {
        border-radius: 5px;
        background-color: black;
        color: white;
        padding: 50px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>