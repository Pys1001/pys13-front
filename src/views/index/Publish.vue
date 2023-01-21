<template>
    <Header></Header>
    <div class="top-widet">Post your programming experience</div>
    <div class="editor-widet">
        <el-form :model="publishForm" >
            <el-form-item >
                <el-input v-model="publishForm.title" placeholder="标题" />
            </el-form-item>
            <el-form-item>
                <el-select style="width: 34.5vw;" v-model="publishForm.type" placeholder="类别">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-date-picker style="width: 34.5vw;left: 1vw;"  placeholder="日期" v-model="publishForm.date" />
            </el-form-item>
            <el-form-item>
                <TEditor ref="editor" v-model="publishForm.desc" />
            </el-form-item>
            <el-form-item style="text-align: right;">
                <el-button style="width: 10vw;" @click="submit()">发布</el-button>
            </el-form-item>
        </el-form>
    </div>    
    <div class="bottom-widet">

    </div>
    <Bottom></Bottom>
</template>
<script>
import Header from '@/components/Header.vue'
import Bottom from "@/components/Bottom.vue"
import TEditor from '@/components/Tinymce.vue'
import { ElInput } from 'element-plus';
import { ElForm } from 'element-plus';
import { ElFormItem } from 'element-plus';
import { ElDatePicker } from 'element-plus';
import { ElSelect } from 'element-plus';
import { ElOption } from 'element-plus';
import { ElButton } from 'element-plus';
import axios from 'axios';
export default {
    name: "Publish",
    components:{
        Header,
        Bottom,
        TEditor,
        ElInput,
        ElForm,
        ElFormItem,
        ElDatePicker,
        ElSelect,
        ElOption,
        ElButton
    },
    setup() {
        return {};
    },
    data () {
        return {
            publishForm:{
                title:"",
                date:"",
                desc:"",
                type:""
            },
            options: [{
            value: '前端',
            label: '前端'
            }, {
            value: '后端',
            label: '后端'
            }, {
            value: '小程序开发',
            label: '小程序开发'
            }, {
            value: 'uni-app',
            label: 'uni-app'
            }, {
            value: '大数据分析',
            label: '大数据分析'
            }],
        }
    },
    methods: {
        submit(){
            this.publishForm.desc = tinyMCE.activeEditor.getContent()
            console.log(this.publishForm)
            axios.post("/blogpost/publish",this.publishForm).then((respp)=>{
                console.log(respp.data)
            })
        }
    }
}
</script>
<style scoped>
    .top-widet{
        width: 100%;
        margin-top: 3.3vw;
        font-weight: 700;
        height: auto;
        text-align: center;
        font-size: 1.625vw;
    }
    .editor-widet{
        margin-top: 2vw;
        height: auto;
        margin-right: auto;
        margin-left: auto;
        width: 70vw;
    }
    .bottom-widet{
        height: 20px;
    }
</style>