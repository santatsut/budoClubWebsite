<script setup>

import { ref, inject, onMounted } from 'vue';
import axios from 'axios';

const gmail = localStorage.getItem('gmail');
console.log(gmail);

const firstName = ref('');
const lastName = ref('');
const memberNumber = ref(null);
const group = ref(null);
const paymentDate = ref(null);
const paymentAmount = ref(null);
const isMedlem = ref(false);

onMounted(() => {
    const userGmail = {
        gmail: gmail
    };
    
    axios.post(`http://localhost:5001/getUser`, userGmail)
        .then(response => {
            console.log("User data:", response.data);
            firstName.value = response.data.users.firstName;
            lastName.value = response.data.users.lastName;
        })
        .catch(error => {
            console.error("Error fetching user data", error);
        });
}, []);
    

</script>

<template>
    <div class="box" id="topBox">
        <h1>Profile</h1>
        <div class="userBox">
            <div class="profileCard" id="userImg">
                <img src="../../public/images/person.svg" alt="userProfile" id="userIcon">
                <div id="buttons">
                    <button @click="editProfile">Edit Profile</button>
                    <button @click="deleteProfile">Delete Profile</button>
                </div>
            </div>
            <div id="columnRight">
                <div class="profileCard" id="userInfo">
                    <p> Förnamn: {{ firstName }} </p>
                    <p> Efternamn: {{ lastName }} </p>
                </div>
                <div class="profileCard">
                    <p>Mobil: 123-123-1234</p>
                    <p>Gmail: {{ gmail }}</p>
                    <p>Lösenord: *******</p>
                </div>
            </div>
        </div>
            
        <div class="profileCard" id="bottomBox">
            <p>Medlemsnummer: {{ memberNumber }}</p>
            <p>Grupp: {{ group }}</p>
            <p>Betalnings datum: {{ paymentDate }}</p>
            <p>pris: {{ paymentAmount }}</p>
            <button v-if="!isMedlem">Bli Medlem</button>
        </div>
    </div>
</template>

<style>

.box {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    justify-self:center ;
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
    margin: 100px 0px 0px 0px;
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


#bottomBox {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
}

</style>