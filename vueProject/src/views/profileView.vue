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
                <img src="../../public/images/userIcon.svg" alt="userProfile" id="userIcon">
            </div>
            <div id="userInfo">
                <p>Förnamn: asdf</p>
                <p>Efternamn: sasdf</p>
                <p>Mobil: 123-123-1234</p>
                <p>Gmail: {{ gmail }}</p>
                <p>Lösenord: *******</p>
                <button @click="editProfile">Edit Profile</button>
                <button @click="deleteProfile">Delete Profile</button>
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

#user {
    display: flex;
    flex-direction: column;
    position: relative;
    flex:1;
    justify-items: center;
    align-items: center;
}

#userIcon {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: red;
}

#userInfo {
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    flex: 3;
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