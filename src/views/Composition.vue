<template>
  <div>
    <h1>Composition API</h1>
    <hr>
    <div>
      <h3>Basic Example of Composition API</h3>
      <div>
        {{ counter }}
        <button @click="counter++">Increase</button>
      </div>
    </div>

    <hr>
    <div>
      <div><a href="/separated-composition-api">Separeted Composition API</a></div>
      <div><a href="/composition-usage-with-templates">Usage with Templates</a></div>
      <UsageWithTemplates :collectionName="'Anything'"></UsageWithTemplates>
      <UsageWithRenderFunc :collectionName="'Anything'"></UsageWithRenderFunc>
      <div><a href="/template-refs">Template Refs</a></div>
    </div>

    <hr>
    <div>
      <h3>Provide/Inject</h3>
      <MyMarker/>
      <button @click="changeLocationToJakarta">Change location to Jakarta</button>
    </div>

    <hr>
    <div>
      <h3>Ref Unwrapping</h3>
      <span>{{ count }}</span>
      <button @click="count++">Increment count</button>
      <button @click="nested.count.value++">Nested increment count</button>
    </div>
  </div>
</template>

<script>
import { ref, toRefs, onMounted, watch, computed, toRef, provide, reactive, readonly } from 'vue'

import UsageWithTemplates from '../views/CompositionUsageWithTemplates.vue'
import UsageWithRenderFunc from '../views/CompositionUsageWithRenderFunction.vue'
import MyMarker from '../components/MyMarker.vue'

export default {
  components: {
    UsageWithTemplates,
    UsageWithRenderFunc,
    MyMarker
  },
  props: {
    user: {
      type: String,
      required: true,
    }
  },
  setup(props, context) {
    const { user } = toRefs(props)
    const { optionalProp } = toRef(props, 'optionalProp') // optional prop used toRef() instead of toRefs()

    console.log(context)

    // attributes (non-reactive object)
    console.log(context.attrs)

    // slots (non-reactive object)
    console.log(context.slots)

    // emit events (method)
    console.log(context.emit)

    const counter = ref(0)
    console.log(counter.value) // output: 0
    counter.value++
    console.log(counter.value) // output: 1

    const repositories = ref([])
    const getUserRepositories = async () => {
      // repositories.value = await fetchUserRespositories(props.user)
    }

    // mounted
    onMounted(getUserRepositories)

    // watchers
    watch(counter, (newValue, oldValue) => {
      console.log(`The new counter value is ${counter.value}`)
    })
    watch(user, getUserRepositories)

    // computed
    const twiceTheCounter = computed(() => counter.value * 2)
    counter.value++
    console.log(counter.value) // output: 2 or 1 if the code `counter.value++` doesn't exist
    console.log(twiceTheCounter.value) // output: 4 or 2

    const searchQuery = ref('')
    const repositoriesMatchingSearchQuery = computed(() => {
      return respositories.value.filter(
        repository => repository.name.includes(searchQuery.value)
      )
    })



    // using reactivity on provide/inject
    const location = ref('North Pole')
    const geoLocation = reactive({
      longitude: 90,
      latitude: 135
    })

    provide('location', readonly(location))
    provide('geoLocation', geoLocation)

    // method to change current location to Jakarta
    const changeLocationToJakarta = () => {
      console.log('changing location to Jakarta...')
      location.value = 'Jakarta'
    }

    const changeLocationToJakartaFromChild = () => {
      location.value = 'Jakarta'
    }
    provide('changeLocationFromChild', changeLocationToJakartaFromChild)



    // access in reactive objects
    const count = ref(0)
    const state = reactive({
      count
    })

    console.log('State count: ', state.count) // output: 0

    state.count = 1
    console.log('State count: ', state.count) // output: undefined
    console.log('(state) count value: ', count.value) // output: 1

    // assign new ref to a property linked to an existing ref (will replace the old ref)
    const otherCount = ref(2)
    state.count = otherCount
    console.log('Other count:', state.count) // output: 2
    console.log(count.value) // output: 1

    // ref unwrapping only happens when nested inside a reactive object. There is no unwrapping eprformed when the ref is accessed from an Array or a native collection type like Map.
    const books = reactive([ref('Vue 3 Guide')])
    console.log('Books: ', books[0].value) // need .value here // output: Vue 3 Guide

    const map = reactive(new Map([['count', ref(0)]]))
    console.log('Map: ', map.get('count').value) // output: 0



    // Destructing reactive state
    const book = reactive({
      author: 'Vue Team',
      year: '2020',
      title: 'Vue 3 Guide',
      description: 'You are reading this book right now',
      price: 'free'
    })
    let { author } = book
    console.log('Book author: ', author) // output: Vue Team

    // author.value = 'Vue Core Member'
    console.log('Book author updated: ', author) // output: will return error

    // to prevent error, use toRefs on book var
    let { title } = toRefs(book)
    console.log('Book title (toRefs) ', book.title) // should use .value, output: Vue 3 Guide

    title.value = 'Vue 3 Detailed Guide'
    console.log('Book title (toRefs) ', book.title) // output: Vue 3 Detailed Guide

    // without desctructing
    console.log(book.description) // output: You are reading this book right now
    
    book.description = 'Description changed'
    console.log(book.description) // output: Description changed


    // Prevent mutating reactive objects with 'readonly'
    const original = reactive({ count: 0 })
    const copy = readonly(original)

    original.count++
    console.log('Original count: ', original.count) // output: 1

    copy.count++ // output: Set operation on key "count" failed: target is readonly
    console.log('Copy count: ', copy.count) // output: 1



    return {
      counter,
      repositories, getUserRepositories, repositoriesMatchingSearchQuery,
      changeLocationToJakarta,
      count, 
      nested: reactive({ // when using reactive(), it will not update the count
        count
      })
    }
  },

  // Options API
  data: () => ({
    filters: {},
    searchQuery: ''
  }),
  computed: {
    filteredRepositories() {
      // 
    },
    // moved to composition API
    // repositoriesMatchingSearchQuery() { 
    //   // 
    // }
  },
  // moved to composition API
  // watch: {
  //   user: 'getUserRepositories'
  // },
  methods: {
    updateFilters() {
      // 
    }
  },
  // moved to composition API
  // mounted() {
  //   this.getUserRepositories()
  // }
}
</script>