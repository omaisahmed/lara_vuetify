<template>
  <div>
 <HomeSliderComponent/>

 <v-container class="bg-surface-variant my-10">

  <v-row
      class="mb-6"
      no-gutters
    >
    <v-col cols="12" class="justify-center">
      <v-card-title class="text-h1 text-md-h3 text-lg-h2 text-center mx-auto">All things transfers</v-card-title>
    </v-col>
    </v-row>

    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col cols="6">
        <v-sheet class="pa-2 ma-2">

          <v-card
    class="mx-auto py-5"
    max-width="450"
  >
    <v-img
      src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte01c5e5b4fb344a5/6409a40a73746524c2ab5ec4/GOAL_-_Blank_WEB_-_Facebook_-_2023-03-09T091625.318.png?quality=60&format=pjpg&auto=webp&width=720"
      height="300px"
      cover
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

        </v-sheet>
      </v-col>
      <v-col
        cols="6"
      >
        <v-sheet class="pa-2 ma-2">
          <v-card
    class="mx-auto py-5"
    max-width="450"
  >
    <v-img
      src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb0115ee68f9b2d3f/63cfb93b2cf9370184a71205/pulisicccc.jpg?quality=60&format=pjpg&auto=webp&width=720"
      height="300px"
      cover
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

</div>
</template>

<script>
import HomeSliderComponent from '../components/HomeSliderComponent.vue';
export default {
  components: {
    HomeSliderComponent
      },
      data: () => ({
      show: false,
      props: {
      icon: {
        type: [Boolean, String],
        default: false
      }
      },
    }),
}
</script>
