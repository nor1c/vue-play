<template>
  <div>
    <div><i>Wait for 1 second</i></div>
    <br>
    <div>{{ name }}</div>
    <div>{{ state.firstName.value }} {{ state.lastName.value }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, isReactive, readonly, isProxy, isReadonly, toRaw, markRaw, shallowReactive, shallowReadonly } from 'vue'

function useFeatureX () {
  const state = reactive({
    firstName: 'Ahmad',
    lastName: 'Fauzi'
  })
  
  const stateAsRefs = toRefs(state)
  console.log('Is {stateAsRefs} reactive:', isReactive(stateAsRefs)) // output: false

  return stateAsRefs
}

export default defineComponent({
  setup() {

  // ::: Reactivity (ref, reactive, toRefs)
    const name = ref('Evan You')
    const state = useFeatureX()

    setTimeout(() => {
      // state.firstName = 'Mark' // same as below
      state.firstName.value = 'Mark' // same as above
    }, 1000);


  // ::: readonly
    const copyOfState = readonly(state)


  // ::: isReactive, isReadonly
    console.log('Is {state} reactive:', isReactive(state)) // output: true
    console.log('Is {state.firstName} reactive:', isReactive(state.firstName)) // output: false
    console.log('Is {copyOfState} reactive:', isReactive(copyOfState)) // output: true

    console.log('Is {state} readonly:', isReadonly(state)) // output: false
    console.log('Is {copyOfState} readonly:', isReadonly(copyOfState)) // output: true


  // ::: toRaw
    const foo = {}
    const reactiveFoo = reactive(foo)

    console.log(
      foo, // output: {}
      reactiveFoo, // output: Proxy {}
      toRaw(reactiveFoo), // output: {}
    )

  // ::: markRaw (Marks an object so that it will never be converted to a proxy. Returns the object itself.)
    const boo = {}
    const reactiveBoo = reactive(boo)
    console.log('Is {reactiveBoo} proxy:', isProxy(reactiveBoo)) // output: true
    console.log('Is {reactiveBoo} reactive:', isReactive(reactiveBoo)) // output: true

    const markedBoo = markRaw({
      nested: {}
    })
    const reactiveMarkedBoo = reactive(markedBoo)
    console.log('Is {reactiveMarkedBoo} proxy:', isProxy(reactiveMarkedBoo)) // output: false
    console.log('Is {reactiveMarkedBoo} reactive:', isReactive(reactiveMarkedBoo)) // output: false

    const bar = reactive({
      markedBoo,
      nested: markedBoo.nested
    })
    console.log('Is { bar.markedBoo } reactive:', isReactive(bar.markedBoo)) // output: false
    console.log('Is {markedBoo.nested} reactive:', isReactive(markedBoo.nested)) // output: false
    console.log('Is {bar.nested} reactive:', isReactive(bar.nested)) // output: false


  // ::: shallowReactive
    const nonShallowState = reactive({
      foo: 1,
      nested: {
        bar: 2
      }
    })
    nonShallowState.foo++ // output: 2 <- reactive
    nonShallowState.nested.bar++ // output: 3 <- reactive

    const shallowState = shallowReactive({
      foo: 1,
      nested: {
        bar: 2
      }
    })
    shallowState.foo++ // output: 2 <- reactive
    shallowState.nested.bar++ // output: 2 <- non-reactive


  // ::: shallowReadonly
    const shallowReadonlyState = shallowReadonly({
      foo: 1,
      nested: {
        bar: 2
      }
    })
    // shallowReadonlyState.foo++ // error: Cannot assign to 'foo' because it is a read-only property. <- non-reactive
    shallowReadonlyState.nested.bar++ // output: 3 <- reactive


    return {
      name,
      state
    }
  },
})
</script>
