<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';
const counterStore = useCounterStore()
const { count, isShow } = storeToRefs(counterStore)
</script>

<template>
    <div class="common-layout">
        <el-container>
            <h1 class="something">锋锋与澄澄的那些事...</h1>
            <el-header>
                <el-row :gutter="12" class="demo-radius">

                    <el-col :span="20" :xs="{ span: 12 }">
                        <el-text class="mx-1" type="info" size="large"><strong>计分器：</strong>{{ counterStore.totalPoints
                        }}</el-text>
                        <hr>
                        <el-text class="mx-1" type="info" size="large" v-show="isShow"><strong>问题：</strong>{{
                            counterStore.questions[count] }}</el-text>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <div>
                    <el-row :gutter="12" class="demo-radius">
                        <el-col :span="20" :xs="{ span: 12 }">
                            <div class="radius" :style="{ borderRadius: 'base' }" v-for="(item) in counterStore.arr_show"
                                @click="counterStore.AddPoints(item.id)" :key="item.id">
                                {{ item.text }}
                            </div>
                            <hr v-show="isShow">
                            <el-text class="mx-1" type="info" size="large"><strong>锋锋评语：</strong>{{ counterStore.comment
                            }}</el-text>
                        </el-col>
                    </el-row>

                </div>
            </el-main>
        </el-container>
    </div>
</template>

<style scoped>
.something {
    margin: auto;
}

.radius {
    cursor: pointer;
    text-align: center;
}

.container {
    text-align: center;
}

.demo-radius {
    display: flex;
    justify-content: center;
    align-items: center;

}

.radius {
    background-color: #EBEDF0;
    color: #303133;
}

.radius:hover {
    background-color: #FAFCFF;
}

.demo-radius .title {
    color: var(--el-text-color-regular);
    font-size: 18px;
    margin: 10px 0;
}

.demo-radius .value {
    color: var(--el-text-color-primary);
    font-size: 16px;
    margin: 10px 0;
}

.demo-radius .radius {
    height: 40px;
    width: 100%;
    border: 1px solid var(--el-border-color);
    border-radius: 20px;
    margin-top: 20px;
}
</style>