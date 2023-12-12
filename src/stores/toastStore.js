import { defineStore } from 'pinia'

export const useToastStore = defineStore('toastStore', {
  state: () => ({
    toastInfo: {
      showToast: false,
      message: '',
      kind: ''
    }
  }),
  actions: {
    setToastInfo(value) {
      this.toastInfo = value

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
})
