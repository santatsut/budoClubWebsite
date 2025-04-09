<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import axios from "axios";
import fs from "fs";  // Node.js module to read files
import https from "https"; // Required for TLS

const route = useRoute();
const price = ref(route.query.price || "0");
const group = ref(route.query.group || "0");

const name = ref('');
const gmail = ref('');
const cvv = ref('');
const cardNumber = ref('');
const expiry = ref('');

const errorMsg = ref("");

const swishPay = ref(false);

const swishPayment = () => {
    swishPay.value = true;
  }

const cardPayment = () => {
    swishPay.value = false;
  }


const handlePayment = () => {
    if (swishPay.value) {
        // Handle Swish payment logic here
        console.log("Swish payment initiated");
    } else {
      if (!name.value || !gmail.value || !cardNumber.value || !expiry.value || !cvv.value) {
            errorMsg.value = "Please fill in all fields";
            return;
        }
        errorMsg.value = ""; // Clear error message if all fields are filled
        
        // Handle card payment logic here
        const paymentData = {
            name: name.value,
            gmail: gmail.value,
            cardNumber: cardNumber.value,
            expiry: expiry.value,
            cvv: cvv.value,
            price: price.value,
            group: group.value
        };
        
        axios.post('/api/payments', paymentData)
            .then(response => {
                console.log("Payment successful:", response.data);
                // Handle success (e.g., redirect to a confirmation page)
            })
            .catch(error => {
                console.error("Payment error:", error);
                errorMsg.value = "Payment failed. Please try again.";
            });
        // For demonstration, we'll just log the payment data
        console.log("Payment data:", paymentData);
        console.log("Card payment initiated");
    }
}

</script>

<template>
  <div class="paymentPage" >
    <div class="paymentMethod">
      <button
        @click="cardPayment"
        id="cardButton"
        :class="{ activeButton: !swishPay }"
      >
        <img src="../../public/images/debit-card-icon.svg" alt="card" />
      </button>
      <button
        @click="swishPayment"
        id="swishButton"
        :class="{ activeButton: swishPay }"
      >
        <img src="../../public/images/swishCut.png" alt="swish" />
      </button>
    </div>
    <h2>Medlemskap: {{ group }}</h2>
    <div v-if="!swishPay" class="paymentForm">
      <div class="firstPart">
        <div class="firstColumn">
          <p v-if="errorMsg">{{ errorMsg }}</p>
          <label for="gmail">Name: </label>
          <input type="text" v-model="name" placeholder="name" id="name" />
          <label for="gmail">Gmail: </label>
          <input type="text" v-model="gmail" placeholder="example@gmail.com" id="gmail" />
          <label for="password">Card Number: </label>
          <input type="text" v-model="cardNumber" placeholder="1234-1234-1234-1234" id="cardNumber"/>
        </div>
      </div>
      <div class="secondPart">
        <label for="Expiry">Expiry</label>
        <input type="text" v-model="expiry" placeholder="MM/YY" id="Expiry"/>
        <label for="CVV">CVV/CVC</label>
        <input type="text" v-model="cvv" placeholder="CVV/CVC" id="CVV"/>
      </div>
      <button id="payButton" @click="handlePayment">Betala</button>
    </div>
    <div>
      <div v-if="swishPay">
        <h2>Swish</h2>
        <div id="QR"></div>
      </div>
    </div>
    <h4>Totala pris: {{ price }}</h4>
  </div>
</template>

<style>

.paymentMethod {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  width: 100%;
  margin:10px;
}

.paymentMethod button {
  display: flex;
  position: relative;
  margin: 10px;
  max-width: 80px;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #d3d3d3;
}

.activeButton {
  background-color: white !important;
}

.paymentMethod img {
  width: 50px;
  justify-self: center;
  align-items: center;
}

.paymentPage {
  display:flex;
  position: relative;
  background-color: black;
  width: 40%;
  color: white;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  margin:100px;
  min-height: 65vh;
}

#payButton {
  padding: 10px 20px;
  background-color: #c70000;
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.firstColumn {
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 20px;
  width: 500px;
}

.paymentPage input[type="text"],
.paymentPage input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.secondPart {
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

.secondPart label {
  margin-right: 10px;
}

.secondPart input[type="text"] {
  position: relative;
  margin-right: 5px;
  border-radius: 4px;
}

#QR {
  width: 300px;
  height: 300px;
  margin-top: 20px;
  background-color: white;
}
</style>
