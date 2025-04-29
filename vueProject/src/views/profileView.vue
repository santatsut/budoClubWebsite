<script setup>
import { ref, inject, onMounted } from 'vue'
import axios from 'axios'

const gmail = localStorage.getItem('gmail')
console.log(gmail)

const firstName = ref('')
const lastName = ref('')
const phoneNumber = ref(0)
const memberNumber = ref(null)
const group = ref(null)
const paymentDate = ref(null)
const paymentAmount = ref(null)
const isMedlem = ref(false)

const profileImgSrc = ref('./images/person.svg')

// Handle file input and set image preview
function handleFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      profileImgSrc.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

onMounted(() => {
  const userGmail = {
    gmail: gmail,
  }

  axios
    .post(`http://localhost:5001/getUser`, userGmail)
    .then((response) => {
      console.log('User data:', response.data)
      firstName.value = response.data.user.firstName
      lastName.value = response.data.user.lastName
      memberNumber.value = response.data.user.userID
      group.value = response.data.user.group
      phoneNumber.value = response.data.user.number

    })
    .catch((error) => {
      console.error('Error fetching user data', error)
    })
})
</script>

<template>
  <div class="box" id="topBox">
    <h1>Profil</h1>
    <div class="userBox">
      <div class="profileCard" id="userImg">
          <img :src="profileImgSrc" alt="userProfile" id="userIconImg" />

          <!-- Hidden file input -->
          <input
            type="file"
            id="myFile"
            name="filename"
            class="hidden-file"
            @change="handleFileChange"
          />
          <!-- Custom styled label -->
          <label for="myFile" class="custom-file-label">Upload Image</label>
          
        <div id="buttons">
          <button @click="editProfile">Edit Profil</button>
          <button @click="deleteProfile">Radera Profil</button>
        </div>
      </div>

      <div id="columnRight">
        <div class="profileCard" id="userInfo">
          <p>Förnamn: {{ firstName }}</p>
          <p>Efternamn: {{ lastName }}</p>
        </div>
        <div class="profileCard">
          <p>Mobil: {{ phoneNumber }}</p>
          <p>Gmail: {{ gmail }}</p>
          <p>Lösenord: *******</p>
        </div>
      </div>
    </div>

    <div class="profileCard" id="bottomBox">
      <p class="profileText">Medlemsnummer: {{ memberNumber }}</p>
      <p class="profileText">Grupp: {{ group }}</p>
      <p class="profileText">Betalnings datum: {{ paymentDate }}</p>
      <p class="profileText">pris: {{ paymentAmount }}</p>
      <button v-if="!isMedlem" >Bli Medlem</button>
    </div>
  </div>
</template>

<style>
.hidden-file {
  display: none;
}

.custom-file-label {
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  background-color: #000;
  color: white;
  border-radius: 5px;
  margin-top: 110px; /* Adjust based on your layout */
  text-align: center;
}

#userIconImg {
  position: absolute;
  top: -30px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 1px solid white;
  background-color: red;
}

#topBox {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  justify-self: center;
}

#bottomBox {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  flex-wrap: wrap;
  height: 100px;
}

#bottomBox > * {
  display: flex;
  position: relative;
  font-size: 18px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  flex: 1 1 400px;
  justify-content: space-around;
}

.userBox {
  display: flex;
  position: relative;
  width: 100%;
}

.profileCard {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(0, 0, 0);
  color: white;
  width: 80%;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
}

#columnRight {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 2;
}

#columnRight div {
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  width: 90%;
}

#userInfo {
  display: flex;
  position: relative;
  flex: 2;
  font-size: 24px;
}

#userImg {
  display: flex;
  position: relative;
  width: fit-content;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  flex-direction: column;
}

.userSection {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

#buttons {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
}

#buttons button {
  background-color: rgb(0, 0, 0);
  color: white;
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  font-size: 16px;
}

#userIcon {
  position: absolute;
  background-color: red;
  top: -30px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 1px solid white;
}

</style>
