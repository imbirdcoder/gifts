import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCounterStore = defineStore('counter', () => {
    // 声明数据 state
    // 声明数组
    let questions = ref([
        '我们相识于什么时候',
        '锋锋教过你最长的西班牙语单词是什么？',
        '我们在民宿看完的电影有：',
        '请给出锋锋在健身房最喜欢练的部位排名：',
        '锋锋为什么要气澄澄？',
        '锋锋喝奶茶一般喝几分甜？',
        '不要用翻译器!!!锋锋跟澄澄说过的‘记者’这个词语在西班牙语的正确拼写方式是：',
        '我们第一次去的商场是哪个？',
        '在我们看过的电影里，澄澄觉得锋锋最喜欢哪部？',
        '锋锋觉得澄澄系咩味噶？'
    ])
    let arr_show = ref([
        { id: 1, text: '我和锋锋相识于2022年5月19号', points: 10 },
        { id: 2, text: '锋锋和老子相识于2023年6月5号', points: 0 },
        { id: 3, text: '锋锋啊，我们相识于2023年6月8号', points: 5 },
        { id: 4, text: '呃...母鸡', points: -10 }
    ])
    const arr_1 = ref([
        { id: 1, text: 'Supercalifragitico pialidoso', points: 0 },
        { id: 2, text: 'Supercalifragilistico espialidoso', points: 10 },
        { id: 3, text: 'Supercalidefragilistico espialidoso', points: 0 },
        { id: 4, text: 'Supercalidefragilistico pialidoso', points: 0 },
    ])
    const arr_2 = ref([
        { id: 1, text: '西红柿首富，满江红，盗梦空间，夏洛特烦恼', points: 5 },
        { id: 2, text: '盗梦空间，华尔街之狼，西虹市首富', points: 5 },
        { id: 3, text: '人生路不熟，了不起的盖茨比，那些年我们追过的女孩', points: 3 },
        { id: 4, text: '都不是', points: 10 },
    ])
    const arr_3 = ref([
        { id: 1, text: '胸，肩，背，手臂，臀腿', points: 5 },
        { id: 2, text: '胸，背，手臂，肩，臀腿', points: 10 },
        { id: 3, text: '背，胸，肩，手臂，臀腿', points: 0 },
        { id: 4, text: '肩，胸，手臂，背，臀腿', points: 0 },
    ])
    const arr_4 = ref([
        { id: 1, text: '每天气一气，澄澄有氧气！', points: 5 },
        { id: 2, text: '因为气多了就饱了，省了一顿饭钱！', points: 0 },
        { id: 3, text: '因为澄澄生的气，比可乐的气更给力！', points: 5 },
        { id: 4, text: '每天生生气，更加有活力！', points: 10 },
    ])
    const arr_5 = ref([
        { id: 1, text: '最好0分甜，因为良药苦口', points: 0 },
        { id: 2, text: '当然是5分甜啦，刚刚好！', points: 5 },
        { id: 3, text: '就3分甜吧，不喜欢太甜', points: 10 },
        { id: 4, text: '10分甜，甜锋锋一整天！', points: 0 },
    ])
    const arr_6 = ref([
        { id: 1, text: 'reporta', points: 0 },
        { id: 2, text: 'journalitor', points: 5 },
        { id: 3, text: 'periodista', points: 10 },
        { id: 4, text: 'reportador', points: 0 },
    ])
    const arr_7 = ref([
        { id: 1, text: '万达广场', points: 10 },
        { id: 2, text: '正佳广场', points: 0 },
        { id: 3, text: '猎德igc', points: 0 },
        { id: 4, text: '富力海珠城', points: 0 },
    ])
    const arr_8 = ref([
        { id: 1, text: '前任4', points: 0 },
        { id: 2, text: '闪电侠', points: 10 },
        { id: 3, text: '八角笼中', points: 0 },
        { id: 4, text: '扫毒3', points: 0 },
    ])
    const arr_9 = ref([
        { id: 1, text: '香味', points: 3 },
        { id: 2, text: '臭味', points: 10 },
        { id: 3, text: 'Wǎng味', points: 5 },
        { id: 4, text: '中意日日问澄澄ō左屎未', points: 0 },
    ])
    
    // 定义所有的数组
    const allArrays = [arr_show.value, arr_1.value, arr_2.value, arr_3.value, arr_4.value, arr_5.value, arr_6.value, arr_7.value, arr_8.value, arr_9.value];
    // 总分数计算
    let totalPoints = ref(0)
    //计算变换问题
    let count = ref(0)
    // 声明一个计数器
    let currentArrayIndex = 0;
    // 评语
    const comment = ref('快点做题啊！懒东西！')
    //可看不可看
    let isShow = ref(true)

    // 声明方法 action（普通函数）
    // 在 AddPoints 函数中切换 arr_show 的值
    const AddPoints = (clickedItemId) => {
        const selectedArray = allArrays[currentArrayIndex];
        const clickedItem = selectedArray.find(item => item.id === clickedItemId);

        if (clickedItem) {
            totalPoints.value += clickedItem.points;
            console.log(totalPoints.value);
        }

        // currentArrayIndex = (currentArrayIndex + 1) % allArrays.length;
        arr_show.value = allArrays[++currentArrayIndex];
        count.value++;
        if (arr_show.value) {
            if (totalPoints.value > 50) comment.value = '及格啦！你还记得一点关于我们的事嘛，不赖嘛香澄';
            else comment.value = '才' + totalPoints.value + '分？fw啊懒东西'
        } else {
            isShow.value = false; // 不可见
            if (totalPoints.value === 100) comment.value = '记忆力不错啊，勤奋小东西，快拿着截图找锋锋拿奖励';
            else if (count.value >= 9 && totalPoints.value !== 100) comment.value = '不到满分？记忆力一般吧懒东西！'} 
    }

    // 向用户展示的数据
    return {
        questions,
        arr_show,
        totalPoints,
        count,
        comment,
        isShow,
        AddPoints
    }
}
// ,{
//     persist: true // 开启持久化，在return后开启
// }
)