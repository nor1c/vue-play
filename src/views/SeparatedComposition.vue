<template>
  <div>
    <h1>Separated Composition API</h1>
    <div>

    </div>
  </div>
</template>

<script>
import useSearch from '../setup/useRepositoryNameSearch'
import useRepositories from '../setup/useUserRepositories'
import { toRefs } from 'vue'

export default {
  props: {
    user: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { user } = toRefs(props)
    const { repositories, getUserRepositories } = useRepositories(user)
    const { searchQuery, repositoriesMatchingSearchQuery } = useSearch(repositories)

    return {
      repositories: repositoriesMatchingSearchQuery,
      getUserRepositories,
      searchQuery
    }
  },
  data: () => ({
    filters: {}
  }),
  computed: {
    filteredRepositories() {
      // 
    }
  },
  methods: {
    updateFilters() {
      // 
    }
  }
}
</script>