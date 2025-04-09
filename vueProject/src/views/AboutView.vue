<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import navy from '../components/navy.vue'
</script>
<template>
  <div class="about">
    <h1>Om Oss</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur animi consequatur explicabo voluptatibus non a nihil officiis recusandae illum optio? Animi, excepturi dicta nam neque dolores doloremque velit non tenetur, ut facere quasi placeat, repellat dolor atque nemo id quibusdam laborum dolorum quo minus mollitia quam voluptatum dolorem. Inventore, debitis.</p>
    <h1>Våra instruktörer</h1>
    <div class="instructors">
      <div class="instructorImg"><img src="/images/profil1.jpg" id="imgIns"/></div>
      <div class="instructorImg"></div>
      <div class="instructorImg"></div>
      <div class="instructorImg"></div>
      <div class="instructorImg"></div>
      <div class="instructorImg"></div>
    </div>
  </div>
</template>

<style>
.about {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
}
.about p {
  max-width: 50%;
}
.instructors {
  background-color: black;
  height: 100%;
  width: 75%;
  padding: 25px 25px 75px 25px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-around;
  flex-wrap: wrap;
  gap: 50px;
}
.instructorImg {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
}

#imgIns {
  position: relative;
  object-fit: cover;
  object-position: center top;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}

</style>
