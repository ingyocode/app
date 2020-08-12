<template>
    <v-main>
        <div class="Buy">
            <div>
                asdf <!-- img -->
            </div>
           <div>
               <div class="clothes_name">
                   하얀색 반팔
               </div>
               <table>
                   <tr>
                       <td>
                           판매가
                       </td>
                       <td>
                           13000
                       </td>
                   </tr>
                   <tr>
                       <td>
                           색상
                       </td>
                       <td>
                           <input type="button" value="블랙" @click="show_one=!show_one">
                           <input type="button" value="핑크" @click="show_two=!show_two">
                           <br>
                           <input type="button" value="화이트" @click="show_three=!show_three">
                           <input type="button" value="그레이" @click="show_four=!show_four">
                       </td>
                   </tr>
               </table>
                <div class="grid1" v-show="show_one">
                    <div class="clothes">
                        <div>
                            하얀색 반팔
                        </div>
                        <div>
                            -블랙
                        </div>
                    </div>
                    <div class="number">
                        <div class="grid2">
                            <div>{{btn1}}</div>
                            <div class="btns">
                                <input type="button" value="▲" @click="btn1 +=1">
                                <br>
                                <input type="button" value="▼" @click="btn1 -= 1">
                            </div>
                            <input type="button" value="x" @click="btn1 = 0; show_one = !show_one">
                        </div>
                    </div>
                    <div class="price1">
                        {{btn1*price}}원
                    </div>
                </div>

                <div class="grid1" v-show="show_two">
                    <div class="clothes">
                        <div>
                            하얀색 반팔
                        </div>
                        <div>
                            -핑크
                        </div>
                    </div>
                    <div class="number">
                        <div class="grid2">
                            <div>{{btn2}}</div>
                            <div class="btns">
                                <input type="button" value="▲" @click="btn2 +=1">
                                <br>
                                <input type="button" value="▼" @click="btn2 -= 1">
                            </div>
                            <input type="button" value="x" @click="btn2 = 0; show_two = !show_two">
                        </div>
                    </div>
                    <div class="price1">
                        {{btn2*price}}원
                    </div>
                </div>

                <div class="grid1" v-show="show_three">
                    <div class="clothes">
                        <div>
                            하얀색 반팔
                        </div>
                        <div>
                            -화이트
                        </div>
                    </div>
                    <div class="number">
                        <div class="grid2">
                            <div>{{btn3}}</div>
                            <div class="btns">
                                <input type="button" value="▲" @click="btn3 +=1">
                                <br>
                                <input type="button" value="▼" @click="btn3 -= 1">
                            </div>
                            <input type="button" value="x" @click="btn3 = 0; show_three = !show_three">
                        </div>
                    </div>
                    <div class="price1">
                        {{btn3*price}}원
                    </div>
                </div>

                <div class="grid1" v-show="show_four">
                    <div class="clothes">
                        <div>
                            하얀색 반팔
                        </div>
                        <div>
                            -그레이
                        </div>
                    </div>
                    <div class="number">
                        <div class="grid2">
                            <div>{{btn4}}</div>
                            <div class="btns">
                                <input type="button" value="▲" @click="btn4 +=1">
                                <br>
                                <input type="button" value="▼" @click="btn4 -= 1">
                            </div>
                            <input type="button" value="x" @click="btn4 = 0; show_four = !show_four">
                        </div>
                    </div>
                    <div class="price1">
                        {{btn4*price}}원
                    </div>
                </div>
                총 상품 금액
                {{btn1*price+btn2*price+btn3*price+btn4*price}}원({{btn1+btn2+btn3+btn4}}개)
               <div>
                   <input type="button" value="CART" class="cart">
                   <input type="button" value="BUY IT NOW" class="buy_btn">
               </div>
           </div>
        </div>
        <div class="box">
            <div ><nav class="menu">
                <a class="this" href="#page1">
                    상품상세설명
                </a>
                <a href="#page2">
                    상품상세설명
                </a>
                <a href="#page3">
                    상품상세설명
                </a>
                <a href="#page4">
                    상품상세설명
                </a>
                <a href="#page5">
                    상품상세설명
                </a>
                <a href="#page6">
                    상품상세설명
                </a></nav>
            </div>
        </div>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            btn1:0,
            btn2:0,
            btn3:0,
            btn4:0,
            price:18900,
            show_one:false,
            show_two:false,
            show_three:false,
            show_four:false,
     }   
  }
}
</script>

<style scoped>
    .Buy {
        margin-left: 5%;
        margin-right: 5%;
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
    .clothes_name {
        font-size: 25px;
        margin-bottom: 20px;
    }
    td {
        width: 100px;
        margin-top: 10px;
    }
    td input {
        border: rgb(155, 155, 155) 1px solid;
        padding: 2px;
        font-size: 13px;
        margin-left: 5px;
        margin-top: 5px;
    }
    .grid1 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        border-bottom: black 1px solid;
        border-top: black 1px solid;
        margin-bottom: 10px;
    }
    .grid2 {
        display: grid;
        grid-template-columns: 4fr 4fr 1fr;
    }
    .btns {
        height: 10px;
        font-size: 6px;
        
    }
    .btns input {
        border: wheat 1px solid;
        background-color: gray;
    }
    .buy_btn {
        color: white;
        background-color: black;
        padding: 10px;
        margin-left: 10px;
    }
    .cart {
        border: black 1px solid;
        padding: 9px;
    }
    .Buy div {
        margin-top: 5px;
    }
    .grid2 > input {
        background-color: gray;
        height: 15px;
        font-size: 10px;
        margin-top: 50%;
    }
    tr td {
        margin-bottom: 10px;
    }
    .menu {
        margin-left: 20%;
        margin-right: 20%;
        display: grid;
        grid-template-columns: repeat(6,1fr);
        text-align: center;
    }
    .this {
        font-weight: bold;
        border-bottom: black solid 2px;
    }
    .box {
        border-bottom: black 1px solid;
        margin-top: 200px;
    }
    .menu a {
        text-decoration: none;
        color: black;
    }
</style>