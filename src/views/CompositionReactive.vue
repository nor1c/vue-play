<template>
  <div>
    <div><i>Wait for 1 second</i></div>
    <br>
    <div>{{ name }}</div>
    <div>{{ state.firstName.value }} {{ state.lastName.value }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue'

function useFeatureX () {
  const state = reactive({
    firstName: 'Ahmad',
    lastName: 'Fauzi'
  })

  const stateAsRefs = toRefs(state)

  return stateAsRefs
}

export default defineComponent({
  setup() {
    const name = ref('Evan Lee')

    const state = useFeatureX()
    
    setTimeout(() => {
      // state.firstName = 'Mark'
      state.firstName.value = 'Mark'
    }, 1000);

    return {
      name,
      state
    }
  },
})
</script>
