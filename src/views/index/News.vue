<template>
    <Headerr></Headerr>
    <div class="news-item-flex-col page space-y-29">
      
    <div class="news-item-flex-row space-x-30">
      <!-- *****************last news************** -->
      <div class="news-item-flex-col section space-y-26">
        <div class="news-item-flex-row news-item-justify-between group">
          <span class="font_1 text">Last news</span>
          <img
            class="image_2"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/16703221340010655936.png"
          />
        </div>
          <div v-for="(news,index) in news_data" class="news-item-flex-col group_4 space-y-15">
            <RouterLink class="font_1" :to="{path:'/newsdetail',query: {id: news.index}}">{{news.title}}</RouterLink>   
            <RouterLink class="font_3 text_4" :to="{path:'/newsdetail',query: {id: news.index}}">{{news.date}}</RouterLink>  
            <div class="divider view_3"></div>
          </div>
        <div class="news-item-flex-col space-y-26">
          <div class="news-item-flex-col">
            <span class="font_8 text_20 ">SHOW MORE</span>
          </div>
        </div>
      </div>
<!-- ************************************************* -->
      <div class="news-item-flex-col group_2 space-y-29">
        <div class="news-item-flex-row space-x-30">
          <div class="news-item-flex-col section_2">
            <div class="news-item-flex-col group_3 space-y-11">
              <img
                class="image_3 image_4"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/16703194883905269360.png"
              />
              <div class="news-item-flex-col news-item-justify-start text-wrapper_2">
                <span class="font_2 text_2">MUSIC</span>
              </div>
            </div>
            <span class="text_3">Peace On Earth A Wonderful Wish But No Way</span>
            <div class="news-item-flex-row news-item-justify-between group_7">
              <div class="news-item-flex-col news-item-justify-start news-item-items-center text-wrapper_3 view">
                <span class="font_5">24 Jun, 5:40 PM</span>
              </div>
              <div class="news-item-flex-row space-x-30">
                <div class="news-item-flex-row group_9">
                  <img
                    class="image_7"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/16703194908345498749.png"
                  />
                  <span class="font_6 text_7">275</span>
                </div>
                <div class="news-item-flex-row">
                  <img
                    class="image_6"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/16703221340067822285.png"
                  />
                  <span class="font_6 text_8">12</span>
                </div>
              </div>
              <div class="news-item-flex-col news-item-justify-start news-item-items-center text-wrapper_3 view_2">
                <span class="font_5 text_9">PYS</span>
              </div>
            </div>
          </div>


          <div class="news-item-flex-col section_3">
            <div class="news-item-flex-row section_4 space-x-137">
              <div class="news-item-flex-col news-item-justify-start news-item-items-center text-wrapper">
                <span class="font_2">NEWS</span>
              </div>
              <img
                class="image"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/bacf6160d0a02350254a7d989bd50cfa.png"
              />
            </div>
            <div class="news-item-flex-col group_5 space-y-28">
              <span class="font_4 text_5">5 Ways To Make Your Bbq A Memorable Family Event</span>
              <div class="news-item-flex-row group_8 space-x-68">
                <span class="font_3 text_10">24 Jun, 5:40 PM</span>
                <div class="news-item-flex-row group_10">
                  <img
                    class="image_6"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/16703194883997784963.png"
                  />
                  <span class="font_7 text_11">12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="news-item-flex-row space-x-30">
          <div class="news-item-flex-col section_6">
            <div class="news-item-flex-col section_7">
              <div class="news-item-flex-col news-item-justify-start news-item-items-center text-wrapper_4">
                <span class="font_2">STREETS</span>
              </div>
              <img
                class="image_3 image_8"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/16703194883905269360.png"
              />
            </div>
            <div class="news-item-flex-col group_13 space-y-16">
              <span class="font_1 text_16">Vampires The Romantic Ideology Behind Them</span>
              <div class="news-item-flex-row news-item-justify-between group_8">
                <span class="font_3 text_10">24 Jun, 5:40 PM</span>
                <div class="news-item-flex-row">
                  <img
                    class="image_6"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/16703194883997784963.png"
                  />
                  <span class="font_7 text_11">12</span>
                </div>
              </div>
            </div>
          </div>
          <div class="news-item-flex-col section_8 space-y-54">
            <div class="news-item-flex-row news-item-justify-between group_11">
              <div class="news-item-flex-col news-item-justify-start news-item-items-center text-wrapper_5">
                <span class="font_2 text_14">WEATHER</span>
              </div>
              <img
                class="image"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/a37b05473e8701b0c0b0e3bf79b9f6a3.png"
              />
            </div>
            <div class="news-item-flex-col space-y-16">
              <span class="text_17">Live Poker How To Win Tournament Games</span>
              <div class="news-item-flex-row news-item-justify-between group_15">
                <span class="font_5 text_21">24 Jun, 5:40 PM</span>
                <div class="news-item-flex-row">
                  <img
                    class="image_6"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/16703194907968879805.png"
                  />
                  <span class="font_6 text_22">12</span>
                </div>
              </div>
            </div>
          </div>
          <div class="news-item-flex-col section_9">
            <div class="news-item-flex-col news-item-justify-start news-item-items-center text-wrapper_6">
              <span class="font_2">NUMBERS</span>
            </div>
            <div class="news-item-flex-col group_12 space-y-29">
              <span class="text_15">1,256</span>
              <span class="font_1 text_19">The Basics Of Western Astrology Explained</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="news-item-flex-row space-x-30">
      <div class="news-item-flex-col section_10">
        <div class="news-item-flex-row news-item-justify-between group_16">
          <span class="font_4 text_24">What people say</span>
          <div class="news-item-flex-col news-item-justify-start news-item-items-center text-wrapper_7">
            <span class="font_8">CREATE THEME</span>
          </div>
        </div>
        <div class="news-item-flex-col group_17 space-y-26">
          <div class="news-item-flex-row group_18">
            <div class="news-item-flex-col group_19 space-y-28">
              <div class="news-item-flex-row group_20">
                <img
                  class="image_9"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/16703221340084069935.png"
                />
                <span class="font_3 text_25">24 Jun, 5:40 PM</span>
                <span class="font_9 text_28">Company Logo Design?</span>
              </div>
              <div class="news-item-flex-row group_20">
                <img
                  class="image_9"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/16703221351787573970.png"
                />
                <span class="font_3 text_31">9 Jun, 3:40 PM</span>
                <span class="font_9 text_34">Space The Final Frontier</span>
              </div>
            </div>
            <div class="divider view_4"></div>
            <span class="font_8 text_42 sm_v">SHOW MORE</span>
          </div>
        </div>
      </div>
      <div class="news-item-flex-col news-item-items-center section_11 space-y-270">
        <div class="news-item-flex-col news-item-justify-start news-item-items-center text-wrapper_8">
          <span class="font_2 text_23">advertising</span>
        </div>
        <div class="news-item-flex-col news-item-justify-start news-item-items-center text-wrapper_9">
          <span class="font_2">VISIT SITE</span>
        </div>
      </div>
    </div>
  </div>
  <Bottom></Bottom>
