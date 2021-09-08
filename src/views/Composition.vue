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
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'

export default {
  props: {
    user: {
      type: String,
      required: true
    }
  },
  setup(props) {
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

    return {
      counter,
      repositories, getUserRepositories,
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
    repositoriesMatchingSearchQuery() {
      // 
    }
  },
  watch: {
    user: 'getUserRepositories'
  },
  methods: {
    updateFilters() {
      // 
    }
  },
  mounted() {
    this.getUserRepositories()
  }
}
</script>