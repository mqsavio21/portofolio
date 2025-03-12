<template>
  <div class="animated-text-container">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 overflow-hidden">
      <div class="flex flex-col relative h-[1.2em]">
        <span 
          v-for="(text, index) in headlines" 
          :key="index"
          :class="[
            'absolute w-full transition-transform duration-1000 ease-in-out',
            { 'slide-active': currentIndex === index }
          ]"
        >
          {{ text }}
        </span>
      </div>
    </h1>
    <p class="text-xl md:text-2xl text-gray-600 mb-12 animate-fade-in-up">
      Passionate programmer crafting intuitive, user-friendly web experiences.
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const headlines = [
  "Website Developer",
  "Digital Community Leader",
  "Programmer",
]

const currentIndex = ref(0)
let intervalId

const rotateHeadlines = () => {
  currentIndex.value = (currentIndex.value + 1) % headlines.length
}

onMounted(() => {
  intervalId = setInterval(rotateHeadlines, 7000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.slide-active {
  transform: translateX(0);
}

span {
  transform: translateX(100%);
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Ensure smooth sliding transitions */
span {
  transition: transform 0.8s ease-in-out;
}

/* Add sliding animations */
span:not(.slide-active) {
  transform: translateX(-100%);
}

.slide-active {
  transform: translateX(0);
}
</style> 