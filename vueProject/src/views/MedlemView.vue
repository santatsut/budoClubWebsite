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

const loggingIn = () => {
    signingUp.value = false;
    errorMsg.value = '';
}

</script>

<template>
    <div id="loginContainer">
        <div class="leftSideBox">
        </div>
    <div class="Inloggning">
        <div class="tabs">
            <button @click="loggingIn">Logga in</button>
            <button @click="signUp">registrera dig</button>
        </div>
        <form @submit.prevent="handleSubmit">
            <p v-if="errorMsg" id="errorMsg">{{ errorMsg }}</p>
            <div v-if="signingUp" class="formSection" id="nameSection">
                <div id="firstNameSection">
                    <label for="firstName">Förnamn: </label>
                    <input type="text" v-model="firstName" placeholder="förnamn" id="firstName" class="singupInput"/>
                </div>
                <div id="lastNameSection">
                    <label for="lastName">Efternamn: </label>    
                    <input type="text" v-model="lastName" placeholder="efternamn" id="lastName" class="singupInput"/>
                </div>
            </div>
            <div v-if="signingUp" class="formSectionSigningUp">
                <label for="number">Nummer: </label>
                <input type="text" v-model="number" placeholder="123-123-1234" id="number" class="singupInput"/>
            </div>
            <div class="formSection">
                <label for="gmail">Gmail: </label>
                <input type="text" v-if="!signingUp" v-model="gmail" placeholder="example@gmail.com" id="gmail" class="loginInput"/>
                <input type="text" v-if="signingUp" v-model="gmail" placeholder="example@gmail.com" id="gmail" class="singupInput"/>
            </div>

            <div class="formSection">
                <label for="password">Password: </label>
                <input type="password" v-if="!signingUp" v-model="password" placeholder="password" id="password" class="loginInput"/>
                <input type="password" v-if="signingUp" v-model="password" placeholder="password" id="password" class="singupInput"/>
            </div>
            
            <div v-if="signingUp" class="formSection">
                <label for="password">Password: </label>
                <input type="password" v-model="passwordRe" placeholder="password" id="passwordRe" class="singupInput"/>
            </div>
            <div v-if="!signingUp">
                <a href="#">Glömt lösenord?</a>
            </div>
            <button type="submit" v-if="!signingUp">Logga in</button>
            <button type="submit" v-if="signingUp">registrera</button>
        </form>
    </div>
    </div>
</template>

<style>
.tabs {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 10px;
}

.tabs button {
    border: none;
    cursor: pointer;
    padding: 5px;
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    width: 100%;
}

.tabs button:hover {
    background-color: #c5c5c5;
    transition: background-color 0.3s ease;
}

.tabs button:focus {
    outline: none;
    text-decoration: underline;
    text-underline-offset: 5px;
    color: rgb(0, 0, 0);
}

.leftSideBox {
    display: flex;
    position: relative;
    background-image: url('/images/backgroundImg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: scaleX(-1);
    height: 100%;
    flex: 1;
}

#loginContainer {
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
    justify-self: center;
    height: 55vh;
    background-color: #f2f2f2;
    margin: 100px 0 100px 0;
    box-shadow: #484e005b 40px 40px 10px;
}

 .Inloggning {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #f2f2f2;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    height: 100%;
    flex: 1;
 }

 form button {
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
    height: 80%;
    margin: 25px;
 }
 .loginInput {

    padding: 12px 20px;
    border: none;
    border-bottom: black solid 2px;
    margin: 8px 0;
 }

.loginInput:focus {
    outline: none;
}

 .formSection {
    display: flex;
    position: relative;
    flex-direction: column;

 }

.formSectionSigningUp {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

#errorMsg {
     color: red;
     text-align: center;
 
 }

 .singupInput {
    padding: 6px 12px;
    border: none;
    border-bottom: black solid 2px;
    margin: 8px 0;
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

 #number {
    display: flex;
    position: relative;
    flex-direction: column;
    flex:1;
    width: calc(100% - 20px);
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
