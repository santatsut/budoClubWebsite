<script setup>
import { inject } from 'vue';

</script>

<template>
    <div id="shopPage">
        <div class="title">
            <h1>Shop</h1>
        </div>
        <div id="shop">
            <div class="shopCards">
                <div class="card">
                    <img src="../../public/images/whiteBelt.svg" alt="whiteBelt" id="whiteBelt">
                    <h2>White Belt</h2>
                    <p>pris: 100kr</p>
                    <button>Add to Cart</button>
                </div>
                <div class="card">
                    <img src="../../public/images/whiteBelt.svg" alt="whiteBelt" id="whiteBelt">
                    <h2>White Belt</h2>
                    <p>pris: 100kr</p>
                    <button>Add to Cart</button>
                </div>  
                <div class="card">
                    <img src="../../public/images/whiteBelt.svg" alt="whiteBelt" id="whiteBelt">
                    <h2>White Belt</h2>
                    <p>pris: 100kr</p>
                    <button>Add to Cart</button>
                </div>  
                <div class="card">
                    <img src="../../public/images/whiteBelt.svg" alt="whiteBelt" id="whiteBelt">
                    <h2>White Belt</h2>
                    <p>pris: 100kr</p>
                    <button>Add to Cart</button>
                </div>  
                <div class="card">
                    <img src="../../public/images/whiteBelt.svg" alt="whiteBelt" id="whiteBelt">
                    <h2>White Belt</h2>
                    <p>pris: 100kr</p>
                    <button>Add to Cart</button>
                </div>  
            </div>
        </div>
    </div>
</template>

<style>

#shopPage {
    height: 80vh;
}

.shopCards {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
}

.card {
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    width: 200px;
}

.card img {
    width: 100px;
    height: 100px;
}

</style>