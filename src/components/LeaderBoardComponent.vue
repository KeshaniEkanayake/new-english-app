<!-- Leaderboard.vue -->
<template>
    <div>

    <div class="top3-cards">
      <div v-for="user in top3Users" :key="user.rank" class="top3-card">
        <img :src="user.profilePicture" alt="Profile" class="profile-picture">
        <h3>{{ user.rank }}</h3>
        <p> {{ user.name }}</p>
        <p>Points: {{ user.points }}</p>
      </div>
    </div>

      <table>
        <thead>
          <tr>
            <th class="rank-header">Rank</th>
            <th class="user-header">User</th>
            <th class="points-header">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.rank" :class="{ 'top3': top3Users.includes(user) }">
            <td>{{ user.rank }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [
          { rank: 1, name: 'User 1', points: 100, profilePicture: '/assets/images/avatars/avatarOne.png' },
          { rank: 2, name: 'User 2', points: 90, profilePicture: '@/assets/images/avatars/avatarOne.png' },
          { rank: 3, name: 'User 3', points: 80, profilePicture: '@/assets/images/avatars/avatarOne.png' },
          { rank: 4, name: 'User 4', points: 70 },
          { rank: 5, name: 'User 5', points: 60 }
        ]
      };
    },
    computed: {
      top3Users() {
        return this.users.slice(0, 3);
      }
    }
  };
  </script>
  
  <style scoped>
  table {
    border-collapse: collapse;
    margin-top: 90px;
    width: 80%; /* Adjust the width as needed */
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 15px;
    text-align: center;
  }
  
  th {
    background-color: #0C4F80; /* Dark green */
    color: white;
    width: 200px;
  }
  
  .top3 {
    background-color: #f8efbb; /* Yellow */
  }

  .top3-cards {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.top3-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 25%;
}

.top3-card h3 {
  margin-bottom: 10px;
  color: #4CAF50; /* Dark green */
}

.top3-card p {
  margin: 5px 0;
  color: #333;
}

.profile-picture {
  width: 80px; /* Adjust the width as needed */
  height: 80px; /* Adjust the height as needed */
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}
  </style>
  