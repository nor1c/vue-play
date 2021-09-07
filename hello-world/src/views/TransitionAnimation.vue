<template>
  <div>
    <div>
      <h3>Class-based Animations & Transitions</h3>
      <div>
        Push this button to do something you shouldn't be doing:
        <div :class="{ shake: noActivated }">
          <button @click="noActivated = !noActivated">Click me</button>
          <span v-if="noActivated">Oh no!</span>
        </div>
      </div>
    </div>

    <hr>
    <div @mousemove="xCoordinate" :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }" class="movearea">
      <h3>Transition with Style Bindings</h3>
      <div>
        <h3>Move your mouse accross the screen</h3>
        <p>x: {{ x }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    noActivated: false,
    x: 0
  }),
  methods: {
    xCoordinate(e) {
      this.x = e.clientX
    }
  }
}
</script>

<style scoped>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
.movearea {
  transition: 0.2s background-color ease;
}
</style>