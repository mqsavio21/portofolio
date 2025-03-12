<template>
  <LoadingScreen v-if="isLoading" ref="loadingScreen" @loading-complete="handleLoadingComplete" />
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm fixed w-full z-10">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center h-20">
          <div class="text-xl font-bold text-gray-800" style="font-family: 'Adobe Caslon Pro', serif; font-style: italic;">SAVIO</div>
          <div class="hidden md:flex space-x-8">
            <a href="#work" class="text-gray-600 hover:text-blue-500">Work</a>
            <a href="#projects" class="text-gray-600 hover:text-blue-500">Projects</a>
            <a href="#about" class="text-gray-600 hover:text-blue-500">About</a>
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
      <div class="relative z-1 max-w-6xl mx-auto px-4">
        <AnimatedHeroText />
        <img 
          src="/images/official.jpg" 
          alt="Profile" 
          class="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-12 shadow-lg object-cover border-4 border-white"
        />
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-100">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Left Column - Get to know me -->
          <div>
            <h2 class="text-4xl font-bold text-gray-800 mb-8">Get to know me!</h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-8">
              As a website developer and digital community leader, I have built engaging web experiences using modern frameworks like Laravel, Codeigniter, ReactJS, and Tailwind CSS. My journey includes collaborating & developing responsive web applications, and leading online communities in esports and virtual communities.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed mb-8">
              I also have experience in managing and coaching gaming communities, helping players refine their skills, develop team strategies, and grow within the competitive scene. I've mentored aspiring players, organized training programs, and built structured learning materials to enhance their gameplay.
            </p>
          </div>

          <!-- Right Column - Skills -->
          <div>
            <h2 class="text-4xl font-bold text-gray-800 mb-8">My Skills</h2>
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
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Education</h2>
        <div class="space-y-12">
          <!-- Bachelor Degree -->
          <div class="bg-white rounded-xl shadow-2xl p-8 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow duration-300">
            <div class="flex flex-col md:flex-row gap-8">
              <!-- University Logo -->
              <div class="flex items-center justify-center md:w-1/4">
              <img 
                src="/images/binus.png" 
                alt="Binus University Logo" 
                class="h-24 object-contain"
              />
            </div>
              <!-- Content -->
              <div class="md:w-3/4">
            <div class="flex flex-col md:flex-row justify-between mb-4">
              <h3 class="text-2xl font-bold text-gray-800">Bachelor of Computer Science</h3>
              <span class="text-gray-600">2020 - 2024</span>
            </div>
            <div class="flex flex-col md:flex-row justify-between mb-4">
              <span class="text-xl text-gray-700">Bina Nusantara University - Cyber Security Major</span>
              <span class="text-lg text-blue-600 font-semibold">GPA: 3.39/4.00</span>
            </div>
            <p class="text-gray-600 mb-4">Relevant Coursework:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul class="list-disc list-inside text-gray-600">
                <li>Data Structures and Algorithm Design Analysis</li>
                <li>English for Business Communication</li>
                <li>Secure Programming</li>
                <li>Network Penetration Testing</li>
              </ul>
              <ul class="list-disc list-inside text-gray-600">
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
          <div class="bg-white rounded-xl shadow-2xl p-8 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow duration-300">
            <div class="flex flex-col md:flex-row gap-8">
              <!-- University Logo -->
              <div class="flex items-center justify-center md:w-1/4">
              <img 
                src="/images/utm.png" 
                alt="UTM Logo" 
                class="h-24 object-contain"
              />
            </div>
              <!-- Content -->
              <div class="md:w-3/4">
            <div class="flex flex-col md:flex-row justify-between mb-4">
              <h3 class="text-2xl font-bold text-gray-800">Study Abroad Programme</h3>
              <span class="text-gray-600">March 2023 - July 2023</span>
            </div>
            <div class="flex flex-col md:flex-row justify-between mb-4">
              <span class="text-xl text-gray-700">Universiti Teknologi Malaysia</span>
              <span class="text-lg text-blue-600 font-semibold">GPS: 3.38/4.00</span>
            </div>
            <p class="text-gray-600 mb-4">Exchange student program focusing on advanced computer science courses and cross-cultural academic experience.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul class="list-disc list-inside text-gray-600">
                <li>Science & Technology Thinking</li>
                <li>Theory of Computer Science</li>
                <li>Professional Communication Skills</li>
              </ul>
              <ul class="list-disc list-inside text-gray-600">
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
    <section class="py-20 bg-gray-100">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Work Experience</h2>
        <div class="space-y-12">
          <!-- PT INTI Experience -->
          <div class="bg-white rounded-xl shadow-2xl p-8 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow duration-300">
            <div class="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 class="text-2xl font-bold text-gray-800">Intern Programmer</h3>
                <span class="text-xl text-gray-700">PT INTI (Persero)</span>
              </div>
              <span class="text-gray-600 mt-2 md:mt-0">September 2023 - February 2024</span>
            </div>
            
            <div class="mt-6">
              <p class="text-gray-600 font-medium mb-4">Work Description:</p>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <p class="text-gray-600">
                    Finished front-end website development using AdminLTE, CodeIgniter 4 and connected to SQL database with CRUD function in less than a month alone.
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <p class="text-gray-600">
                    Created authentication application mobile key design using Figma for 2 Weeks.
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <p class="text-gray-600">
                    Created Portal Dashboard I-Key design using Figma for 2 Weeks.
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <p class="text-gray-600">
                    Performed Maintenance on SQL Database of INTI collectible loans with approximately 900 user data.
                  </p>
                </li>
              </ul>
            </div>

            <!-- Skills Used -->
            <div class="mt-6">
              <p class="text-gray-600 font-medium mb-3">Technologies Used:</p>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">CodeIgniter 4</span>
                <span class="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">AdminLTE</span>
                <span class="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">SQL</span>
                <span class="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">Figma</span>
                <span class="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">PHP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Work Section -->
    <section id="work" class="py-20">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">My Recent Work</h2>
        <p class="text-xl text-center text-gray-600 mb-16">Here are a few works I've worked on.</p>
        <!-- Work Items -->
        <div class="space-y-24">
          <!-- Work Item 1 -->
          <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="w-full md:w-3/5">
              <div class="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-[0_20px_50px_rgba(184,_178,_170,_0.7)] transition-shadow duration-300 bg-white">
                <img 
                  src="/images/vior.png" 
                  alt="Project 1" 
                  class="w-full h-[400px] object-cover"
                />
                <div class="absolute inset-0 bg-[#5c9cc9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
              <h2 class="text-4xl font-bold text-gray-800 mb-6">VIOR Tower Website</h2>
              <p class="text-xl text-gray-600 leading-relaxed mb-6">
                VIOR Tower is a non-profit community academy based for Indonesian Valorant players, particularly those who identify as vstreamers or vtubers which founded in October 2023.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">HTML</span>
                <span class="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">Tailwind CSS</span>
                <span class="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">React</span>
                <span class="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">Laravel</span>
              </div>
            </div>
          </div>

          <!-- Work Item 2 -->
          <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="w-full md:w-3/5">
              <div class="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-[0_20px_50px_rgba(59,_130,_246,_0.7)] transition-shadow duration-300 bg-white">
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
              <h2 class="text-4xl font-bold text-gray-800 mb-6">Mall Taman Anggrek Website (2025)</h2>
              <p class="text-xl text-gray-600 leading-relaxed mb-6">
                Developed 80% of the frontend using HTML, Tailwind CSS, and JavaScript in a collaborative project. Focused on responsive design to ensure an optimal user experience across various devices.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">HTML</span>
                <span class="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">Tailwind CSS</span>
                <span class="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">JavaScript</span>
              </div>
            </div>
          </div>

          <!-- Work Item 3 -->
          <div class="flex flex-col md:flex-row gap-12 items-center">
            <div class="w-full md:w-3/5">
              <div class="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-[0_20px_50px_rgba(74,_85,_104,_0.7)] transition-shadow duration-300 bg-white">
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
              <h2 class="text-4xl font-bold text-gray-800 mb-6">PT INTI (Persero) Collectible Loans webpage</h2>
              <p class="text-xl text-gray-600 leading-relaxed mb-6">
                Developed an internal web application using CodeIgniter 4 and AdminLTE for the dashboard interface focused on secure data management and user interactions but remained private due to company confidentiality during my internship.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">CodeIgniter</span>
                <span class="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">PHP</span>
                <span class="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">MySQL</span>
                <span class="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-800">AdminLTE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- University Projects Section -->
    <section id="projects" class="py-20 bg-gray-100">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">University Projects</h2>
        <p class="text-xl text-center text-gray-600 mb-16">Here are some notable projects I've developed during my academic journey.</p>
        
        <ProjectCarousel />
      </div>
    </section>

    <!-- Community & Leadership Experience -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Community & Leadership Experience</h2>
        <p class="text-xl text-center text-gray-600 mb-16">Leading and building communities in gaming and technology.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- VIOR Tower -->
          <div class="bg-white p-8 rounded-xl shadow-xl hover:shadow-[0_20px_50px_rgba(92,_156,_201,_0.7)] transition-shadow duration-300">
            <div class="flex items-center mb-6">
              <img src="/images/vior-logo.png" alt="VIOR Tower" class="w-16 h-16 rounded-lg mr-4 object-cover"/>
              <div>
                <h4 class="text-xl font-bold text-gray-800">Founder & Community Manager</h4>
                <p class="text-gray-600">VIOR Tower</p>
              </div>
            </div>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <div class="flex-shrink-0 h-2 w-2 bg-[#5c9cc9] rounded-full mt-2 mr-3"></div>
                <p>Founded and managed a community of 50+ VTuber Valorant players</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 h-2 w-2 bg-[#5c9cc9] rounded-full mt-2 mr-3"></div>
                <p>Organized monthly tournaments and training programs</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 h-2 w-2 bg-[#5c9cc9] rounded-full mt-2 mr-3"></div>
                <p>Developed structured learning materials for player improvement</p>
              </li>
            </ul>
          </div>

          <!-- HIMTI -->
          <div class="bg-white p-8 rounded-xl shadow-xl hover:shadow-[0_20px_50px_rgba(59,_130,_246,_0.7)] transition-shadow duration-300">
            <div class="flex items-center mb-6">
              <img src="/images/himti-logo.png" alt="HIMTI" class="w-16 h-16 rounded-lg mr-4 object-cover"/>
              <div>
                <h4 class="text-xl font-bold text-gray-800">Division Coordinator</h4>
                <p class="text-gray-600">HIMTI BINUS University</p>
              </div>
            </div>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <div class="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <p>Led the Research & Development division in student organization</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <p>Coordinated technology workshops and seminars for 200+ students</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <p>Managed team projects and research initiatives</p>
              </li>
            </ul>
          </div>

          <!-- Esports Team -->
          <div class="bg-white p-8 rounded-xl shadow-xl hover:shadow-[0_20px_50px_rgba(34,_197,_94,_0.7)] transition-shadow duration-300">
            <div class="flex items-center mb-6">
              <img src="/images/esports-logo.png" alt="Esports" class="w-16 h-16 rounded-lg mr-4 object-cover"/>
              <div>
                <h4 class="text-xl font-bold text-gray-800">Team Coach & Manager</h4>
                <p class="text-gray-600">Collegiate Esports Team</p>
              </div>
            </div>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <div class="flex-shrink-0 h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <p>Coached university Valorant team in competitive tournaments</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <p>Developed team strategies and training schedules</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 h-2 w-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <p>Achieved top rankings in regional competitions</p>
              </li>
            </ul>
          </div>

          <!-- Community Projects -->
          <div class="bg-white p-8 rounded-xl shadow-xl hover:shadow-[0_20px_50px_rgba(168,_85,_247,_0.7)] transition-shadow duration-300">
            <div class="flex items-center mb-6">
              <img src="/images/community-logo.png" alt="Community" class="w-16 h-16 rounded-lg mr-4 object-cover"/>
              <div>
                <h4 class="text-xl font-bold text-gray-800">Community Project Lead</h4>
                <p class="text-gray-600">Tech Community Initiatives</p>
              </div>
            </div>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <div class="flex-shrink-0 h-2 w-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <p>Organized coding bootcamps and workshops</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 h-2 w-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <p>Mentored junior developers in web development</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0 h-2 w-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <p>Built online learning resources and documentation</p>
              </li>
            </ul>
          </div>
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

const handleLoadingComplete = () => {
  isLoading.value = false
}

onMounted(() => {
  setTimeout(() => {
    loadingScreen.value?.startTransition()
  }, 3000)
})
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
</style>