<script setup>

</script>

<template>
  <div class="start">
    <div class="startText">
      <h1>Välkommen till Mjölby Karate Club</h1>
      <h3>prova på Karate i den bästa klubben i Mjölby för båda barn, junior och vuxna samt experter</h3>
    </div>
    <RouterLink to="/medlem">
        <button class="medlemButton">
          Vill du bli medlem?
        </button>
    </RouterLink>
  </div>
</template>

<style>
.start {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height:90vh;
  background-color: black;
  flex-wrap:wrap;
}
.start h1 {
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  max-width: 700px;
  text-align: center;
}

.startText {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.medlemButton {
  width: 400px;
  height: 100px;
  box-shadow: 10px 5px 5px black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bolder;
  font-size: 32px;
  padding: 10px 20px;
  background-color: #c70000;
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
}

.medlemButton a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 28px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.medlemButton a:hover {
  text-decoration: none;
}

</style>