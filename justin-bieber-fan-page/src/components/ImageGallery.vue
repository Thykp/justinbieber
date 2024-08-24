<!-- /src/components/ImageGallery.vue -->
<template>
    <div class="gallery">
      <h1>Justin Bieber Fan Page</h1>
      <p class="subtitle">A collection of images celebrating the one and only Justin Bieber!</p>
      <div class="image-grid">
        <div v-for="(image, index) in images" :key="image" class="image-container">
          <div v-if="selectedImage === index" class="description-container" @click="selectedImage = null">
            <p>{{ getDescription(image) }}</p>
            <button @click.stop="selectedImage = null">Close</button>
          </div>
          <img v-else :src="`/images/${image}`" :alt="`Justin Bieber - ${image}`" @click="selectedImage = index" />
        </div>
      </div>
      <button @click="goToMusicDashboard" class="music-button">Go to Music Dashboard</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: ['justin1.jpg', 'justin2.jpg', 'justin3.jpg', 'justin4.jpg', 'justin5.jpg', 'justin6.jpg'],
        selectedImage: null, // Track which image is selected
      };
    },
    methods: {
      getDescription(image) {
        const descriptions = {
          'justin1.jpg': 'Justin Bieber at a concert in 2020.',
          'justin2.jpg': 'Justin Bieber’s iconic look from the “Purpose” album.',
          'justin3.jpg': 'A casual day out with Justin Bieber.',
          'justin4.jpg': 'Justin Bieber on the red carpet in 2021.',
          'justin5.jpg': 'Justin Bieber performing live on stage.',
          'justin6.jpg': 'Justin Bieber’s behind-the-scenes moment.',
        };
        return descriptions[image] || 'Description not available.';
      },
      goToMusicDashboard() {
        this.$router.push('/music-dashboard');
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;700&display=swap');
  
  .gallery {
    text-align: center;
    padding: 40px;
    background: linear-gradient(135deg, #f3a683, #f7d794, #786fa6);
    color: #fff;
    font-family: 'Raleway', sans-serif;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    max-width: 1200px;
    margin: 0 auto;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    font-weight: 700;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  }
  
  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 40px;
    font-weight: 300;
    color: #ffeaa7;
  }
  
  .image-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .image-container {
    width: 280px;
    height: 280px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
  }
  
  .image-container:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
  
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }
  
  .image-container img:hover {
    transform: scale(1.1);
  }
  
  .description-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 20px;
    border-radius: 20px;
    box-sizing: border-box;
  }
  
  .description-container p {
    margin-bottom: 20px;
    font-size: 1.2rem;
    text-align: center;
  }
  
  .description-container button {
    background: #f3a683;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .description-container button:hover {
    background: #f7d794;
  }
  
  .music-button {
    background: #feca57;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 40px;
    transition: background 0.3s;
  }
  
  .music-button:hover {
    background: #ff6b6b;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  
    .subtitle {
      font-size: 1.2rem;
    }
  
    .image-container {
      width: 220px;
      height: 220px;
    }
  }
  </style>
  