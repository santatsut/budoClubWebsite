<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import modules
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

const news = [
    { newsArticle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, corporis.", image: "./images/karateBild.jpg" },
    { newsArticle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, corporis.", image: "./images/comp.jpg" },
    { newsArticle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, corporis.", image: "./images/poster.jpg" },
    { newsArticle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, corporis." },
]

</script>

<template>
    <div class="newsView">
        <div class="title">
            <h1>News</h1>
        </div>
        <div class="line"></div>
        <div id="nyheter">
            <div class="innerBox">
                <swiper :modules="[Navigation, Pagination, EffectCoverflow]" :centeredSlides="true" :navigation="true"
                    :pagination="{ clickable: true }" effect="coverflow" :coverflowEffect="{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true
                    }" :slidesPerView="1" :loop="true" class="swiper-container">
                    <swiper-slide v-for="(newsArticle, index) in news" :key="index" class="newsCard">
                        <img :src="newsArticle.image" alt="newsImage" id="newsImage" />
                        <p>{{ newsArticle.newsArticle }}</p>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<style>
* {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.newsView {
    background-color: white;
    position: relative;
}

#nyheter {
    display: flex;
    width: inherit;
    justify-content: center;
    height: 50em;
    position: relative;
}

.innerBox {
    display: flex;
    background-color: #f0f0f0;
    color: white;
    height: 90%;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    overflow-y: auto;
}

.newsCard {
    flex-direction: column;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0) !important;
    text-align: center;
    padding-bottom: 25px;
    color: black;
}

#newsImage {
    display: flex;
    justify-self: center;
    align-self: center;
    width: 100%;
    height: 90%;
    object-fit: contain;
    border-radius: 10px;
    margin: 0 10px 0 10px !important;
}

#nyheter h1 {
    text-align: center;
}

.innerBox img {
    height: fit-content;
}

#nyheter p {
    max-width: 600px;
    font-size: 16px;
    letter-spacing: 1px;
}

.title {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 100px;
    color: rgb(0, 0, 0);
}
</style>