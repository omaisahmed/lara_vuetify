<template>
    <div>
    <v-carousel
      :cycle="true"
      :interval="5000"
      hide-delimiters
      height="auto"
      style="overflow: hidden;"
    >
      <v-carousel-item v-for="(image, index) in images" :key="index">
        <v-img :src="image.src" :alt="image.alt" contain />
      </v-carousel-item>
    </v-carousel>
   </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
  
        images: [
          {
            src: 'https://thumbs.dreamstime.com/b/football-world-cup-background-banner-soccer-championship-football-world-cup-background-banner-soccer-championship-qatar-230974578.jpg',
            alt: 'First slide',
          },
          {
            src: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt94b87c5b22861706/64090c87b363ee1ce4689122/Goal_HIC_-_Facebook_(10).jpg',
            alt: 'Second slide',
          },
          {  
            src: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6aef62b674ab6064/640ae7c8b080122e5f86493b/Goal_HIC_-_Facebook.jpg',
            alt: 'Third slide',    
          },
          {
            src: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte444622fd54bb478/64103a171792955a88ce457e/NXGN_2017_HIC_2-1.jpg?quality=80&width=1920&format=pjpg&auto=webp',
            alt: 'Fourth slide',
          },
        ],
        
      };
    },
  };
  </script>
  