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
      <h3>Separated Composition API</h3>
      <a href="/separated-composition-api">Separeted Composition API</a>
    </div>
  </div>
</template>

<script>
import { ref, toRefs, onMounted, watch, computed } from 'vue'

export default {
  props: {
    user: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { user } = toRefs(props)

    const counter = ref(0)
    console.log(counter.value) // output: 0
    counter.value++
    console.log(counter.value) // output: 1

    const repositories = ref([])
    const getUserRepositories = async () => {
      repositories.value = await fetchUserRespositories(props.user)
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

    return {
      counter,
      repositories, getUserRepositories, repositoriesMatchingSearchQuery
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