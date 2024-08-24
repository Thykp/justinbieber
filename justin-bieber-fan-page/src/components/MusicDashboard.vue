<!-- /src/components/MusicDashboard.vue -->
<template>
    <div class="dashboard">
      <div class="content">
        <h1>Music Dashboard</h1>
        <p>Welcome to the Justin Bieber Music Dashboard. Here is a list of his popular tracks!</p>
        
        <div class="music-list">
          <div 
            v-for="(track, index) in tracks" 
            :key="track.id" 
            class="track-item"
            :class="{ 'reveal': selectedTrack === index }"
            @click="toggleTrack(index)"
          >
            <div class="track-info">
              <h3>{{ track.title }}</h3>
              <p>{{ track.album }}</p>
              <p>Release Date: {{ track.releaseDate }}</p>
            </div>
            <div v-if="selectedTrack === index" class="track-details">
              <p>{{ track.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <button @click="goBack" class="back-button">Back to Gallery</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MusicDashboard',
    data() {
      return {
        tracks: [
          { id: 1, title: 'Baby', album: 'My World 2.0', releaseDate: '2010-01-01', description: 'A debut single that took the world by storm.' },
          { id: 2, title: 'Sorry', album: 'Purpose', releaseDate: '2015-10-23', description: 'An apology anthem with a catchy beat.' },
          { id: 3, title: 'Love Yourself', album: 'Purpose', releaseDate: '2015-11-09', description: 'A heartfelt song about self-love.' },
          { id: 4, title: 'What Do You Mean?', album: 'Purpose', releaseDate: '2015-08-28', description: 'A track with a blend of pop and electronic sounds.' },
          { id: 5, title: 'Peaches', album: 'Justice', releaseDate: '2021-03-19', description: 'A feel-good song with a summer vibe.' },
          { id: 6, title: 'Ghost', album: 'Justice', releaseDate: '2021-10-08', description: 'A song about longing and loss.' },
        ],
        selectedTrack: null, // Track which song is currently selected
      };
    },
    methods: {
      toggleTrack(index) {
        this.selectedTrack = this.selectedTrack === index ? null : index;
      },
      goBack() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 40px;
    background: linear-gradient(135deg, #ff9ff3, #feca57, #ff6b6b);
    color: #fff;
    font-family: 'Raleway', sans-serif;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .content {
    flex: 1; /* Take up available space */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    font-weight: 700;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 40px;
    font-weight: 300;
  }
  
  .music-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .track-item {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 15px;
    width: 80%;
    max-width: 600px;
    position: relative;
    overflow: hidden;
    transition: transform 0.5s ease;
    cursor: pointer;
  }
  
  .track-item.reveal {
    transform: translateX(-100%);
  }
  
  .track-info {
    transition: opacity 0.5s ease;
  }
  
  .track-item.reveal .track-info {
    opacity: 0;
  }
  
  .track-details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    transition: opacity 0.5s ease;
  }
  
  .track-details p {
    text-align: center;
  }
  
  .back-button {
    background: #ff6b6b;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
    margin-top: 20px;
  }
  
  .back-button:hover {
    background: #ff9ff3;
  }
  </style>
  