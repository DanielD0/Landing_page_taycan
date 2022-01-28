<template>
    <div class="Home">
        <Nav />
        <MainHeader/>
        <Presentation v-for="obj, objIndex in presentations" :key="objIndex" :content="obj"/>
        <Stats/>
    </div>
</template>

<script>
import {MainHeader,Nav,Footer,Presentation,Stats,Tabs} from '../components';
import {reactive , toRefs} from 'vue'
import PorscheCockpit from '../assets/porshe-taycan.jpg'
import Porschemodel from '../assets/g-motor5.jpg'

export default{
    components:{
        MainHeader,Nav,Footer,Presentation,Stats,Tabs
    },
    setup(){
        let data = reactive ({
            presentations : [{
                left: true,
                columns:[
                {
                    backgroundColor: 'customblue',
                    title: 'Future is now',
                    subtitle: 'Taycan Concept',
                    description: 'The soul has many aspects. It is variable and constantly changing. When viewing the Porsche Taycan, it reveals itself by a smile that expresses total delight. Or by the urge for freedom at the wheel of the new Taycan Cross Turismo that holds its ground,evene away from everyday life.'
                },
                 {
                    imgSrc: PorscheCockpit
                }]
            }, {
                left: false,
                columns:[{
                    backgroundColor: 'white',
                    button: {
                        backgroundColor : 'customblue',
                        text: 'Book a test'
                    },
                    title: 'Out first electric Sportcar',
                    subtitle: 'Taycan concept',
                    description: 'The soul has many aspects. It is variable and constantly changing. When viewing the Porsche Taycan, it reveals itself by a smile that expresses total delight. Or by the urge for freedom at the wheel of the new Taycan Cross Turismo that holds its ground,evene away from everyday life.'
                },
                 {
                    imgSrc: Porschemodel,
                    contain: true 
                }]
            }]
        })

        return{
            ...toRefs(data)
        }

    }
}
</script>

