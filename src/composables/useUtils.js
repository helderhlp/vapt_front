import { ref, computed, onMounted } from 'vue'

export function useUtils() {
  const convertToReal = (value) =>
    Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)

  const windowWidth = ref(0)
  const MOBILE_WIDTH = 992

  const handleResize = () => {
    windowWidth.value = window.outerWidth
  }

  onMounted(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
  })

  const isMobileScreen = computed(() => windowWidth.value <= MOBILE_WIDTH)

  return { convertToReal, isMobileScreen }
}
