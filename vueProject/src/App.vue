<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navy from './components/navy.vue'
import foot from './components/footer.vue'
import TheWelcome from './components/TheWelcome.vue'
import medlemView from './views/MedlemView.vue'
import { ref, provide, onMounted } from 'vue';

const loggedIn = ref(false)

onMounted(() => {
    loggedIn.value = localStorage.getItem('loggedIn') === 'true';
});

provide('loggedIn', loggedIn); // Provide global state to child components
</script>

<template>
  <div class="pageWrapper">
    <div class="main">
      <navy msg="Mjölby BudoKlubb" />
      <RouterView />
    </div>
    <foot />
  </div>
</template>

<style scoped>
.pageWrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.main {
  flex-grow: 1;
}

</style>
