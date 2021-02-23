<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Toast',
  props: ['message']
}
export const usrToastEffect = () => {
  const toastData = reactive({
    toastShow: false,
    toastMessage: ''
  })
  const showToast = (message) => {
    toastData.toastShow = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.toastShow = false
      toastData.toastMessage = ''
    }, 2000)
  }
  return { toastData, showToast }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 0.1rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: #fff;
}
</style>
