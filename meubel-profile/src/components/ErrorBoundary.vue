<template>
  <slot v-bind="{ error }" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorBoundary',
  data() {
    return {
      error: null
    }
  },
  errorCaptured(err) {
    this.error = err
    return false // Prevent error from propagating
  }
})
</script>
