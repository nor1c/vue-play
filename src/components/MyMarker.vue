<template>
  <div>
    {{ userLocation }} {{ userGeolocation }}
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  setup() {
    const userLocation = inject('location', 'The Universe (default value)')
    const userGeolocation = inject('geoLocation')

    return {
      userLocation,
      userGeolocation
    }
  }
}
</script>