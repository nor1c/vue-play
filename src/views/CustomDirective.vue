<template>
  <div>
    <div>
      <h3>Custom Directive (globally)</h3>
      <input type="text" v-focus placeholder="Try to reload this page, the custom directive `v-focus` will auto focusing on me. (globally)" size="80">
    </div>

    <hr>
    <div>
      <h3>Custom Directive but from component (locally)</h3>
      <input type="text" v-focus-locally placeholder="Auto focus but for this component only (locally, not globally)" size="50">
    </div>

    <hr>
    <div>
      <h3>Dynamic Directive Arguments</h3>
      <div v-bg-color="'black'" :style="{ width: '200px', height: '200px' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    focusLocally: {
      mounted(el) {
        el.focus()
      }
    },
    bgColor: {
      mounted(el, binding) {
        el.style.background = binding.value
      }
    },
  }
}
</script>