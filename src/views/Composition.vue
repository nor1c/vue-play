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
    </div>

    <hr>
    <div>
      <h3>Provide/Inject</h3>
      <MyMarker/>
      <button @click="changeLocationToJakarta">Change location to Jakarta</button>
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

    return {
      counter,
      repositories, getUserRepositories, repositoriesMatchingSearchQuery,
      changeLocationToJakarta
    }
  },
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