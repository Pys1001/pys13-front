<template>
    <div class="top-widet">
        <p><RouterLink to="/about">关于PYS THIRTEEN</RouterLink></p>
    </div>
    <div class="header-widet">
        <div class="plot"></div>
        <div class="header-logo"><img src="../assets/logo.png" /></div>
        <RouterLink class="header-button" :to="tab.url" v-for="(tab,index) in tabs">{{tab.name}}</RouterLink>
        <RouterLink to="/login">登录/注册</RouterLink>
    </div>
  
   
</template>

<script>
    export default {
    name: "home",
    components: {
    },
    data() {
        return {
            
            isshow1: true, 
            isshow2: false, 
            tabs: [
                {name:"NEWS",url:"/news"}, 
                {name:"发布",url:"/publish"}, 
                {name:"反馈",url:"/feedback"}, 
            ],
        };
    },
    setup() {
        return {
        };
    },

    methods: {
  
    },
}
</script>

<style>

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
        width: 130px;
        height: 100%;
        text-align: center;
        line-height: 70px;
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
    .header-logo{
        margin-right: 10px;
        line-height: 70px;
        height: 50px;
        width: 50px;
    }
    .header-logo img{
        height: 100%;
        width: 100%;
    }
</style>