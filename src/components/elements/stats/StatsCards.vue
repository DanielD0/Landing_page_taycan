<template>
    <div class="Stats-Card flex flex-col items-center text-black text-center bg-white p-16 mb-8 lg:mb-0 shadow-lg">
        <img class="h-16 mb-8" :src="content.imgSrc" :alt="content.title">
        <h2 class="text-lg font-light mb-2">{{content.title}}</h2>
        <p class="text-sm font-bold" v-html="content.descriptcion"></p>
    </div>
</template>

<script>
import GeneralMixin from '../../../mixins/GeneralMixin'
export default {
        mixins: [GeneralMixin]
}
</script>
<style>
.Stats-Card {
    min-width: 266px;
    max-width: 266px;
    min-height: 300px;
    max-height: 300px;
}
</style>