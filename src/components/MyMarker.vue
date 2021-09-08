<template>
  <div>
    <p>{{ userLocation }} {{ userGeolocation }}</p>
    <button @click="changeLocation">Change location to Jakarta from child</button>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  setup() {
    const userLocation = inject('location', 'The Universe (default value)')
    const userGeolocation = inject('geoLocation')
    const changeLocation = inject('changeLocationFromChild')

    return {
      userLocation,
      userGeolocation,
      changeLocation
    }
  }
}
</script>