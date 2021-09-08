<template>
  <div>
    {{ messageFromMixin }}
  </div>
</template>

<script>
import HelloMixin from '../mixins/HelloMixin'

export default {
  mixins: [HelloMixin],
  methods: {
    conflicting() {
      console.log('from component')
    }
  },
  created() {
    this.conflicting() // output: from component (not `from mixin`)
  }
}
</script>