
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

      { time: '13:00', type: 'training' },
    ],
  },
  {
    date: 'Fredag',
    sessions: [
      { time: '9:00', type: 'karate' },

    ],
  },
  {
    date: 'Lördag',
    sessions: [
      { time: '9:00', type: 'karate' },
      { time: '11:00', type: 'something' },
    ],
  },
  {
    date: 'Söndag',
    sessions: [
      { time: '9:00', type: 'karate' },
      { time: '11:00', type: 'something' },
      { time: '13:00', type: 'training' },
      { time: '13:00', type: 'training' },
    ],
  },

]

</script>

<template>
  <div class="scheduleInnerBox">
      <h1>Träningsschema</h1>
      <section class="schedule">
  <h2>🥋 Karate Club Weekly Schedule</h2>
  <div class="scheduleGrid">
    <div class="day">
      <h3>Monday</h3>
      <p><strong>Open:</strong> 16:00–21:00</p>
      <ul>
        <li>17:00–18:00: Kids (Beginner)</li>
        <li>18:15–19:15: Teens (Intermediate)</li>
        <li>19:30–20:30: Adults (Advanced)</li>
      </ul>
    </div>
    <div class="day">
      <h3>Tuesday</h3>
      <p><strong>Open:</strong> 17:00–20:00</p>
      <ul>
        <li>17:30–18:30: Kata Focus</li>
        <li>18:45–19:45: Sparring Practice</li>
      </ul>
    </div>
    <div class="day">
      <h3>Wednesday</h3>
      <p><strong>Open:</strong> 16:00–21:00</p>
      <ul>
        <li>17:00–18:00: Kids (Beginner)</li>
        <li>18:15–19:15: Teens (Intermediate)</li>
        <li>19:30–20:30: Adults (Advanced)</li>
      </ul>
    </div>
    <div class="day">
      <h3>Thursday</h3>
      <p><strong>Open:</strong> 17:00–20:00</p>
      <ul>
        <li>17:30–18:30: Weapons Class (Bo staff)</li>
        <li>18:45–19:45: Open Mat</li>
      </ul>
    </div>
    <div class="day">
      <h3>Friday</h3>
      <p><strong>Open:</strong> 16:00–19:00</p>
      <ul>
        <li>16:30–17:30: Fitness & Conditioning</li>
        <li>17:45–18:45: Teens & Adults (Mixed)</li>
      </ul>
    </div>
    <div class="day">
      <h3>Saturday</h3>
      <p><strong>Open:</strong> 10:00–14:00</p>
      <ul>
        <li>10:30–11:30: Kids Fun Class</li>
        <li>12:00–13:30: Belt Grading Practice</li>
      </ul>
    </div>
    <div class="day" id="sunday">
      <h3>Sunday</h3>
      <p><strong>Closed</strong></p>
      <ul>
        <li>Rest day 💤</li>
      </ul>
    </div>
  </div>
</section>

    </div>
</template>

<style>
.scheduleInnerBox {
  display: flex;
  position:relative;
  flex-direction: column;
  align-items: center;
}

.scheduleInnerBox h2 {
  display: flex;
  justify-self: center;
  text-align: center;
}

.scheduleGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 25px 25px 50px 25px;
}

.day {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  width: 20%;
  height: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 768px) {
  .scheduleGrid {
    flex-direction: column;
    align-items: center;
  }

  .day {
    width: 90%;
    margin: 10px auto;
    padding: 20px 20px 45px 20px;
  }
  
}

</style>