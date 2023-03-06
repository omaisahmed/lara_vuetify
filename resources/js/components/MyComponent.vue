<template>
    <v-container>
        <v-btn color="primary" class="bg-dark" @click="count++">You clicked me {{ count }} times.</v-btn>
        
    </v-container>
</template>

<!-- <script>
    export default {
        name: 'MyComponent',
        mounted() {
            console.log('Component mounted.')
        },
    }
</script> -->

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      count: 0
    }
  }
}
</script>
