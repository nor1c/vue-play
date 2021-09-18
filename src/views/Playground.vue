<template>
  <div>
    <Icon @click="showHello" />
  </div>
</template>

<script>
import Icon from '../components/Icon'

export default {
  components: {
    Icon
  },
  methods: {
    showHello: function() {
      alert('Hello!')
    }
  }
}
</script>