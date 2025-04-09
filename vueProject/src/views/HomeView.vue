<script setup>
import {inject} from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
import loggedInComp from '../components/loggedIn.vue'
import news from '../components/news.vue'
import schedule from '../components/schedule.vue'
import KarateForms from '../components/karateForms.vue'
import PricesView from './PricesView.vue'

const loggedIn = inject('loggedIn')

</script>

<template>
    <TheWelcome v-if="!loggedIn" />
    <loggedInComp v-else-if="loggedIn" />

    <schedule/>
    <KarateForms />
    <div class="b">
        <news v-if="!loggedIn" />
        <PricesView v-if="!loggedIn"/>
    </div>
</template>
<style scoped>
.b {
    background-color: black;
    color: white;
}
</style>