</template>
<script>
import { useRouter } from 'vue-router';
import Headerr from "../../components/Header.vue"
import Bottom from "@/components/Bottom.vue"
export default {
    name: "News",
    components:{
        Headerr,
        Bottom
    },
    data(){
      return{
        news_data:[
          {title:"5 Ways to make your Bbq a memorable family event",
           date:"Yesterday, 8:04 PM",
           index:100001
          },
          {title:"cncmcnm cncmcncm cncmccmcnc ncncncncn cncnc",
           date:"Yesterday, 7:04 PM",
           index:100002
          },
          {title:"我师娘别把我十年爸爸我是你爸爸把",
           date:"Yesterday, 9:04 PM",
           index:100003
          },
          {title:"是噶比水水水水水水水水水水水水水水水水",
           date:"Yesterday, 10:04 PM",
           index:100004
          },
        ]
      };
    },
    mounted:function(){
     
    },
    methods:{
      setStore(){
        
      }
    },
    setup() {
      
        return {};
    },
}
</script>
<style scoped>
 .page {
    padding: 30px 149px 20px;
    background-color: #fafafa;
    width: 100%;
    height: 100%;
  }
  .sm_v{
    bottom: 0px;
  }
  .space-x-30 > *:not(:first-child) {
    margin-left: 30px;
  }
  .section {
    padding-bottom: 26px;
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 0px 2px 5px #0000000d;
    width: 263px;
    height: 601px;
    position: relative;
  }
  .group {
    padding: 25px 0 24px;
    border-bottom: solid 2px #f7f7f7;
  }
  .font_1 {
    font-size: 14px;
    font-family: Roboto;
    line-height: 20px;
    color: #666666;
  }
  .text {
    margin-left: 31px;
    line-height: 10px;
  }
  .image_2 {
    margin: 4px 22px 2px 0;
    width: 18px;
    height: 4px;
  }
  .group_4 {
    align-self: center;
    width: 177px;
  }
  .font_3 {
    font-size: 12px;
    font-family: Roboto;
    line-height: 10.5px;
    color: #b3b3b3;
  }
  .text_4 {
    align-self: flex-start;
    line-height: 11.5px;
  }
  .group_6 {
    height: 242px;
    position: relative;
  }
  .section_5 {
    padding: 26px 30px;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/16703221356425507366.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 263px;
    position: absolute;
    left: 0;
    right: 0;
    top: 2px;
  }
  .space-y-15 > *:not(:first-child) {
    margin-top: 15px;
  }
  .text_6 {
    color: #f7f7f7;
    width: 175px;
  }
  .font_5 {
    font-size: 12px;
    font-family: Roboto;
    line-height: 10.5px;
    color: #ffffff;
  }
  .text_12 {
    width: 207px;
    position: absolute;
    top: 148px;
    left: 50%;
    transform: translateX(-50%);
  }
  .text_13 {
    position: absolute;
    left: 30.5px;
    bottom: 28px;
  }
  .image_5 {
    width: 263px;
    height: 242px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
  }
  .group_14 {
    padding: 0 30px;
  }
  .text_18 {
    margin-left: 30px;
    margin-top: 15px;
    align-self: flex-start;
  }
  .divider {
    background-color: #f5f5f5;
    height: 2px;
  }
  .view_3 {
    margin-top: 27px;
  }
  .font_8 {
    font-size: 10px;
    font-family: Roboto;
    letter-spacing: 1.5px;
    line-height: 7.5px;
    font-weight: 900;
    color: #b3b3b3;
  }
  .text_20 {
    align-self: center;
  }
  .group_2 {
    flex: 1 1 auto;
  }
  .section_2 {
    padding-top: 43px;
    flex: 1 1 auto;
    border-radius: 6px;
    filter: drop-shadow(0px 2px 2.5px #0000000d);
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/16703221339993615932.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 331px;
  }
  .group_3 {
    padding: 0 41px;
  }
  .space-y-11 > *:not(:first-child) {
    margin-top: 11px;
  }
  .image_3 {
    width: 13px;
    height: 11px;
  }
  .image_4 {
    align-self: flex-end;
  }
  .text-wrapper_2 {
    padding: 7px 0 6px;
    align-self: center;
    background-color: #ea1e64;
    border-radius: 4px;
  }
  .font_2 {
    font-size: 10px;
    font-family: Roboto;
    letter-spacing: 1.5px;
    line-height: 7.5px;
    font-weight: 900;
    color: #ffffff;
  }
  .text_2 {
    margin-left: 4px;
    margin-right: 2px;
    color: #f6f6f6;
  }
  .text_3 {
    margin-top: 39px;
    align-self: center;
    color: #ffffff;
    font-size: 24px;
    font-family: Roboto;
    line-height: 40px;
    text-align: center;
    width: 313px;
  }
  .group_7 {
    margin-top: 62px;
    padding: 22px 4px 18px 6px;
    border-top: solid 2px #ffffff4d;
  }
  .text-wrapper_3 {
    width: 136px;
  }
  .view {
    margin: 6px 0 3px;
  }
  .group_9 {
    margin: 2px 0;
  }
  .image_7 {
    flex-shrink: 0;
    width: 22px;
    height: 16px;
  }
  .font_6 {
    font-size: 12px;
    font-family: Roboto;
    line-height: 7.5px;
    font-weight: 700;
    color: #ffffff;
  }
  .text_7 {
    margin: 4px 0 4px 14px;
    line-height: 9px;
  }
  .image_6 {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  }
  .text_8 {
    margin: 6px 0 6px 16px;
    line-height: 8.5px;
  }
  .view_2 {
    margin: 6px 0 5px;
  }
  .text_9 {
    line-height: 9px;
  }
  .section_3 {
    flex-shrink: 0;
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 0px 2px 5px #0000000d;
    height: 331px;
  }
  .section_4 {
    padding: 20px 20px 95px;
    border-radius: 6px 6px 0px 0px;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/16703221340040932435.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .space-x-137 > *:not(:first-child) {
    margin-left: 137px;
  }
  .text-wrapper {
    padding: 7px 0 6px;
    background-color: #0000001a;
    border-radius: 4px;
    width: 50px;
    height: 21px;
  }
  .image {
    border-radius: 100px;
    width: 36px;
    height: 36px;
  }
  .group_5 {
    padding-top: 38px;
  }
  .font_4 {
    font-size: 16px;
    font-family: Roboto;
    color: #666666;
  }
  .text_5 {
    align-self: center;
    line-height: 25px;
    width: 210px;
  }
  .group_8 {
    padding: 22px 29px 18px 30px;
    border-top: solid 2px #f7f7f7;
  }
  .space-x-68 > *:not(:first-child) {
    margin-left: 68px;
  }
  .text_10 {
    margin: 4px 0 5px;
  }
  .group_10 {
    flex-shrink: 0;
  }
  .font_7 {
    font-size: 12px;
    font-family: Roboto;
    line-height: 7.5px;
    font-weight: 700;
    color: #b3b3b3;
  }
  .text_11 {
    margin: 6px 0 6px 16px;
    line-height: 8.5px;
  }
  .section_6 {
    flex: 1 1 263px;
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 0px 2px 5px #0000000d;
    height: 241px;
    position: relative;
  }
  .section_7 {
    padding: 20px 20px 37px;
    border-radius: 5px 5px 0px 0px;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/16703221340032810982.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 81px;
  }
  .text-wrapper_4 {
    padding: 7px 0 6px;
    align-self: flex-start;
    background-color: #0000001a;
    border-radius: 4px;
    width: 69px;
  }
  .image_8 {
    margin-right: 11px;
    margin-top: -8px;
    flex-shrink: 0;
    align-self: flex-end;
  }
  .group_13 {
    padding-top: 30px;
  }
  .space-y-16 > *:not(:first-child) {
    margin-top: 16px;
  }
  .text_16 {
    align-self: center;
    line-height: 25px;
    width: 157px;
  }
  .section_8 {
    padding: 20px 0;
    flex: 1 1 263px;
    border-radius: 5px 5px 6px 6px;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/16703221339957895721.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 241px;
  }
  .space-y-54 > *:not(:first-child) {
    margin-top: 54px;
  }
  .group_11 {
    padding: 0 20px;
  }
  .text-wrapper_5 {
    padding: 7px 0 6px;
    background-color: #5553ce;
    border-radius: 4px;
    width: 72px;
    height: 21px;
  }
  .text_14 {
    line-height: 7px;
  }
  .text_17 {
    align-self: center;
    color: #ffffff;
    font-size: 14px;
    font-family: Roboto;
    line-height: 25px;
    width: 151px;
  }
  .group_15 {
    padding: 22px 29px 0 30px;
    border-top: solid 2px #ffffff4d;
  }
  .text_21 {
    margin: 4px 0 3px;
  }
  .text_22 {
    margin: 6px 0 6px 16px;
    line-height: 8.5px;
  }
  .section_9 {
    padding: 30px 53px 0 61px;
    flex: 1 1 263px;
    background-color: #1875f0;
    border-radius: 6px;
    box-shadow: 0px 2px 5px #0000000d;
    height: 241px;
  }
  .text-wrapper_6 {
    padding: 7px 0 6px;
    align-self: center;
    background-color: #0000001a;
    border-radius: 4px;
    width: 74px;
  }
  .group_12 {
    padding: 35px 0 44px;
  }
  .space-y-29 > *:not(:first-child) {
    margin-top: 29px;
  }
  .text_15 {
    align-self: center;
    color: #ffffff;
    font-size: 48px;
    font-family: Roboto;
    line-height: 42.5px;
  }
  .text_19 {
    color: #ffffff;
    text-align: center;
  }
  .section_10 {
    flex: 1 1 auto;
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 0px 2px 5px #0000000d;
    height: 421px;
    position: relative;
  }
  .group_16 {
    padding: 25px 20px 24px 30px;
    border-bottom: solid 2px #f5f5f5;
  }
  .text_24 {
    align-self: center;
    line-height: 15.5px;
  }
  .text-wrapper_7 {
    padding: 14px 0;
    background-color: #ffffff;
    border-radius: 4px;
    width: 134px;
    height: 40px;
    border: solid 2px #f5f5f5;
  }
  .group_17 {
    padding: 29px 0 26px;
  }
  .space-y-26 > *:not(:first-child) {
    margin-top: 26px;
  }
  .group_18 {
    padding-left: 30px;
    padding-right: 9px;
  }
  .group_19 {
    margin: 6px 0 2px;
    width: 209.5px;
  }
  .space-y-28 > *:not(:first-child) {
    margin-top: 28px;
  }
  .group_20 {
    position: relative;
  }
  .image_9 {
    border-radius: 100px;
    width: 48px;
    height: 48px;
  }
  .text_25 {
    margin-left: 20px;
    margin-top: 6px;
  }
  .font_9 {
    font-size: 12px;
    font-family: Roboto;
    line-height: 12.5px;
    color: #666666;
  }
  .text_28 {
    font-size: 13px;
    position: absolute;
    right: 3px;
    bottom: 4px;
  }
  .text_31 {
    margin-left: 20px;
    margin-top: 4px;
  }
  .text_34 {
    font-size: 13px;
    position: absolute;
    right: 0;
    bottom: 2px;
  }
  .group_21 {
    margin: 6px 0 3px 54px;
    flex: 1 1 auto;
  }
  .space-x-32 > *:not(:first-child) {
    margin-left: 32px;
  }
  .group_22 {
    width: 212px;
  }
  .text_26 {
    margin-left: 20px;
    margin-top: 6px;
  }
  .text_29 {
    font-size: 13px;
    position: absolute;
    right: 21.5px;
    bottom: 4px;
  }
  .text_32 {
    margin-left: 20px;
    margin-top: 4px;
  }
  .text_35 {
    color: #666666;
    font-size: 13px;
    line-height: 10px;
    position: absolute;
    right: 0;
    bottom: 4.5px;
  }
  .group_23 {
    width: 229.5px;
  }
  .space-y-27 > *:not(:first-child) {
    margin-top: 27px;
  }
  .text_27 {
    margin-left: 20px;
    margin-top: 6px;
  }
  .text_30 {
    font-size: 13px;
    position: absolute;
    right: 0;
    bottom: 4px;
  }
  .font_10 {
    font-size: 12px;
    font-family: Roboto;
    line-height: 10.5px;
    color: #b8b8b8;
  }
  .text_33 {
    margin-left: 20px;
    margin-top: 4px;
  }
  .font_11 {
    font-size: 12px;
    font-family: Roboto;
    line-height: 12.5px;
    color: #7a7a7a;
  }
  .text_36 {
    font-size: 13px;
    position: absolute;
    right: 49.5px;
    bottom: 2px;
  }
  .section_12 {
    margin-left: 30px;
    background-color: #f0f0f0;
    border-radius: 100px;
    width: 4px;
    height: 132px;
  }
  .group_24 {
    width: 214px;
    position: relative;
  }
  .text_37 {
    margin-left: 21px;
    margin-top: 4px;
    color: #c3c3c3;
  }
  .group_25 {
    margin-left: 43px;
    padding: 0 6px;
    width: 214px;
    position: relative;
  }
  .text_38 {
    margin-left: 20px;
    margin-top: 4px;
    color: #cacaca;
    line-height: 11px;
  }
  .text_40 {
    font-size: 13px;
    position: absolute;
    right: 5.5px;
    bottom: 2px;
  }
  .group_26 {
    margin-left: 33px;
    padding: 0 3px;
    width: 214px;
    position: relative;
  }
  .text_39 {
    margin-left: 20px;
    margin-top: 4px;
    line-height: 11px;
  }
  .text_41 {
    font-size: 13px;
    position: absolute;
    right: 4.5px;
    bottom: 2px;
  }
  .view_4 {
    margin-top: 34px;
  }
  .text_42 {
    margin-top: 25px;
    align-self: center;
  }
  .section_11 {
    padding: 30px 0 60px;
    flex-shrink: 0;
    border-radius: 6px;
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/637c70545a7e3f0310fbc5ad/638f0d545281490011c960d3/16703221339901006826.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 263px;
    height: 421px;
  }
  .space-y-270 > *:not(:first-child) {
    margin-top: 270px;
  }
  .text-wrapper_8 {
    padding: 7px 0 6px;
    background-color: #f13a30;
    border-radius: 4px;
    width: 95px;
  }
  .text_23 {
    text-transform: uppercase;
  }
  .text-wrapper_9 {
    padding: 17px 0 16px;
    background-color: #0000004d;
    border-radius: 32px;
    width: 107px;
  }
  .news-item-flex-row {
    display: flex;
    flex-direction: row;
  }

  .news-item-flex-col {
    display: flex;
    flex-direction: column;
  }

  .news-item-justify-start {
    justify-content: flex-start;
  }

  .news-item-justify-end {
    justify-content: flex-end;
  }

  .news-item-justify-center {
    justify-content: center;
  }

  .news-item-justify-between {
    justify-content: space-between;
  }

  .news-item-justify-around {
    justify-content: space-around;
  }

  .news-item-justify-evenly {
    justify-content: space-evenly;
  }

  .news-item-items-start {
    align-items: flex-start;
  }

  .news-item-items-end {
    align-items: flex-end;
  }

  .news-item-items-center {
    align-items: center;
  }

  .news-item-items-baseline {
    align-items: baseline;
  }

  .news-item-items-stretch {
    align-items: stretch;
  }

  .news-item-self-start {
    align-self: flex-start;
  }

  .news-item-self-end {
    align-self: flex-end;
  }

  .news-item-self-center {
    align-self: center;
  }

  .news-item-self-baseline {
    align-self: baseline;
  }

  .news-item-self-stretch {
    align-self: stretch;
  }

  .news-item-flex-1 {
    flex: 1 1 0%;
  }

  .news-item-flex-auto {
    flex: 1 1 auto;
  }

  .news-item-grow {
    flex-grow: 1;
  }

  .news-item-grow-0 {
    flex-grow: 0;
  }

  .news-item-shrink {
    flex-shrink: 1;
  }

  .news-item-shrink-0 {
    flex-shrink: 0;
  }

  .news-item-relative {
    position: relative;
  }
</style>