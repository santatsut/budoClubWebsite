
<script setup>

</script>

<template>
  <footer>
    <div class="socialMedia">
      <img src="../../public/images/whiteBelt.svg" alt="logo" id="logo">
      <img src="../../public/images/whiteBelt.svg" alt="logo" id="logo">
      <img src="../../public/images/whiteBelt.svg" alt="logo" id="logo">
      <img src="../../public/images/whiteBelt.svg" alt="logo" id="logo">
      <img src="../../public/images/whiteBelt.svg" alt="logo" id="logo">
    </div>
    <div class="footerContent">
      <div>
        <h2>Contact</h2>
        <p>Number: 000 000 00 00</p>
        <p>Email: info@example.com</p>
      </div>
      <div>
        <h2>Hitta oss</h2>
        <p>Address: Kungsvägen 50, Mjölby, Sweden</p>
      </div>
      <p id="copyright">Copyright © 2025</p>
    </div>
  </footer>
</template>

<style>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(0, 0, 0);
  color: white;
  width: 100%;
  margin-top:10px;
}

.footerContent {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex: 1;
}

.socialMedia {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.socialMedia img {
  width: 50px;
  height: 50px;
  margin: 20px;
}

@media screen and (max-width: 1024px) {
  .footerContent {
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .socialMedia {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
  }


}
</style>