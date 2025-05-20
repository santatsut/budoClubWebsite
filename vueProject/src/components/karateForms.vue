<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import modules
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

const karateForms = [
  { Form: "Kata Example 1", locked: false },
  { Form: "Kata Example 2", locked: false },
  { Form: "Kata Example 3", locked: false },
  { Form: "Advanced Kata Example 4", locked: true },
  { Form: "Advanced Kata Example 5", locked: true },
  { Form: "Advanced Kata Example 6", locked: true },
  { Form: "Advanced Kata Example 7", locked: true },
];
</script>

<template>
  <div class="karateFormsContainer">
    <h1>Kata Forms</h1>
    <p>Here you can find the different karate forms.</p>
    <div class="karateForms">
      <swiper
        :modules="[Navigation, Pagination, EffectCoverflow]"
        :centered-slides="true"
        :navigation="true"
        :pagination="{ clickable: true }"
        effect="coverflow"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }"
        :loop="true"
        :breakpoints="{
          0: { slidesPerView: 1, spaceBetween: 10 },
          769: { slidesPerView: 3, spaceBetween: 50 }
        }"
        class="swiper-container"
      >
        <swiper-slide v-for="(form, index) in karateForms" :key="index">
          <div class="slide-content">{{ form.Form }}</div>
          <div v-if="form.locked" class="locked-overlay"></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style>
.karateFormsContainer {
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f0f0f0;
  flex-direction: column;
}

.karateForms {
  width: 75%;
  padding: 20px;
  background-color: #f0f0f0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Default slide styles */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  font-size: 20px;
  font-weight: bold;
  background-color: lightgray;
  border-radius: 10px;
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0.5; /* Fade out non-center slides */
}

/* Highlight the active (center) slide */
.swiper-slide-active {
  transform: scale(1.2); /* Make center slide pop */
  opacity: 1;
}

/* Locked overlay styles */
.locked-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  opacity: 0.6;
}
</style>
