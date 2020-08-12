<template>
  <v-app>
    <v-main>
    <div id="grid">
      <div class="Bar">
        쇼핑몰
      </div>
      <div class="Search">
        <router-link to="/search"><div class="serach_icon"></div></router-link>
        <input placeholder="여기를 수정해보세요" class="bar_style">
      </div>
      <div class="top">
        <router-link to="/basket" class="top2" id="top_font">
          장바구니
        </router-link>
         | 
        <router-link to="/mypage" class="top3" id="top_font">
          마이페이지
        </router-link>
         | 
        <router-link to="/login" class="top4" id="top_font">
          로그인
        </router-link>   
      </div>
    </div>
    
      <div class="big_menu">
        <span class="grid_menu">
          <router-link to="/" class="menu one" @mouseover="Color" id="bottom_font">
            홈
          </router-link>
          <router-link to="/brand" class="menu two" id="bottom_font">
            브랜드
          </router-link>
          
            <router-link to="/shop" class="menu thr" id="bottom_font">
            쇼핑몰
            </router-link>
          <router-link to="/gro" class="menu fou" id="bottom_font">
            그루밍
          </router-link>
          <router-link to="/high" class="menu fiv" id="bottom_font">
            하이엔드
          </router-link>
          <router-link to="/store" class="menu sev" id="bottom_font">
            스토어
          </router-link>
        </span>
      </div>
<router-view/>
  
  <div class="footer">

    <div class="footer_inner">
      <div class="footer_1">
        <h1>고객센터 1670-6576</h1>
        <div>
        <router-link to="/FAQ" id="link">자주 묻는 질문</router-link>
        <router-link to="/kakao" id="link">카톡 플러스 친구</router-link>
        <router-link to="/face" id="link">페이스북</router-link>
        <router-link to="/insta" id="link">인스타그램</router-link>
        </div>
      </div>
</div>
<div class="color">
      <div class="time">
        영업시간 : AM 10:00 ~ PM 17:00 ( 주말,공휴일 제외 )
        <br>
        점심시간 : PM 12:30 ~ PM 13:30
      </div>
    
    <div class="footer_thing">
      회사명 : ㈜브랜디 | 대표이사 : 서정민 | 사업자등록번호 : 220-88-93187 | 통신판매업신고 : 2016-서울강남-00359 | 호스팅사업자 : (주)브랜디<br>
      주소 : (06223) 서울특별시 강남구 테헤란로 32길 26 청송빌딩<br>
      개인정보관리책임자 : 윤석호(privacy@brandi.co.kr)
    </div>
    <div class="footer_thing">
      법적고지<br>
      (주)브랜디가 제공하는 하이버 서비스는 통신판매중개자로서 통신판매 당사자가 아니며, 판매자가 등록한 상품정보 및 거래에 하이버는 책임지지 않습니다.
    </div>
    <div class="footer_thing">
      100% 정품<br>
      하이버에서 판매되는 모든 브랜드 제품은 정식제조, 정식수입원을 통해 유통되는 100% 정품입니다.
    </div>
    </div>
    <div class="footer_linkbox">
      <router-link to="rule1" id="footer_link">이용약관</router-link> ㅣ 
      <router-link to="rule1" id="footer_link">개인정보처리방침</router-link> |
      <router-link to="rule1" id="footer_link">사업자정보확인</router-link> |
    </div>


  </div>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },
  methods: {
    Color() {
      this.color='gray'
    }
  },
  data: () => ({
    link:"img.jpg"
    
  })
};
</script>


<style scoped>
  #grid {
    margin-left: 130px;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 30px;
  }
  .Bar {
    margin-left: 40px;
    background-color: #ffffff;
    font-size: 30px;
    color: black;
  }
  .Search {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
     border: gray solid 2px;
    width: 220px;
    border-radius: 10px;
    height: 50px;
  }
  .bar_style {
    border-radius: 10px;
  }
  .top {
    margin-top: 8px;
  }
  .big_menu {
    background-color: black;
    height: 90px;
    padding-left: 100px;
  }
  .menu {
    padding-top: 20px;
    margin: 15px;
    color: white;
  }
  .grid_menu {
    margin-left: 100px; 
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
  .weekly_best {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .clothes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
  }
  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  router-link {
    text-decoration: none;
  }
  #top_font {
    text-decoration: none;
    color: black;
  }
  #bottom_font {
    text-decoration: none;
    color: white;
  }
  .footer {
    margin-top: 50px;
    background-color: black;
    padding-bottom: 70px;
  }
  .footer_inner {
    padding-top: 50px;
    margin-left: 5%;
    margin-right: 5%;
    
  }
  .footer_1 {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  #link {
    text-decoration: none;
    color: white;
    padding-left: 10px;
  }
  h1 {
    color: white;
  }
  .color {
    margin-left: 5%;
    margin-right: 5%;
    color: gray;
    font-size: 13px;
  }
  .time {
    margin: 15px;
    margin-left: 0;
    padding-bottom: 30px;
    border-bottom: rgb(92, 88, 88) 1px solid;
  }
  .footer_thing {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  #footer_link {
    text-decoration: none;
    color: white;
    font-size: 13px;
  }
  .footer_linkbox {
    
    margin-left: 5%;
    margin-right: 5%;
    
  }
  .serach_icon {
    border: black 1px solid;
    height: 30px;
    width:30px;
    margin-top: 8px;
  }
</style>