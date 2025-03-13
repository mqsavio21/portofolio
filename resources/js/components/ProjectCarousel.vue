<template>
  <div class="relative">
    <!-- Carousel Container -->
    <div class="overflow-hidden">
      <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(project, index) in projects" :key="index" class="w-full flex-shrink-0">
          <div class="flex flex-col md:flex-row gap-8 items-center px-4">
            <!-- Left side - Image -->
            <div class="w-full md:w-1/2">
              <div class="group relative overflow-hidden rounded-xl bg-white">
                <img 
                  :src="project.image" 
                  :alt="project.title" 
                  class="w-full h-[300px] object-cover"
                />
                <div :class="`absolute inset-0 ${project.overlayColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`">
                  <div class="text-white text-center px-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 class="text-2xl font-bold mb-4">{{ project.title }}</h3>
                    <p class="text-lg text-gray-100 mb-6">{{ project.shortDescription }}</p>
                    <div v-if="project.links" class="flex justify-center gap-4">
                      <a 
                        v-for="(link, linkIndex) in project.links" 
                        :key="linkIndex"
                        :href="link.url" 
                        target="_blank" 
                        :class="`inline-block px-6 py-2 bg-white ${project.buttonTextColor} rounded-full hover:bg-gray-100 transition-colors duration-300 font-semibold`"
                      >
                        {{ link.text }} →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Right side - Content -->
            <div class="w-full md:w-1/2">
              <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">{{ project.title }}</h3>
              <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(tech, techIndex) in project.technologies" 
                  :key="techIndex"
                  class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button 
      @click="prevSlide" 
      class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button 
      @click="nextSlide" 
      class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Dots Navigation -->
    <div class="flex justify-center mt-8 gap-2">
      <button 
        v-for="(_, index) in projects" 
        :key="index"
        @click="goToSlide(index)"
        :class="`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)

const projects = [
  {
    title: "Kayan Augmented Reality Business Prototype",
    image: "/images/kayan.png",
    shortDescription: "Create 3D models and catalog books of the items sold in the marketplace.",
    description: "An augmented reality business that receives requests from furniture businesses who want to create 3D models and catalog books of their items sold in the marketplace. 3D models of the items can be accessed with our application.",
    technologies: ["Unity", "Augmented Reality", "Canva"],
    overlayColor: "bg-[#b8b2aa]",
    buttonTextColor: "text-[#b8b2aa]",
    links: [
      {
        text: "View Pitchdeck",
        url: "https://www.canva.com/design/DAFXOlBgYKI/6VnMllKfL_hjjHnI5yGEbA/edit?utm_content=DAFXOlBgYKI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      },
      {
        text: "Download APK",
        url: "https://drive.google.com/file/d/1SYWSdcv2hDMlQ5-Dbglst70ue8JKlJIo/view?usp=sharing"
      }
    ]
  },
  {
    title: "Tomodachi Marketplace Design",
    image: "/images/tomodachi.png",
    shortDescription: "Marketplace to buy/sell/rent cosplay costumes",
    description: "Design of a dedicated online marketplace for cosplay enthusiasts to buy, sell, and rent high-quality cosplay costumes. The platform connects cosplayers, costume makers, and collectors, offering a seamless experience for browsing, listing, and securing costumes for conventions, photoshoots, and events.",
    technologies: ["Figma", "Html", "CSS"],
    overlayColor: "bg-blue-500",
    buttonTextColor: "text-blue-500",
    links: [
      {
        text: "View Infographics",
        url: "https://www.canva.com/design/DAFZ96Sm418/-DG9WO5yx5ntKXFYgF53BA/edit?utm_content=DAFZ96Sm418&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      },
      {
        text: "View Prototype",
        url: "https://www.figma.com/proto/0v1lC0mgRgUmLbwBLJEbU7/Tomodachi?type=design&node-id=1-7&t=5yQcToZGH5c5h0WW-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A7"
      }
    ]
  },
  {
    title: "Published Research Paper",
    image: "/images/paper.png",
    shortDescription: "Conduct a comprehensive research study on customer satisfaction with Traveloka's services",
    description: "Conduct a comprehensive research study on customer satisfaction with Traveloka's services. The study involved collecting and analyzing user feedback to assess overall satisfaction levels, identifying key pain points, and determining factors that contribute to positive and negative experiences. Utilizing sentiment analysis techniques, we processed customer reviews to quantify satisfaction rates and provide actionable insights into service improvements.",
    technologies: ["Python", "API", "SVM Model"],
    overlayColor: "bg-[#4a5568]",
    buttonTextColor: "text-[#4a5568]",
    links: [
      {
        text: "View Paper",
        url: "#"
      }
    ]
  },
  {
    title: "Final Thesis",
    image: "/images/thesis.png",
    shortDescription: "Submitted as one of the requirements for a bachelor's degree in the Informatics Engineering / Computer Science Study Program, Strata-1 Education Level",
    description: "Development of Educational Games as A Learning Medium for Sign Languange Alphabet Using Deep Learning Technology for Object Identification.",
    technologies: ["Computer Vision", "Deep Learning", "Sign Language", "YOLOX"],
    overlayColor: "bg-[#4a5568]",
    buttonTextColor: "text-[#4a5568]"
  },
  {
    title: "Published Article",
    image: "/images/article.png",
    shortDescription: "The Development and Popularity of Vtubers in the Digital Era",
    description: "This article discusses how digital technology has influenced various aspects of people's lives, including the emergence of the Virtual Youtuber (Vtuber) phenomenon as a new form of content creator.",
    technologies: ["Article", "Informative", "Virtual Youtuber"],
    overlayColor: "bg-[#4a5568]",
    buttonTextColor: "text-[#4a5568]",
    links: [
      {
        text: "Read Article",
        url: "https://binus.ac.id/bandung/2020/09/article/"
      }
    ]
  }
]

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + projects.length) % projects.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}
</script> 