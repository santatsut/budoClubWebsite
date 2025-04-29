<script setup>
import { inject } from 'vue';

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
  loggedIn: {
    type: Boolean,
    default: false,
  }
});

const loggedIn = inject('loggedIn');

const logOut = () => {
  loggedIn.value = false;
  localStorage.setItem('loggedIn',false);
};
</script>

<template>

  <nav>
    <div class="mainNav">
      <div class="leftSide">
        <RouterLink to="/profile" v-if="loggedIn">
          <img src="../../public/images/person.svg" alt="userProfile" id="user">
        </RouterLink>
        <RouterLink to="/shop">
          <img src="../../public/images/shoppingBagIcon.svg" alt="shop" id="shop">
        </RouterLink>
      </div>
      <div id="name">
        <h1>{{ msg }}</h1>
        <img src="../../public/images/whiteBelt.svg" alt="logo" id="logo">
      </div>
      <div class="rightSide">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/medlem" v-if="!loggedIn">Login</RouterLink>
        <RouterLink to="/" @click="logOut" v-if="loggedIn">Logout</RouterLink>
      </div>
    </div>
  </nav>
  <div class="mobileNav">
    <RouterLink to="/shop">
        <img src="../../public/images/shoppingBagIcon.svg" alt="shop" id="mobileShop">
    </RouterLink>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/medlem" v-if="!loggedIn">Login</RouterLink>
    <RouterLink to="/" @click="logOut" v-if="loggedIn">Logout</RouterLink>
    <RouterLink to="/profile" v-if="loggedIn">
          <img src="../../public/images/person.svg" alt="userProfile" id="user">
    </RouterLink>
  </div>
</template>


<style scoped>

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  flex: 1;
}

.mainNav {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

nav h1 {
  color: rgb(255, 255, 255);
  margin: 5px 0 5px 0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  letter-spacing: 5px;
}

.rightSide {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
  align-items: center;
  margin: 10px;
  flex: 1;
}

.mobileNav {
  display: none;
  position: relative;
  background-color: black;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  flex: 1;
}

.mobileNav a {
  display: flex;
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.leftSide {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
  align-items: center;
  margin: 10px;
  color: white;
  flex: 1;
}

#user {
  display: flex;
  position: relative;
  width: 50px;
  margin: 0px;
}

#shop {
  position: relative;
  display: flex;
  width: 50px;
  height: 50px;
  margin: 0px;
  color: white;
}

#mobileShop {
  display: none;
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0px;
}

#logo {
  width: 50px;
  margin: 0px;
  color: white;
}


#loggedIn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 200px;
  color:white;
}

#name {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
  color:white;
  flex: 1;
}

nav a {
  display: flex;
  text-decoration: none;
  color: rgb(255, 255, 255);
}

nav a:hover {
  transform: scale(1.05);
}

h3 {
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .rightSide {
    display: none;
  }

  .mobileNav {
    display: flex;
    position: relative;
    padding: 10px;
    border: none;
  }
    
  .mainNav {
    display: block;
    width: auto;
  }
  nav {
    margin: 0;
    border: none;
  }

  #mobileShop {
    display: flex;
    position: relative;
    width: 50px;
    margin: 0px;
  }

  #shop {
    display: none;
  }

}

</style>
