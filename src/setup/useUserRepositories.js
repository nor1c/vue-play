import { fetchUserRepositories } from '@/api/repositories'
import { ref, toRefs, onMounted, watch, computed } from 'vue'

const useUserRepositories = (user) => {
  const repositories = ref([])
  const getUserRepositories = async () => {
    repositories.value = await fetchUserRepositories(user.value)
  }

  onMounted(getUserRepositories)
  watch(user, getUserRepositories)

  return {
    repositories,
    getUserRepositories
  }
}

export default useUserRepositories