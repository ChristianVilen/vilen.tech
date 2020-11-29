<template>
    <el-carousel :interval="5000" type="card" arrow="always">
        <el-carousel-item v-for="(personalities, index) in personality" :key="index">
            <h4>{{personalities.title}}</h4>
            <p v-for="(traits, index) in personalities.traits" :key="index">{{traits}}</p>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
import personality from "../../data/personality";
export default {
    name: "TabContainer",
    data() {
        return {
            personality
        }
    }
}
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css");

p {
    text-align: center;
    font-size: 18px;
    line-height: 10px;
}

.el-carousel__item h4 {
    font-size: 30px;
    opacity: 0.75;
    line-height: 3px;
    margin-top: 33px;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #FFFF7E;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #0071b3;
    color: white;
}

</style>