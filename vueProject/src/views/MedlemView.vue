<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import navy from '../components/navy.vue'
import { ref, inject, onMounted } from 'vue';
import axios from "axios"

const gmail = ref('');
const password = ref('');
const passwordRe = ref('');

const loggedIn = inject('loggedIn');

const errorMsg = ref('');
const signingUp = ref(false);

onMounted(() => {
    loggedIn.value = localStorage.getItem('loggedIn') === 'true';
});

const handleSubmit = async () => {
    try {
        const success = await checkLogin();  // Call checkLogin and wait for response

        if (success) { 
            loggedIn.value = true;
            localStorage.setItem('loggedIn', 'true'); 
            localStorage.setItem('gmail', gmail.value);
            errorMsg.value = '';
            window.location.href = "/";  // Redirect to home page
        } else {
            loggedIn.value = false;
            localStorage.setItem('loggedIn', 'false');
            errorMsg.value = 'Invalid gmail or password';
        }

        // Clear inputs
        gmail.value = '';
        password.value = '';
    } catch (error) {
        console.error("Login error:", error);
    }
};

const checkLogin = async () => {
    const userData = {
        gmail: gmail.value,
        password: password.value,
    };
    
    try {
        const response = await axios.post("http://localhost:5001/checkLogin", userData);
        console.log("Login response:", response.data);  // Check the response in the console
 
        return response.data.success;  // Expecting { success: true/false }
    } catch (error) {
        console.error("Error checking login", error);
        return false;
    }
};


function containsUppercase(str) {
  return /[A-Z]/.test(str);
}

const signUp = () => {
    signingUp.value = true;
    if ( !firstName || !lastName || !number || !gmail.value || !password.value || !passwordRe.value) {
        errorMsg.value = 'Alla fält måste fyllas i';
        return;
    }
        
    else if (password.value !== passwordRe.value) {
        errorMsg.value = 'Lösenorden matchar inte';
        return;
    }

    else if (password.value.length <= 7 || containsUppercase(password.value) === false) {
        errorMsg.value = 'Lösenordet måste vara minst 7 tecken långt och innehålla en stor bokstav';
        return;
    }

    else if (gmail.value.includes('@gmail.com') === false) {
        errorMsg.value = 'Gmailen måste innehålla ett @gmail.com';
        return;
    }


    
    const userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        number: parseInt(number.value),
        gmail: gmail.value,
        password: password.value,
    };

    axios.post("http://localhost:5001/signUp", userData)
      .then((response) => {
        console.log("user added: ", response.data);
        loggedIn.value = true;
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('gmail', gmail.value);
        window.location.href = "/budoklubb/prices";
      })
      .catch((error) => {
        console.error("Error adding userrrr, user might already exist", error);
        errorMsg.value = 'Denna gmail är redan registrerad';
        console.log("Failed to add userr");
      });
  };

</script>

<template>
  <div class="Inloggning">
    <h1>Logga in</h1>
    <form @submit.prevent="handleSubmit">
        <p v-if="errorMsg" id="errorMsg">{{ errorMsg }}</p>
        <div v-if="signingUp" class="formSection" id="nameSection">
            <div id="firstNameSection">
                <label for="firstName">Förnamn: </label>
                <input type="text" v-model="firstName" placeholder="förnamn" id="firstName"/>
            </div>
            <div id="lastNameSection">
                <label for="lastName">Efternamn: </label>    
                <input type="text" v-model="lastName" placeholder="efternamn" id="lastName"/>
            </div>
        </div>
        <div v-if="signingUp" class="formSection">
            <label for="number">Nummer: </label>
            <input type="text" v-model="number" placeholder="123-123-1234" id="number" />
        </div>
        <div class="formSection">
            <label for="gmail">gmail: </label>
            <input type="text" v-model="gmail" placeholder="gmail" id="gmail" />
        </div>

        <div class="formSection">
            <label for="password">Password: </label>
            <input type="password" v-model="password" placeholder="password" id="password"/>
        </div>
        
        <div v-if="signingUp" class="formSection">
            <label for="password">Password: </label>
            <input type="password" v-model="passwordRe" placeholder="password" id="passwordRe"/>
        </div>
        <div v-if="!signingUp">
            <a href="#">Glömt lösenord?</a>
        </div>

        <button type="submit" v-if="!signingUp">Logga in</button>
    </form>
    <div id="line"></div>
    <button @click="signUp">registrera dig</button>
  </div>
</template>

<style>
 .Inloggning {
    position: relative;
    width: 25%;
    margin: auto;
    margin-top: 150px;
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 150px;
 }

 .Inloggning button {
    padding: 10px 20px;
    background-color: #c70000;
    color: rgb(255, 255, 255);
    border: none;
    cursor: pointer;
    font-size: 16px;
 }

 .Inloggning form {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-around;
    align-items: space-around;
    height: 40vh;
 }
 .Inloggning form input {
    height: 30px;
 }

 .formSection {
    display: flex;
    position: relative;
    flex-direction: column;

 }
#errorMsg {
     color: red;
     text-align: center;
 
 }

 #nameSection {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    gap: 10px;
 }

 #firstNameSection, #lastNameSection {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 50%;
 }

#line {
    position: relative;
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin-bottom: 20px;
}

h3 {
    text-align: center;
}


</style>
