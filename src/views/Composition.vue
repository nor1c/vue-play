<template>
  <div>
    <h1>Composition API</h1>
    <hr>
    <div>
      <h3></h3>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

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

    onMounted(getUserRepositories)

    return {
      repositories, getUserRepositories
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