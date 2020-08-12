<template>
  <div class="register3">
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

    <div class="big_box">
        <div class="t input id">
            <input type="text" placeholder="아이디입력">
        </div>
        <div class="b input email">
            <input type="text" placeholder="이메일입력">
        </div>
        <div class="text">이메일 정보는 비밀번호 찾기시 사용됩니다.</div>
        <div class="t input passwd">
            <input type="text" placeholder="비밀번호입력">
        </div> 
        <div class="b input c_passwd">
            <input type="text" placeholder="비밀번호확인">
        </div>
        <strong>추천인 코드</strong>
        <div class="input code">
            <input type="text" placeholder="추천인 코드 입력(선택사항)">
        </div>
        <div class="text">추천인 코드를 입력하시면 1000포인트가 지급됩니다.</div>
        <div>
            <router-link to="/register4"><input type="button" value="다음" class="btn"></router-link>

        </div>
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
  .three {
    
    border-left: black 1px solid;
    border-right: black 1px solid;
  }
  .border {
    border-top: black 1px solid;
    border-bottom: black 1px solid;
  }

    .big_box {
        margin-top: 30px;
        margin-left: 500px;
        margin-right: 300px;
    }
    input {
        width: 400px;
    }
    .input {
        padding: 4px;
        width: 400px;
        border: gray 0.5px solid;
    }
    .t.input {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .b.input {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .c_passwd {
        margin-bottom: 40px;
    }
    .code {
        
        border-radius: 5px;
    }
    .passwd {
        margin-top: 20px;
    }
    .text {
        font-size: 12px;
    }
    .btn {
        margin-top: 10px;
        margin-left: 100px;
        border-radius: 4px;
        background-color: black;
        color: white;
        width: 200px;
        padding: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>