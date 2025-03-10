<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm fixed w-full z-10">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center h-20">
          <div class="text-xl font-bold text-gray-800">Your Logo</div>
          <div class="hidden md:flex space-x-8">
            <a href="#work" class="text-gray-600 hover:text-blue-500">Work</a>
            <a href="#projects" class="text-gray-600 hover:text-blue-500">Projects</a>
            <a href="#about" class="text-gray-600 hover:text-blue-500">About</a>
            <button class="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
              Say Hello
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-32 pb-20 text-center">
      <div class="max-w-4xl mx-auto px-4">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          Designer, Frontend Developer & Mentor
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 mb-12">
          I design and code beautifully simple things, and I love what I do.
        </p>
        <img src="https://via.placeholder.com/200" alt="Profile" class="rounded-full w-48 h-48 mx-auto mb-12 shadow-lg"/>
        <div class="wave-pattern h-32 bg-gray-100"></div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-100">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Hi, I'm [Your Name]. Nice to meet you.</h2>
        <p class="text-xl text-gray-600 leading-relaxed mb-20">
          Since beginning my journey as a developer, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my skills.
        </p>
        
        <!-- Skills Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Frontend Development -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-blue-500 mb-6">
              <i class="fas fa-code text-4xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Frontend Developer</h3>
            <p class="text-gray-600 mb-6">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
            
            <h4 class="font-bold text-gray-800 mb-3">Languages:</h4>
            <p class="text-gray-600 mb-6">HTML, CSS, JavaScript, Vue.js, React</p>
            
            <h4 class="font-bold text-gray-800 mb-3">Dev Tools:</h4>
            <ul class="text-gray-600">
              <li>VS Code</li>
              <li>Tailwind CSS</li>
              <li>Github</li>
              <li>Terminal</li>
            </ul>
          </div>

          <!-- Backend Development -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-green-500 mb-6">
              <i class="fas fa-server text-4xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Backend Developer</h3>
            <p class="text-gray-600 mb-6">I enjoy creating robust and scalable server-side solutions that power web applications.</p>
            
            <h4 class="font-bold text-gray-800 mb-3">Languages:</h4>
            <p class="text-gray-600 mb-6">Node.js, Python, PHP, SQL</p>
            
            <h4 class="font-bold text-gray-800 mb-3">Dev Tools:</h4>
            <ul class="text-gray-600">
              <li>Docker</li>
              <li>AWS</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          <!-- Mentorship -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <div class="text-purple-500 mb-6">
              <i class="fas fa-users text-4xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">Mentor</h3>
            <p class="text-gray-600 mb-6">I genuinely care about helping others grow in their development journey.</p>
            
            <h4 class="font-bold text-gray-800 mb-3">Experience Areas:</h4>
            <p class="text-gray-600 mb-6">Web Development, Career Growth, Best Practices</p>
            
            <h4 class="font-bold text-gray-800 mb-3">Highlights:</h4>
            <ul class="text-gray-600">
              <li>Technical Workshops</li>
              <li>Code Reviews</li>
              <li>1-on-1 Mentoring</li>
              <li>Team Leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Work Section -->
    <section id="work" class="py-20">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">My Recent Work</h2>
        <p class="text-xl text-center text-gray-600 mb-16">Here are a few past projects I've worked on. Want to see more? Email me.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project Cards -->
          <div class="group relative overflow-hidden rounded-lg shadow-lg bg-white">
            <img src="https://via.placeholder.com/600x400" alt="Project 1" class="w-full transition transform group-hover:scale-105"/>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 transition">
              <div class="absolute bottom-0 p-6 text-white">
                <h3 class="text-xl font-bold mb-2">Project Name</h3>
                <p class="mb-4">Brief project description goes here</p>
                <button class="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
                  View Project
                </button>
              </div>
            </div>
          </div>
          <!-- Repeat for other projects -->
        </div>
      </div>
    </section>

    <!-- Side Projects Section -->
    <section id="projects" class="py-20 bg-gray-100">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">My Startup Projects</h2>
        <p class="text-xl text-center text-gray-600 mb-16">I'm a bit of a digital product junky. Here are a few projects I've worked on.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Startup Project Cards -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <img src="https://via.placeholder.com/80" alt="Project Logo" class="w-20 h-20 mb-4"/>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Project Name</h3>
            <p class="text-gray-600 mb-4">Brief description of the startup project</p>
            <a href="#" class="text-blue-500 hover:text-blue-600">Learn More →</a>
          </div>
          <!-- Repeat for other startup projects -->
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Testimonials</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <p class="text-gray-600 italic mb-6">"Working with [Your Name] was a pleasure. Their attention to detail and technical expertise helped bring our vision to life."</p>
            <div class="flex items-center">
              <img src="https://via.placeholder.com/50" alt="Client" class="w-12 h-12 rounded-full mr-4"/>
              <div>
                <h4 class="font-bold text-gray-800">Client Name</h4>
                <p class="text-gray-600">Position, Company</p>
              </div>
            </div>
          </div>
          <!-- Repeat for other testimonials -->
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-blue-500 text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Interested in collaborating with me?</h2>
        <p class="text-xl mb-8">I'm always open to discussing product design work or partnership opportunities.</p>
        <button class="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Start a Conversation
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-gray-800 text-white">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <div class="flex justify-center space-x-6 mb-8">
          <a href="#" class="hover:text-blue-400"><i class="fab fa-github text-2xl"></i></a>
          <a href="#" class="hover:text-blue-400"><i class="fab fa-linkedin text-2xl"></i></a>
          <a href="#" class="hover:text-blue-400"><i class="fab fa-twitter text-2xl"></i></a>
        </div>
        <p class="text-gray-400">Living, learning, & leveling up one day at a time.</p>
        <p class="mt-4 text-sm text-gray-500">Handcrafted by me © 2024</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// You can add any required Vue.js logic here
</script>

<style>
.wave-pattern {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23f3f4f6' fill-opacity='1' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
}
</style>