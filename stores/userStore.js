import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
  
  const isLoading = ref(false)
  const isMenuOverlay = ref(false)
  const cart = ref([])
  const checkout = ref([])

  // watch(
  //   pinia.state,
  //   (state) => {
  //     // persist the whole state to the local storage whenever it changes
  //     localStorage.setItem('piniaState', JSON.stringify(state))
  //   },
  //   { deep: true }
  // )

  return { 
    isLoading, 
    isMenuOverlay,
    cart,
    checkout 
  }
})
