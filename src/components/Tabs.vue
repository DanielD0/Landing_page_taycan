<template>
    <div class="Tabs">
        <header class="flex flex-row items-center justify-center lg:mt-56">
            <div v-for="obj, ObjIndex in tabs" :key="ObjIndex" class="Tabs-Header-Item px-6 py-4 mx-3 cursor-pointer" 
            :class="ObjIndex === activeTab ? 'text-customblue border-b-4 border-customblue' : 'boder-b'" @click="updateActiveTab(ObjIndex)">
            {{obj.title}}
            </div>
        </header>
        <div class="container mx-auto bg-cover lg:bg-contain bg-center bg-no-repeat flex items-center rounded-3xl lg:rounded-2xl justify-center mt-4" :style="`background-image:url(${getActiveTabContent.imgSrc}); min-height: 600px;` ">
            <div class="mb-16 text-white">
                <h2 class="text-4xl uppercase text-center font-bold mb-4">{{getActiveTabContent.title}}</h2>
                <div class="bg-white h-2 w-16 mx-auto mb-16"/>
                <p class="text-center mx-8 lg:mx-64">{{getActiveTabContent.description}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive,toRefs,computed } from 'vue'
import Inside from '../assets/inside.jpg'
export default {
    setup() {
        const data = reactive({
        activeTab: 0,
        getActiveTabContent: computed(()=>{
            return data.tabs[data.activeTab]
        }),
        tabs: [{
            imgSrc: Inside,
            title: 'Design',
            description:'From the outside, it is a mere formality to quickly identify a Porsche as such. And in the interior, you can also sense distinctive Porsche genes in the new Taycan. The basic features of the interior architecture are sporty, minimalist and clear; the wing extending from the center console catches your eye and appears to be floating. The innovative cockpit displays are clearly driver-oriented, allowing you to keep an eye on the most important information, even during dynamic driving.'
        },
        {
            imgSrc: Inside,
            title: 'Performance',
            description:'From the outside, it is a mere formality to quickly identify a Porsche as such. And in the interior, you can also sense distinctive Porsche genes in the new Taycan. The basic features of the interior architecture are sporty, minimalist and clear; the wing extending from the center console catches your eye and appears to be floating. The innovative cockpit displays are clearly driver-oriented, allowing you to keep an eye on the most important information, even during dynamic driving.'
        },
        {
            imgSrc: Inside,
            title: 'Charging',
            description:'From the outside, it is a mere formality to quickly identify a Porsche as such. And in the interior, you can also sense distinctive Porsche genes in the new Taycan. The basic features of the interior architecture are sporty, minimalist and clear; the wing extending from the center console catches your eye and appears to be floating. The innovative cockpit displays are clearly driver-oriented, allowing you to keep an eye on the most important information, even during dynamic driving.'
        },
        {
            imgSrc: Inside,
            title: 'Comfort',
            description:'From the outside, it is a mere formality to quickly identify a Porsche as such. And in the interior, you can also sense distinctive Porsche genes in the new Taycan. The basic features of the interior architecture are sporty, minimalist and clear; the wing extending from the center console catches your eye and appears to be floating. The innovative cockpit displays are clearly driver-oriented, allowing you to keep an eye on the most important information, even during dynamic driving.'
        }]
        })
        const updateActiveTab = (index) =>{
            data.activeTab = index
        }
        return {
            ...toRefs(data),
            updateActiveTab
        }
    },
}
</script>