
<script setup>

</script>

<template>
  <footer>
    <div class="footerContent">
      <div class="outer">
        <div>
          <h2>Contact</h2>
          <p>Number: 000 000 00 00</p>
          <p>Email: info@example.com</p>
        </div>
        <div>
          <h2>Hitta oss</h2>
          <p>Address: Kungsvägen 50, Mjölby, Sweden</p>
        </div>
      </div>
      </div>
      <p id="copyright">Copyright © 2025</p>
  </footer>
</template>

<style>
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(0, 0, 0);
  color: white;
  width: 100%;
  height: 150px;
  bottom: 0px;
  margin-top:10px;
}

#copyright {
  display: flex;
  transform: translateX(-50%);
}

.outer {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0 100px 0 100px;
}

</style>