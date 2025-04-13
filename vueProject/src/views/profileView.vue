<script setup>

import { ref, inject } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const gmail = localStorage.getItem('gmail');

const isMedlem = ref(false);

</script>

<template>
    <div class="box" id="topBox">
        <h1>Profile</h1>
        <div class="profileCard">
            <div id="user">
                <img src="../../public/images/person.svg" alt="userProfile" id="userIcon">
            </div>
            <div id="userInfo">
                <div class="userSection">
                    <p>Förnamn: asdf</p>
                    <p>Efternamn: sasdf</p>
                </div>
                <div class="userSection">
                    <p>Mobil: 123-123-1234</p>
                    <p>Gmail: {{ gmail }}</p>
                    <p>Lösenord: *******</p>
                </div>
                <div id="buttons">
                    <button @click="editProfile">Edit Profile</button>
                    <button @click="deleteProfile">Delete Profile</button>
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
    border: 2px solid rgb(0, 0, 0);
    width: 80%;
    justify-self:center ;
}

.profileCard {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);
    color: white;
    width: 80%;
    border-radius: 10px;
    padding: 20px;
    margin: 25px;
}

#userInfo {
    display: flex;
    position: relative;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    flex: 0.8;
    height: 50vh;
    width: 60%;
}

.userSection {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

#userInfo p {
    flex:2;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#buttons {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

#user {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-items: center;
    align-items: center;
    flex: 0.4;
}

#userIcon {
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
    flex: 1;
}

</style>