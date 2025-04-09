
<script setup>

import { ref } from 'vue';
const days = ref(['Mån', 'Tis', 'Ons', 'Tors', 'Fre', 'Lör', 'Sön']);

const daysData = [
  {
    date: 'Måndag',
    sessions: [
      { time: '9:00', type: 'karate' },
      { time: '11:00', type: '' },
      { time: '13:00', type: '' },
    ],
  },
  {
    date: 'Tisdag',
    sessions: [
      { time: '9:00', type: 'karate' },
      { time: '11:00', type: 'junior träning' },
      { time: '13:00', type: 'vuxen' },
    ],
  },
  {
    date: 'Onsdag',
    sessions: [
      { time: '9:00', type: 'karate' },
      { time: '11:00', type: 'something' },
      { time: '13:00', type: 'training' },
    ],
  },
  {
    date: 'Torsdag',
    sessions: [
      { time: '9:00', type: 'karate' },
      { time: '11:00', type: 'something' },
      { time: '13:00', type: 'training' },
    ],
  },
  {
    date: 'Fredag',
    sessions: [
      { time: '9:00', type: 'karate' },
      { time: '11:00', type: 'something' },
      { time: '13:00', type: 'training' },
    ],
  },
  {
    date: 'Lördag',
    sessions: [
      { time: '9:00', type: 'karate' },
      { time: '11:00', type: 'something' },
      { time: '13:00', type: 'training' },
    ],
  },
  {
    date: 'Söndag',
    sessions: [
      { time: '9:00', type: 'karate' },
      { time: '11:00', type: 'something' },
      { time: '13:00', type: 'training' },
    ],
  },

]

</script>

<template>
  <div class="scheduleInnerBox">
      <h1>Träningsschema</h1>
      <div class="schedule">
        <div v-for="(day, index) in daysData" :key="day.date" class="dayBox">
          <h2>{{ day.date }}</h2>
          <div class="line"></div>
          <div v-for="session in day.sessions" :key="session.time" class="sessionBox">
            <p>{{ session.time }} - {{ session.type || 'No session' }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
.scheduleInnerBox {
  display: flex;
  position:relative;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}

.schedule {
  display: flex;
  position:relative;
  flex-wrap: wrap;
  height: 80%;
  width: 90%;
  background-color: black;
  justify-content: space-evenly;
  align-items: center;
}

.schedule .line {
  width: 100%;
  height: 2px;
  background-color: black;
}

.dayBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12%;
  height: 90%;
  background-color: #fff;
  border-radius: 10px;
}

.sessionBox {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40%;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin-bottom: 10px;
}

</style>