<script>
export default {

}
</script>

<style>

</style>

<template>
  <div class="login">

    <div class="page first">
      전상품 무료배송
    </div>

    <div class="page second">
      예쁜 옷 GET하러 로그인
    </div>

    <div>
      <input type="text" placeholder="아이디 입력" class="input id" v-model="id">
    </div>

    <div>
      <input type="password" placeholder="비밀번호 입력" class="input passwd" v-model="passwd">

    </div>

    <div>
      <input type="button" value="login" class="btn login" onclick="alert('login');">
    </div>

    <div><router-link to="/register1">
      <input type="button" value="register" class="btn register">
    </router-link></div>
<!--
    <div class="text">
      <router-link to="/find_id" id="router">
      아이디 찾기
      </router-link> | 
      <router-link to="/find_passwd" id="router">
      비밀번호 찾기
      </router-link>
    </div>
-->
  </div>
  
</template>

<script>

export default {
  
}

</script>

<style scoped>
  #router {
    text-decoration: none;
    color: black;
  }
  .login {
    text-align: center;
  }
  .input {
    margin-bottom: 10px;
    padding: 5px;
    border: gray solid 1px;
    font-size: 20px;
    width: 550px;
  }
  .btn {
    margin-bottom: 10px;
    background: black;
    color: white;
    width: 550px;
    height: 35px;
  }
  .id {
    margin: 10px;
  }
  .register {
    background: white;
    color: black;
    border: black 1px solid;
  }
  .text {
    margin: 10px;
    text-align: center;
    font-size: 14px;
  }
  .page {
    margin-top: 5px;
    text-align: center;
    font-weight: lighter;
    font-size: 30px;
  }
  .page.first {
    margin-top: 70px;
    color: red;
    font-weight: bold;
  }
</style>
