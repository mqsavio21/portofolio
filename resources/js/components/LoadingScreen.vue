<template>
  <div class="loading-screen" :class="{ 'fade-out': isComplete }">
    <div class="loading-content">
      <h1 class="loading-text">Welcome to My Portfolio</h1>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['loading-complete'])
const isComplete = ref(false)

// Export method to trigger fade out
const startTransition = () => {
  isComplete.value = true
  // Emit after animation completes
  setTimeout(() => {
    emit('loading-complete')
  }, 1000) // Match this with animation duration
}

// Expose the method to parent
defineExpose({ startTransition })
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  z-index: 9999;
  opacity: 1;
  transition: opacity 1s ease-in-out;
}

.loading-screen.fade-out {
  opacity: 0;
}

.loading-content {
  text-align: center;
}

.loading-text {
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeIn 2s ease-in-out infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes fadeIn {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}
</style>