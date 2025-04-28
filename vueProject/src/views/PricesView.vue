<script setup>
import { inject, provide, ref } from 'vue'
import { useRouter } from "vue-router";

const loggedIn = inject('loggedIn')

const chosen = ref("");
const router = useRouter();  // ✅ Initialize router
const group = ref("");

const handleChoice = (price) => {
  chosen.value = price;
  switch (price) {
    case '400kr':
      group.value = 'Startgrupp Barn';
      break;
    case '1000kr':
      group.value = 'Fortsättning Barn';
      break;
    case '2000kr':
      group.value = 'Vuxen & Juniorer';
      break;
    default:
      group.value = 'Unknown Group';
  }
  router.push(`/payment?price=${price}&group=${encodeURIComponent(group.value)}`);
  console.log(group.value);
  console.log(price);
};

</script>

<template>
  <h2 class="h2"> Priser</h2>
  <h2 class="h2"> välj den som passar bäst!</h2>
    <div class="prices">
      <div class="priceCard">
      <h1>Startgrupp Barn</h1>
      <h2>400kr</h2>
      <RouterLink to="/medlem" v-if="!loggedIn">
        <button class="bookNowButton" @click="handleChoice('400kr')">Book Now</button>
      </RouterLink>
      <RouterLink to="/payment" v-if="loggedIn">
        <button class="bookNowButton" @click="handleChoice('400kr')">Book Now</button>
      </RouterLink>
      <p>15% discount for first booking</p>
    </div>
    <div class="priceCard">
      <h1>Fortsättning Barn</h1>
      <h2>1000kr</h2>
      <RouterLink to="/medlem" v-if="!loggedIn">
        <button class="bookNowButton" @click="handleChoice('1000kr')">Book Now</button>
      </RouterLink>
      <RouterLink to="/payment" v-if="loggedIn">
        <button class="bookNowButton" @click="handleChoice('1000kr')">Book Now</button>
      </RouterLink>
      <p>10% discount for first booking</p>
    </div>
    <div class="priceCard">
      <h1>Vuxen & Juniorer</h1>
      <h2>2000kr</h2>
      <RouterLink to="/medlem" v-if="!loggedIn">
        <button class="bookNowButton" @click="handleChoice('2000kr')">Book Now</button>
      </RouterLink>
      <RouterLink to="/payment" v-if="loggedIn">
        <button class="bookNowButton" @click="handleChoice('2000kr')">Book Now</button>
      </RouterLink>
      <p>15% discount for first booking</p>
    </div>
  </div>
</template>

<style scoped>

.pricesContainer {
  display: flex;
  position: relative;
}
.line {
  width: 100%;
  height: 5px;
  background: #ff0000;
}
.bookNowButton {
width: 100%;
padding: 10px 20px;
  background-color: #c70000;
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  font-size: 16px;
}
.h2 {
  display: flex;
  position: relative;
  justify-content: center;
}

.prices {
  display: flex;
  position:relative;
  flex-wrap:wrap;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 0;
}

.priceCard {
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #111111;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  flex: 1;
  margin: 100px;
  color: aliceblue;
  cursor: pointer;
}

.priceCard:hover {
  transform: scale(1.05);
}

.priceCard h1 {
  color: aliceblue;
}

@media screen and (max-width: 768px) {
  .priceCard {
    flex: 1 1 calc(100% - 40px); /* Adjust for margin */
    margin: 20px;
  }
  
}

</style>
