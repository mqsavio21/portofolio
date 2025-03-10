<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg fixed w-full z-10">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="text-xl font-bold text-gray-800">Portfolio</div>
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#about" class="text-gray-600 hover:text-blue-600">About</a>
            <a href="#skills" class="text-gray-600 hover:text-blue-600">Skills</a>
            <a href="#projects" class="text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#contact" class="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div class="max-w-7xl mx-auto px-4 py-20">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Hi, I'm [Your Name]</h1>
          <p class="text-xl md:text-2xl mb-8">Full Stack Developer</p>
          <button class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
            Get in Touch
          </button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">About Me</h2>
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-full md:w-1/2">
            <img src="https://via.placeholder.com/400" alt="Profile" class="rounded-lg shadow-lg mx-auto"/>
          </div>
          <div class="w-full md:w-1/2">
            <p class="text-gray-600 text-lg leading-relaxed">
              I'm a passionate full-stack developer with experience in building modern web applications.
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="p-6 bg-white rounded-lg shadow-md text-center">
            <i class="fas fa-code text-3xl text-blue-600 mb-4"></i>
            <h3 class="font-semibold">Frontend</h3>
            <p class="text-gray-600">HTML, CSS, JavaScript</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow-md text-center">
            <i class="fas fa-server text-3xl text-blue-600 mb-4"></i>
            <h3 class="font-semibold">Backend</h3>
            <p class="text-gray-600">Node.js, PHP, Python</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow-md text-center">
            <i class="fas fa-database text-3xl text-blue-600 mb-4"></i>
            <h3 class="font-semibold">Database</h3>
            <p class="text-gray-600">MySQL, MongoDB</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow-md text-center">
            <i class="fas fa-tools text-3xl text-blue-600 mb-4"></i>
            <h3 class="font-semibold">Tools</h3>
            <p class="text-gray-600">Git, Docker, AWS</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x250" alt="Project 1" class="w-full"/>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2">Project 1</h3>
              <p class="text-gray-600 mb-4">Description of your amazing project goes here.</p>
              <div class="flex gap-2">
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Vue.js</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Laravel</span>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x250" alt="Project 2" class="w-full"/>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2">Project 2</h3>
              <p class="text-gray-600 mb-4">Description of your amazing project goes here.</p>
              <div class="flex gap-2">
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Node.js</span>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://via.placeholder.com/400x250" alt="Project 3" class="w-full"/>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2">Project 3</h3>
              <p class="text-gray-600 mb-4">Description of your amazing project goes here.</p>
              <div class="flex gap-2">
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Python</span>
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Django</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div class="max-w-3xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div class="text-center p-6">
              <i class="fas fa-envelope text-3xl text-blue-600 mb-4"></i>
              <h3 class="font-semibold mb-2">Email</h3>
              <p class="text-gray-600">your.email@example.com</p>
            </div>
            <div class="text-center p-6">
              <i class="fas fa-phone text-3xl text-blue-600 mb-4"></i>
              <h3 class="font-semibold mb-2">Phone</h3>
              <p class="text-gray-600">+1 234 567 890</p>
            </div>
          </div>
          <div class="flex justify-center space-x-6">
            <a href="#" class="text-gray-600 hover:text-blue-600">
              <i class="fab fa-github text-2xl"></i>
            </a>
            <a href="#" class="text-gray-600 hover:text-blue-600">
              <i class="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" class="text-gray-600 hover:text-blue-600">
              <i class="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// You can add any required Vue.js logic here
</script>