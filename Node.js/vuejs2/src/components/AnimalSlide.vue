<script setup>
defineProps({ //넘겨받은값 
    msg:{ type:String, required:true },
    info:{type:Array,required:true}
})
//Props type 종류: String, Number,Array,Object,Boolean,Date,Function
</script>
<template>
    <div class="slide">
        <h2>{{ msg }}</h2>
        <div class="slide_box">
            <div class="card" v-for="a in info" :key="a">
                <img src="">
                <p>{{a}}</p>
                <p>수컷</p>
            </div>
        </div>
    </div>
</template>
<style>

</style>