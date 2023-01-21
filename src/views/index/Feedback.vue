<template>
    <Header></Header>
    <div class="feedback-flex-col page">
    <div class="section"></div>
    <div class="feedback-flex-col section_2 space-y-24">
      <span class="feedback-self-center text">Feedback to get better!</span>
      <div class="feedback-flex-col space-y-44">
        <span class="feedback-self-center text_2">
          We are working hard to improve this website, we look forward to your valuable feedback, please write your feedback 
          below so that we can build better!
        </span>
        <div class="feedback-flex-col section_3">
          <span class="feedback-self-start text_3">写下您的反馈以便本站更好的运行</span>
          <el-form :model="feedbackForm">
            <el-form-item  prop="private">
              <el-input
              v-model="feedbackForm.detail"
              placeholder="请填写"
              type="textarea"
              :rows="15"
              class="section_4"
              resize="none"
              ></el-input>
            </el-form-item>
            <el-form-item style="text-align: center;">
              <el-button type="primary" style="width:40vw;height: 3.3vw;">Submit</el-button>
            </el-form-item>
          </el-form>
          <div class="feedback-flex-col group" style="display:inline-block">     
            If you do not want to reveal your identity, you can choose to send it anonymously
              <el-checkbox
              label="匿名发送"
              v-model="feedbackForm.isAnonymity"
              @click.native.prevent="onRadioChange(true)"
            >
            </el-checkbox>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <Bottom></Bottom>
</template>
<script>
import Header from '../../components/Header.vue'
import { ElForm } from 'element-plus';
import { ElFormItem } from 'element-plus';
import { ElInput } from 'element-plus';
import { ElButton } from 'element-plus';
import { ElCheckbox } from 'element-plus';
import Bottom from "@/components/Bottom.vue"
export default {
    name: "Feedback",
    components:{
        Header,
        ElForm,
        ElFormItem,
        Bottom,
        ElInput,
        ElButton,
        ElCheckbox
    },
    data(){
      return{
        feedbackForm:{
          detail:"",
          isAnonymity:"false"
        },
        
      }
    },
    setup() {
        return {};
    },
    methods:{
      onRadioChange(e) {
      if (this.feedbackForm.isAnonymity == true) {
        this.feedbackForm.isAnonymity = false
        return
      }
      this.feedbackForm.isAnonymity = true
    }
    }
}
</script>
<style scoped>
.feedback-flex-row {
    display: flex;
    flex-direction: row;
  }

  .el-button--form-button,
  .feedback-flex-col {
    display: flex;
    flex-direction: column;
  }

  .el-button--form-button,
  .feedback-justify-start {
    justify-content: flex-start;
  }

  .feedback-justify-end {
    justify-content: flex-end;
  }

  .feedback-justify-center {
    justify-content: center;
  }

  .feedback-justify-between {
    justify-content: space-between;
  }

  .feedback-justify-around {
    justify-content: space-around;
  }

  .feedback-justify-evenly {
    justify-content: space-evenly;
  }

  .feedback-items-start {
    align-items: flex-start;
  }

  .feedback-items-end {
    align-items: flex-end;
  }

  .el-button--form-button,
  .feedback-items-center {
    align-items: center;
  }

  .feedback-items-baseline {
    align-items: baseline;
  }

  .feedback-items-stretch {
    align-items: stretch;
  }

  .feedback-self-start {
    align-self: flex-start;
  }

  .feedback-self-end {
    align-self: flex-end;
  }

  .feedback-self-center {
    align-self: center;
  }

  .feedback-self-baseline {
    align-self: baseline;
  }

  .feedback-self-stretch {
    align-self: stretch;
  }

  .feedback-flex-1 {
    flex: 1 1 0%;
  }

  .feedback-flex-auto {
    flex: 1 1 auto;
  }

  .feedback-grow {
    flex-grow: 1;
  }

  .feedback-grow-0 {
    flex-grow: 0;
  }

  .feedback-shrink {
    flex-shrink: 1;
  }

  .feedback-shrink-0 {
    flex-shrink: 0;
  }

  .feedback-relative {
    position: relative;
  }
  .page {

    background-color: #f2f3fb;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .section {
    background-color: #ffffff;
    height: 3.3vw;
  }
  .section_2 {
    padding: 1vw 15.25vw 11.6875vw;
    background-image: linear-gradient(0deg, #f6f6f9 47.9%, #ffffff 100%);
  }
  .space-y-24 > *:not(:first-child) {
    margin-top: 1.5vw;
  }
  .text {
    color: #242246;
    font-size: 1.625vw;
    font-family: SourceHanSansCN;
    font-weight: 700;
    line-height: 1.7188vw;
  }
  .space-y-44 > *:not(:first-child) {
    margin-top: 2.75vw;
  }
  .text_2 {
    color: #242246;
    font-size: 0.875vw;
    font-family: Montserrat;
    line-height: 1.75vw;
    text-align: center;
    width: 39.8125vw;
  }
  .section_3 {
    padding: 1.25vw 1.8125vw 0;
    background-image: linear-gradient(270deg, #f8f8fa 0%, #ffffff 56.4%);
    border-radius: 0.3125vw;
    box-shadow: 0px 0.5625vw 0.9375vw #bac0cf59;
  }
  .text_3 {
    color: #000000;
    font-size: 1.125vw;
    font-family: Kalam;
    line-height: 1.0313vw;
  }
  .section_4 {
    margin-top: 1.5vw;
    background-color: #ffffff;
  }
  .group {
    padding: 0.1vw 5.75vw 1.2vw 12.25vw;
  }
  
  .el-button--form-button,
  .button {
    margin-right: 0.5vw;
    padding: 1.75vw 0 1.375vw;
    background-image: linear-gradient(90deg, #6cb7ff 4.9%, #7985ff 96.7%);
    border-radius: 0.3125vw;
  }
  .text_4 {
    color: #ffffff;
    font-size: 1vw;
    font-family: SourceHanSansCN;
    font-weight: 700;
    line-height: 0.7813vw;
    text-transform: uppercase;
  }
  .group_2 {
    padding: 0.625vw 0 0.375vw;
  }
  .image-wrapper {
    line-height: 1.75vw;
    text-align: center;
  }
  .image {
    width: 27.0938vw;
    height: 3.6875vw;
  }
  .group_3 {
    border-radius: 0.3125vw;
    height: 3.2813vw;
  }
  .pos {
    position: absolute;
    left: 0;
    right: 1.7188vw;
    top: 0;
  }
</style>