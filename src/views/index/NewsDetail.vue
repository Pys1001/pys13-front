<template>
    <Headerr></Headerr>
    <div class="top-widet">
    
    news.title</div>
    <Bottom></Bottom>
</template>
<script>
import Headerr from '../../components/Header.vue'
import { useRouter } from 'vue-router';
import Bottom from "@/components/Bottom.vue"
export default{
    name: "NewsDetail",
    components:{
        Headerr,
        Bottom
    },
    setup(){
        return{
        }
    },
    mounted:function(){
        this.createcode();//需要触发的函数
    },
    methods:{
        createcode(){
            let id = this.$route.query.id
            console.log(id)
        }
        
    }
    
}
//打印传递过来的数据
// console.log(route.query);
</script>
<style lang="scss" scoped>
.top-widet{
    width: 100%;
    height: 100%;
    background-color: aqua;
}
</style>