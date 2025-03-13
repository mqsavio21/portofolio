<template>
  <LoadingScreen v-if="isLoading" ref="loadingScreen" @loading-complete="handleLoadingComplete" />
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <!-- Navigation -->
    <nav class="bg-white dark:bg-gray-900 shadow-sm fixed w-full z-10 transition-colors duration-300">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center h-20">
          <div class="text-xl font-bold text-gray-800 dark:text-white" style="font-family: 'Adobe Caslon Pro', serif; font-style: italic;">M SAVIO QALBY VP</div>
          <div class="flex items-center space-x-4">
            <!-- Dark mode toggle button -->
            <button 
              @click="toggleDarkMode" 
              class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              <!-- Sun icon for dark mode -->
              <svg 
                v-if="isDarkMode" 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6 text-yellow-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <!-- Moon icon for light mode -->
              <svg 
                v-else 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6 text-gray-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <!-- Mobile menu button -->
            <button class="md:hidden p-2" @click="toggleMobileMenu">
              <svg class="w-6 h-6 text-gray-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
            <!-- Navigation links -->
            <div class="hidden md:flex space-x-8">
              <a href="#work" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Work</a>
              <a href="#projects" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
              <a href="#about" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About</a>
            </div>
          </div>
        </div>
        <div v-show="isMobileMenuOpen" class="md:hidden py-4">
          <div class="flex flex-col space-y-4">
            <a href="#work" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Work</a>
            <a href="#projects" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
            <a href="#about" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="relative pt-32 pb-20 text-center">
      <div class="absolute inset-0 z-0">
        <img 
          src="/images/bghero.jpg" 
          alt="Background" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gray-100 bg-opacity-50"></div>
      </div>
      <div class="relative z-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedHeroText />
        <img 
          src="/images/official.jpg" 
          alt="Profile" 
          class="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-12 shadow-lg object-cover border-4 border-white"
        />
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Left Column - Get to know me -->
          <div>
            <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-8">Get to know me!</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              As a website developer and digital community leader, I have built engaging web experiences using modern frameworks like Laravel, Codeigniter, ReactJS, and Tailwind CSS. My journey includes collaborating & developing responsive web applications, and leading online communities in esports and virtual communities.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              I also have experience in managing and coaching gaming communities, helping players refine their skills, develop team strategies, and grow within the competitive scene. I've mentored aspiring players, organized training programs, and built structured learning materials to enhance their gameplay.
            </p>
          </div>

          <!-- Right Column - Skills -->
          <div>
            <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-8">My Skills</h2>
            <div class="flex flex-wrap gap-4">
              <span class="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">HTML</span>
              <span class="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">CSS</span>
              <span class="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">JavaScript</span>
              <span class="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">React</span>
              <span class="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">Vue.js</span>
              <span class="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">PHP</span>
              <span class="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">SASS</span>
              <span class="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">Laravel</span>
              <span class="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">Github</span>
              <span class="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">Responsive Design</span>
              <span class="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">Codeigniter</span>
              <span class="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">SQL</span>
              <span class="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">Tailwind CSS</span>
              <span class="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">C++</span>
              <span class="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">C#</span>
              <span class="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 text-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Education</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Bachelor Degree -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow duration-300">
            <div class="flex flex-col gap-8">
              <!-- University Logo -->
              <div class="flex items-center justify-center">
                <img 
                  src="/images/binus.png" 
                  alt="Binus University Logo" 
                  class="h-24 object-contain"
                />
              </div>
              <!-- Content -->
              <div>
                <div class="flex flex-col justify-between mb-4">
                  <h3 class="text-2xl font-bold text-gray-800 dark:text-white">Bachelor of Computer Science</h3>
                  <span class="text-gray-600 dark:text-gray-400">2020 - 2024</span>
                </div>
                <div class="flex flex-col justify-between mb-4">
                  <span class="text-xl text-gray-700 dark:text-gray-300">Bina Nusantara University - Cyber Security Major</span>
                  <span class="text-lg text-blue-600 font-semibold">GPA: 3.39/4.00</span>
                </div>
                <p class="text-gray-600 dark:text-gray-400 mb-4">Relevant Coursework:</p>
                <div class="grid grid-cols-1 gap-4">
                  <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>Data Structures and Algorithm Design Analysis</li>
                    <li>English for Business Communication</li>
                    <li>Secure Programming</li>
                    <li>Network Penetration Testing</li>
                    <li>Object-Oriented Programming</li>
                    <li>Computer Networks</li>
                    <li>Operating Systems</li>
                    <li>Artificial Intelligence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Study Abroad Programme -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow duration-300">
            <div class="flex flex-col gap-8">
              <!-- University Logo -->
              <div class="flex items-center justify-center">
                <img 
                  src="/images/utm.png" 
                  alt="UTM Logo" 
                  class="h-24 object-contain"
                />
              </div>
              <!-- Content -->
              <div>
                <div class="flex flex-col justify-between mb-4">
                  <h3 class="text-2xl font-bold text-gray-800 dark:text-white">Study Abroad Programme</h3>
                  <span class="text-gray-600 dark:text-gray-400">March 2023 - July 2023</span>
                </div>
                <div class="flex flex-col justify-between mb-4">
                  <span class="text-xl text-gray-700 dark:text-gray-300">Universiti Teknologi Malaysia</span>
                  <span class="text-lg text-blue-600 font-semibold">GPS: 3.38/4.00</span>
                </div>
                <p class="text-gray-600 dark:text-gray-400 mb-4">Exchange student program focusing on advanced computer science courses and cross-cultural academic experience.</p>
                <div class="grid grid-cols-1 gap-4">
                  <ul class="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                    <li>Science & Technology Thinking</li>
                    <li>Theory of Computer Science</li>
                    <li>Professional Communication Skills</li>
                    <li>Special Topics in Computer Science & Security</li>
                    <li>Technopreneurship</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Experience Section -->
    <section class="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Work Experience</h2>
        <div class="space-y-12">
          <!-- PT INTI Experience -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow duration-300">
            <div class="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 class="text-2xl font-bold text-gray-800 dark:text-white">Intern Programmer</h3>
                <span class="text-xl text-gray-700 dark:text-gray-300">PT INTI (Persero)</span>
              </div>
              <span class="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">September 2023 - February 2024</span>
            </div>
            
            <div class="mt-6">
              <p class="text-gray-600 dark:text-gray-400 font-medium mb-4">Work Description:</p>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-2 w-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <p class="text-gray-600 dark:text-gray-400">
                    Finished front-end website development using AdminLTE, CodeIgniter 4 and connected to SQL database with CRUD function in less than a month alone.
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-2 w-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <p class="text-gray-600 dark:text-gray-400">
                    Created authentication application mobile key design using Figma for 2 Weeks.
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-2 w-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <p class="text-gray-600 dark:text-gray-400">
                    Created Portal Dashboard I-Key design using Figma for 2 Weeks.
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-2 w-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <p class="text-gray-600 dark:text-gray-400">
                    Performed Maintenance on SQL Database of INTI collectible loans with approximately 900 user data.
                  </p>
                </li>
              </ul>
            </div>

            <!-- Skills Used -->
            <div class="mt-6">
              <p class="text-gray-600 dark:text-gray-400 font-medium mb-3">Technologies Used:</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300">CodeIgniter 4</span>
                <span class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300">AdminLTE</span>
                <span class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300">SQL</span>
                <span class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300">Figma</span>
                <span class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300">PHP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Work Section -->
    <section id="work" class="py-20">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">My Recent Work</h2>
        <p class="text-xl text-center text-gray-600 dark:text-gray-300 mb-16">Here are a few works I've worked on.</p>
        <!-- Work Items -->
        <div class="space-y-24">
          <!-- Work Item 1 -->
          <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="w-full md:w-3/5">
              <div class="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-[0_20px_50px_rgba(184,_178,_170,_0.7)] transition-shadow duration-300 bg-white dark:bg-gray-800">
                <img 
                  src="/images/vior.png" 
                  alt="Project 1" 
                  class="w-full h-[400px] object-cover"
                />
                <div class="absolute inset-0 bg-[#5c9cc9] dark:bg-[#4a7da1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div class="text-white text-center px-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 class="text-3xl font-bold mb-4">VIOR Tower Website</h3>
                    <p class="text-lg text-gray-100 mb-8">Community academy based for Indonesia Vtuber Valorant players</p>
                    <a 
                      href="https://viortower.com/" 
                      target="_blank" 
                      class="inline-block px-8 py-3 bg-white text-blue-500 rounded-full hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-2/5">
              <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-6">VIOR Tower Website</h2>
              <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                VIOR Tower is a non-profit community academy based for Indonesian Valorant players, particularly those who identify as vstreamers or vtubers which founded in October 2023.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300">HTML</span>
                <span class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300">Tailwind CSS</span>
                <span class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300">React</span>
                <span class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300">Laravel</span>
              </div>
            </div>
          </div>

          <!-- Work Item 2 -->
          <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="w-full md:w-3/5">
              <div class="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-[0_20px_50px_rgba(59,_130,_246,_0.7)] transition-shadow duration-300 bg-white dark:bg-gray-800">
                <img 
                  src="/images/mta.png" 
                  alt="Project 2" 
                  class="w-full h-[400px] object-cover"
                />
                <div class="absolute inset-0 bg-[#20bbaa] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div class="text-white text-center px-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 class="text-3xl font-bold mb-4">Mall Taman Anggrek Website (2025)</h3>
                    <p class="text-lg text-gray-100 mb-8">Shopping center located in South Tanjung Duren</p>
                    <a 
                      href="https://www.taman-anggrek-mall.com/" 
                      target="_blank" 
                      class="inline-block px-8 py-3 bg-white text-[#20bbaa] rounded-full hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-2/5">
              <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-6">Mall Taman Anggrek Website (2025)</h2>
              <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Developed 80% of the frontend using HTML, Tailwind CSS, and JavaScript in a collaborative project. Focused on responsive design to ensure an optimal user experience across various devices.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300">HTML</span>
                <span class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300">Tailwind CSS</span>
                <span class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300">JavaScript</span>
              </div>
            </div>
          </div>

          <!-- Work Item 3 -->
          <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="w-full md:w-3/5">
              <div class="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-[0_20px_50px_rgba(74,_85,_104,_0.7)] transition-shadow duration-300 bg-white dark:bg-gray-800">
                <img 
                  src="/images/inti.png" 
                  alt="Project 3" 
                  class="w-full h-[400px] object-cover"
                />
                <div class="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div class="text-white text-center px-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 class="text-3xl font-bold mb-4">PT INTI (Persero) Collectible Loans webpage</h3>
                    <p class="text-lg text-gray-100 mb-8">Web-based platform used for managing and tracking loans related to collectible assets</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-2/5">
              <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-6">PT INTI (Persero) Collectible Loans webpage</h2>
              <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Developed an internal web application using CodeIgniter 4 and AdminLTE for the dashboard interface focused on secure data management and user interactions but remained private due to company confidentiality during my internship.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300">CodeIgniter</span>
                <span class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300">PHP</span>
                <span class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300">MySQL</span>
                <span class="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-300">AdminLTE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- University Projects Section -->
    <section id="projects" class="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">University Projects</h2>
        <p class="text-xl text-center text-gray-600 dark:text-gray-300 mb-16">Here are some notable projects I've developed during my academic journey.</p>
        
        <ProjectCarousel />
      </div>
    </section>

    <!-- Community & Organization Experience -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Community & Organization Experience</h2>
        <div class="space-y-12">
          <!-- VIOR Tower -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 hover:shadow-[0_20px_50px_rgba(92,_156,_201,_0.7)] transition-shadow duration-300">
            <div class="flex flex-col md:flex-row gap-8">
              <!-- Logo -->
              <div class="flex items-center justify-center md:w-1/4">
                <img 
                  src="/images/viorlogo.png" 
                  alt="VIOR Tower Logo" 
                  class="h-32 md:h-40 object-contain"
                />
              </div>
              <!-- Content -->
              <div class="md:w-3/4">
                <div class="flex flex-col md:flex-row justify-between mb-4">
                  <h3 class="text-2xl font-bold text-gray-800 dark:text-white">Founder & Community Manager</h3>
                  <span class="text-gray-600 dark:text-gray-400">2023 - Present</span>
                </div>
                <div class="flex flex-col md:flex-row justify-between mb-4">
                  <span class="text-xl text-gray-700 dark:text-gray-300">VIOR Tower</span>
                  <span class="text-lg text-[#5c9cc9] font-semibold">Esports Community</span>
                </div>
                <p class="text-gray-600 dark:text-gray-400 mb-4">Key Achievements:</p>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 h-2 w-2 bg-[#5c9cc9] dark:bg-[#4a7da1] rounded-full mt-2.5 mr-4"></div>
                    <div>
                      <span class="font-semibold text-gray-800 dark:text-white">Event & Community Management</span>
                      <p class="text-gray-600 dark:text-gray-400">Organized and managed multiple Valorant events with 40+ participants, growing the community server to 390+ members.</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 h-2 w-2 bg-[#5c9cc9] dark:bg-[#4a7da1] rounded-full mt-2.5 mr-4"></div>
                    <div>
                      <span class="font-semibold text-gray-800 dark:text-white">Coaching & Talent Development</span>
                      <p class="text-gray-600 dark:text-gray-400">Coached and guided 80+ Vtubers, 3 academic instructors, and managed 5 Valorant teams, leading them to victory in 11 tournaments.</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 h-2 w-2 bg-[#5c9cc9] dark:bg-[#4a7da1] rounded-full mt-2.5 mr-4"></div>
                    <div>
                      <span class="font-semibold text-gray-800 dark:text-white">Scouting & Content Creation</span>
                      <p class="text-gray-600 dark:text-gray-400">Recruited and mentored 9 talents, including managers and content creators, while developing training schedules and content strategies.</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 h-2 w-2 bg-[#5c9cc9] dark:bg-[#4a7da1] rounded-full mt-2.5 mr-4"></div>
                    <div>
                      <span class="font-semibold text-gray-800 dark:text-white">Educational Contributions</span>
                      <p class="text-gray-600 dark:text-gray-400">Created study materials covering 10+ fundamental Valorant concepts to support player development and game understanding.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- MT -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 hover:shadow-[0_20px_50px_rgba(59,_130,_246,_0.7)] transition-shadow duration-300">
            <div class="flex flex-col md:flex-row gap-8">
              <!-- Logo -->
              <div class="flex items-center justify-center md:w-1/4">
                <img 
                  src="/images/mt.png" 
                  alt="HIMTI Logo" 
                  class="h-32 md:h-40 object-contain"
                />
              </div>
              <!-- Content -->
              <div class="md:w-3/4">
                <div class="flex flex-col md:flex-row justify-between mb-4">
                  <h3 class="text-2xl font-bold text-gray-800 dark:text-white">General Treasurer</h3>
                  <span class="text-gray-600 dark:text-gray-400">2022 - 2023</span>
                </div>
                <div class="flex flex-col md:flex-row justify-between mb-4">
                  <span class="text-xl text-gray-700 dark:text-gray-300">BINUS Al-Khawarizmi Islamic Student Association</span>
                  <span class="text-lg text-blue-600 font-semibold">Religious organization</span>
                </div>
                <p class="text-gray-600 dark:text-gray-400 mb-4">Key Achievements:</p>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 h-2 w-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2.5 mr-4"></div>
                    <div>
                      <span class="font-semibold text-gray-800 dark:text-white">Club & Financial Management</span>
                      <p class="text-gray-600 dark:text-gray-400">Oversaw a 5M+ rupiah budget, monitored expenses, approved payments, and maintained financial stability.</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 h-2 w-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2.5 mr-4"></div>
                    <div>
                      <span class="font-semibold text-gray-800 dark:text-white">Strategic Collaboration</span>
                      <p class="text-gray-600 dark:text-gray-400">Worked with 10+ executive members to drive club initiatives and ensure successful operations.</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 h-2 w-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2.5 mr-4"></div>
                    <div>
                      <span class="font-semibold text-gray-800 dark:text-white">Transparency & Accountability</span>
                      <p class="text-gray-600 dark:text-gray-400">Prepared and presented monthly financial reports to members and faculty advisors.</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 h-2 w-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2.5 mr-4"></div>
                    <div>
                      <span class="font-semibold text-gray-800 dark:text-white">Leadership Development</span>
                      <p class="text-gray-600 dark:text-gray-400">Designed and led a Basic Activist Leadership Training Program for 40+ college students.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Student Council Team -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 hover:shadow-[0_20px_50px_rgba(34,_197,_94,_0.7)] transition-shadow duration-300">
            <div class="flex flex-col md:flex-row gap-8">
              <!-- Logo -->
              <div class="flex items-center justify-center md:w-1/4">
                <img 
                  src="/images/ais.png" 
                  alt="Esports Logo" 
                  class="h-32 md:h-40 object-contain"
                />
              </div>
              <!-- Content -->
              <div class="md:w-3/4">
                <div class="flex flex-col md:flex-row justify-between mb-4">
                  <h3 class="text-2xl font-bold text-gray-800 dark:text-white">Highschool Student Council</h3>
                  <span class="text-gray-600 dark:text-gray-400">2018 - 2019</span>
                </div>
                <div class="flex flex-col md:flex-row justify-between mb-4">
                  <span class="text-xl text-gray-700 dark:text-gray-300">Al-Irsyad Satya Islamic School</span>
                  <span class="text-lg text-green-600 font-semibold">Student Council</span>
                </div>
                <p class="text-gray-600 dark:text-gray-400 mb-4">Key Achievements:</p>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 h-2 w-2 bg-green-500 dark:bg-green-400 rounded-full mt-2.5 mr-4"></div>
                    <div>
                      <span class="font-semibold text-gray-800 dark:text-white">Event Promotion & Engagement</span>
                      <p class="text-gray-600 dark:text-gray-400">Worked with 20+ council members to boost school event attendance through strategic communication.</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 h-2 w-2 bg-green-500 dark:bg-green-400 rounded-full mt-2.5 mr-4"></div>
                    <div>
                      <span class="font-semibold text-gray-800 dark:text-white">Student Representation</span>
                      <p class="text-gray-600 dark:text-gray-400">Delivered speeches and updates to 120+ students, acting as the voice of the student council in assemblies and meetings.</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex-shrink-0 h-2 w-2 bg-green-500 dark:bg-green-400 rounded-full mt-2.5 mr-4"></div>
                    <div>
                      <span class="font-semibold text-gray-800 dark:text-white">Orientation Leadership</span>
                      <p class="text-gray-600 dark:text-gray-400">Designed and led a comprehensive School Orientation Period for 120+ new students, organizing ceremonies, competitions, and gatherings to create a welcoming environment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Testimonials</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <p class="text-gray-600 dark:text-gray-400 italic mb-6">"Working with [Your Name] was a pleasure. Their attention to detail and technical expertise helped bring our vision to life."</p>
            <div class="flex items-center">
              <img src="https://via.placeholder.com/50" alt="Client" class="w-12 h-12 rounded-full mr-4"/>
              <div>
                <h4 class="font-bold text-gray-800 dark:text-white">Client Name</h4>
                <p class="text-gray-600 dark:text-gray-400">Position, Company</p>
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
          <a href="https://github.com/mqsavio21" class="hover:text-blue-400"><i class="fab fa-github text-2xl"></i></a>
          <a href="https://www.linkedin.com/in/mqsaviovp/" class="hover:text-blue-400"><i class="fab fa-linkedin text-2xl"></i></a>
          <a href="https://www.instagram.com/mqsavio21/" class="hover:text-blue-400"><i class="fab fa-instagram text-2xl"></i></a>
        </div>
        <p class="mt-4 text-sm text-gray-500">Copyright © 2024</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LoadingScreen from './components/LoadingScreen.vue'
import AnimatedHeroText from './components/AnimatedHeroText.vue'
import ProjectCarousel from './components/ProjectCarousel.vue'

const isLoading = ref(true)
const loadingScreen = ref(null)
const isMobileMenuOpen = ref(false)
const isDarkMode = ref(false)

// Initialize dark mode from localStorage
onMounted(() => {
  // Check if user has a saved preference
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
    updateTheme(isDarkMode.value)
  } else {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDarkMode.value = prefersDark
    updateTheme(prefersDark)
  }

  setTimeout(() => {
    loadingScreen.value?.startTransition()
  }, 3000)
})

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  updateTheme(isDarkMode.value)
}

const updateTheme = (dark) => {
  localStorage.setItem('theme', dark ? 'dark' : 'light')
  
  if (dark) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.add('color-theme-in-transition')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('color-theme-in-transition')
  }
  
  window.setTimeout(() => {
    document.documentElement.classList.remove('color-theme-in-transition')
  }, 300)
}

const handleLoadingComplete = () => {
  isLoading.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style>
@font-face {
  font-family: 'Adobe Caslon Pro';
  src: url('/fonts/ACaslonPro-Italic.woff2') format('woff2'),
       url('/fonts/ACaslonPro-Italic.woff') format('woff');
  font-style: italic;
}

.wave-pattern {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23f3f4f6' fill-opacity='1' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
}

@media (max-width: 640px) {
  .text-4xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
  
  .text-3xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  
  .text-2xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

html {
  scroll-behavior: smooth;
}

/* Add dark mode transition */
.dark {
  color-scheme: dark;
}

/* Ensure smooth transitions for color changes */
* {
  transition-property: color, background-color, border-color;
  transition-duration: 300ms;
}

/* Add smooth transition for theme changes */
.color-theme-in-transition,
.color-theme-in-transition *,
.color-theme-in-transition *:before,
.color-theme-in-transition *:after {
  transition: all 300ms !important;
  transition-delay: 0 !important;
}

/* Ensure dark mode text is readable */
.dark {
  color-scheme: dark;
}

.dark ::selection {
  background-color: #2563eb;
  color: #fff;
}

/* Adjust card shadows for dark mode */
.dark .shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.25);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

/* Adjust hover effects for dark mode */
.dark .hover\:shadow-lg:hover {
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.6), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>