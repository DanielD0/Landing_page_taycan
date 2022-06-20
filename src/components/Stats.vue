<template>
    <div class="Stats bg-cover bg-no-repeat bg-bottom relative py-8 lg:pt-32"
    :style="`background-image:url(${PorsheBackground}); min-height: 300px; background-position: center bottom -6rem;`">
        <div class="w-full h-full bg-customblue opacity-75 absolute top-0 left-0 z-0"></div>
            <div class="Stats-Components flex flex-col lg:flex-row 
            items-center justify-between w-full z-50 relative lg:absolute p-8"> 
                <StatsCard v-for="obj, objIndex in cards" :key="objIndex" :content="obj"></StatsCard>
            </div>
    </div>
</template>

<script>
    import {reactive, toRefs} from 'vue'
    import StatsCard from './elements/stats/StatsCards.vue'
    import PorsheBackground from '../assets/2020-porshe.jpg'
    import Plug from '../assets/rounded-plug.png'
    import Size from '../assets/dimensiones.png'
    import Speed from '../assets/races.png'
    import Weight from '../assets/weight.png'

export default{
    components:{
        StatsCard
    },
    setup(){
    const data = reactive({
    PorsheBackground,
    cards: [{
      imgSrc: Plug,
      title: "Range",
      descriptcion: "301 miles<br>(25.4-20.4 kWh/100 miles)"  
    },
    {
      imgSrc: Speed,
      title: "Speed",
      descriptcion: "5.4s<br>0 - 100km"  
    },
    {
      imgSrc: Size,
      title: "Size",
      descriptcion: "L: 4,963 mm<br>W: 1,966 mm<br> H: 1,395"  
    },
    {
      imgSrc: Weight,
      title: "Weight",
      descriptcion: "2,050 kg"  
    }]})
    return{
        ...toRefs(data)
    }
    }
}
</script>
