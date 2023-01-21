<template>
    <RouterView/>
    <div ref="rightContent" @mousewheel="scrool" class="body1">
        
        <div class="top-widet">
            <p><a @click="toAbout()">关于PYS THIRTEEN</a></p>
        </div>
        <div class="header-widet">
            <div class="plot"></div>
            <el-button class="header-button" @click="changeTab(index)" v-for="(tab,index) in tabs">{{tab.name}}</el-button>
            <RouterLink to="/login">登录/注册</RouterLink>
        </div>

        <KeepAlive>
            <component class="com-widet" :is="currentTabComponent">
            </component>
        </KeepAlive>
        
        
    </div>
   
</template>

<script>
import { Components } from 'ant-design-vue/lib/date-picker/generatePicker';
import { ElButton } from 'element-plus';
import About from '../views/index/About.vue'
import News from '../views/index/News.vue'
import Publish from '../views/index/Publish.vue'
import Feedback from '../views/index/Feedback.vue'
    export default {
    name: "home",
    components: {
        ElButton,
        About,
        Components
    },
    data() {
        return {
            
            isshow1: true, 
            isshow2: false, 
            currentTab: "About",
            tabs: [
                {name:"NEWS",url:News}, 
                {name:"发布",url:Publish}, 
                {name:"反馈",url:Feedback}, 
            ],
        };
    },
    setup() {
        return {
        };
    },
    mounted() {
        this.$refs.rightContent.addEventListener('scroll', this.scrool);
    },
    methods: {
        changeTab(e){
            this.currentTab=this.tabs[e].url
        },
        toAbout(){
            this.currentTab=About
        },
        scrool(){
            let scrolled = this.$refs.rightContent.scrollTop;
            // console.log(scrolled)
            if(scrolled>50){
                
            }else{
            }
        } ,
    },

    computed: {
        currentTabComponent() {
            return this.currentTab;
        }
    },
}
</script>

<style scoped>
    .body1{
        background-color: rgb(30, 30, 30);
        background-size: 100% 100%;
        width: 100%;
        height: 100%;
        margin: 0px;
        position:fixed;
        overflow-y:scroll;
        overflow-x:hidden;
        z-index: 999;
    }
    .top-widet{
        width: 100%;
        height: 50px;
        background-color: white;
    }

    .top-widet p{
        margin: auto;
        width:100%;
        text-align: center;
    }
    .top-widet p a{
        font-size: 14px;
        font-weight: 700;
        line-height: 50px;
        color: black;
    }
    .home{
        position: absolute;
        top: 10px;
        right: 0px;
        left: 0px;
        margin: auto;
        width: 60px;
        height: 66px;
        background-image: url(../assets/homeicon.png);
        background-size: cover;
    }
    .home p{
        font-weight: 600;
        font-size: 10px;
        color: white;
        width: 60px;
        line-height: 66px;
        text-align: center;
    }
    .header-widet{
        position:sticky;
        top: -0.1px;
        display: flex;
        /* justify-content: flex-start; */
        z-index: 9999;
       border-color: black;
        height: 70px;
        width: 100%;
        background-color: black;
    }

    .header-button{
        color: white;
        background-color: rgb(30, 30, 30,0.00);
        width: 100px;
        height: 100%;
        border-radius: 0%;
        border-color: rgb(30, 30, 30,0.00);
    }
    .header-button:focus,
    .header-button:hover {
        color: #FFF;
        background-color: rgb(201,5,38);
        border-color: rgb(201,5,38);
    }
    .plot{
        width: 50px;
        height: 100%;
    }
    .com-widet{

    }
</style>