<template>
     <Header></Header>
    <div class="box-about">
        <div class="about-info">
            <h1>PYS THIRTEEN COMMUNITY</h1>
            <h3>一个XJU20级趴菜发布的社区</h3>
            <h2>想法从何而来</h2>
            <h6>
                建站的想法源于这一学期无法返校，如果长时间不接触开发，可能会忘掉一些学过的本领。在家自学uni-app发现和微信小程序开发雷同（之前就自学了微信小程序开发），于是又想着多学一些前端知识，在这干练还不如用于实践，于是PYS THIRTEEN就诞生了<br/>
                PYS在一系列机缘巧合下成为了我的笔名 3是我的Luck Number 13是我的生日
            </h6>
            <h2>它如何工作</h2>
            <h6>
                最初的目的是用来当移动端的后台管理系统<br/>
                但是不能浪费，我会用这个域名来建一个社区，我会一直更新维护这个项目，也欢迎有想法的朋友来共同建设！
            </h6>
            <h4>PYS13搭建使用技术</h4>
            <h6>
                前端使用VUE3框架结合Element-Plus和Ant Design进行开发<br/>
                后端使用SSM框架即：Spring+SpringMVC+MyBatis<br/>
                服务器选用阿里云轻量应用服务器<br/>
            </h6>
            <h4>个人简介</h4>
            <h6>
                新疆大学20级本科生，大二前往中南大学交流学习<br/>
                多看、多学、多碰壁！ 多听有钱人吹牛B！
            </h6>
            <div class="about-padding"/>
        </div>
    </div>
    <Bottom></Bottom>
</template>
<script>
import Header from '../../components/Header.vue'
import Bottom from "@/components/Bottom.vue"
export default {
    name: "About",
    components:{
        Header,
        Bottom
    },
    setup() {
        return {};
    },
}
</script>
<style scoped>
.box-about{
    width: 100%;
    height: auto;
    background-color: white;
}
.about-info{
    width: 78%;
    height: auto;
    margin-left: 11%;
}
.about-info h1{
    text-align: center;
    font-size: 42px;
    font-weight: 900;
    line-height: 200px;
    height: 200px;
}
.about-info h3{
    height: 200px;
    line-height: 150px;
    font-size: 17px;
}
.about-info h2{
    font-size: 45px;
    font-weight: 900;
    margin-bottom: 20px;
}
.about-info h6{
    font-size: 17px;
    margin-bottom: 100px;
}
.about-info h4{
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 20px;
}
.about-padding{
    width: 100%;
    height: 1px;
}
</style>