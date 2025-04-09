<script setup>

</script>

<template>
    <div class="newsView">
        <div class="title"> 
            <h1>News</h1>
        </div>
        <div class="line"></div>
        <div id="nyheter">
            <div class="innerBox">
                <div class="eventCard">
                    <img src="/images/karateBild.jpg" alt="nyhets bild">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, corporis.</p>
                </div>
                <div class="eventCard">
                    <img src="/images/comp.jpg" alt="nyhets bild">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, corporis.</p>
                </div>
                <div class="eventCard">
                    <img src="/images/poster.jpg" alt="nyhets bild">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, corporis.</p>
                </div>
                <div class="eventCard">
                    <img src="/images/karate3.jpg" alt="nyhets bild">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, corporis.</p>
                </div>
                <div class="eventCard">
                    <img src="/images/comp2.jpg" alt="nyhets bild">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, corporis.</p>
                </div>
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
    position:relative;
}

#nyheter {
    display: flex;
  width: inherit;
  justify-content: center;
  height: 90vh;
  position:relative;
}

.innerBox {
    display: flex;
    background-color: rgb(0, 0, 0);
    color: white;
    width: 80%;
    height: 80%;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    overflow-y: auto;
}

.eventCard {
    display: flex;
    flex-direction: column;
    max-width:200px;
}

#nyheter h1 {
  text-align: center;
}

.innerBox img {
    height:fit-content;
}

#nyheter p {
    max-width: 600px;
    font-size: 16px;
    letter-spacing: 1px;
}

.title {
    display: flex;
    position:relative;
    justify-content: center;
    align-items: center;
    height: 100px;
    color: rgb(0, 0, 0);
}


</style>