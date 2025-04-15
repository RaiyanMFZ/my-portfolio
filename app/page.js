import { BackgroundPaths } from "@/components/ui/background-paths";
import { ContactForm } from "@/components/ui/contact-form";
import { Projects } from "@/components/ui/projects";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center text-center relative z-20">
        <h2 className="text-gray-400 dark:text-gray-300 text-4xl mb-4">Hello I'm</h2>
        <h1 className="text-black dark:text-white text-6xl font-bold mb-4">Raiyan Mahfuz</h1>
        <h3 className="text-gray-400 dark:text-gray-300 text-4xl mb-8">Frontend Developer</h3>
        
        <div className="flex gap-4">
          <a
            href="/MahfuzRaiyan_Lebenslauf.pdf"
            download
            className="btn btn-black"
          >
            Download CV
          </a>
          <button
            type="button"
            className="btn btn-primary"
          >
            Contact info
          </button>
        </div>
      </div>
      
      <section id="about" className="min-h-screen py-24 flex items-center bg-white dark:bg-gray-900 relative z-10">
        <div className="max-w-screen-xl mx-auto px-4 w-full">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-500 dark:text-blue-400">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Hello! I'm Raiyan, a passionate Frontend Developer based in Frankfurt, Germany. I specialize in creating beautiful, responsive web applications with modern frameworks like React and Next.js.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                With a keen eye for design and strong technical foundation, I bridge the gap between design and development to create seamless user experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                My journey in web development started 5 years ago, and I've been continuously learning and adapting to new technologies and trends ever since.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl shadow-md">
              <h3 className="font-bold text-xl mb-4 text-gray-800 dark:text-gray-200">Personal Information</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="font-semibold w-24 text-gray-700 dark:text-gray-300">Name:</span>
                  <span className="text-gray-700 dark:text-gray-300">Raiyan Mahfuz</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24 text-gray-700 dark:text-gray-300">Location:</span>
                  <span className="text-gray-700 dark:text-gray-300">Frankfurt, Germany</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24 text-gray-700 dark:text-gray-300">Email:</span>
                  <span className="text-gray-700 dark:text-gray-300">sadgidmahfuz@gmail.com</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24 text-gray-700 dark:text-gray-300">Interests:</span>
                  <span className="text-gray-700 dark:text-gray-300">Web Design, UI/UX, Modern JS Frameworks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      
      <section id="skills" className="min-h-screen py-24 flex items-center bg-gray-50 dark:bg-gray-800 relative z-10">
        <div className="max-w-screen-xl mx-auto px-4 w-full">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-500 dark:text-blue-400">
            My Skills
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* HTML Skill */}
            <div className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-blue-500 dark:text-blue-400 text-lg">HTML</span>
                  <span className="text-sm font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                    Intermediate
                  </span>
                </div>
                <div className="w-full">
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 rounded-full transition-all duration-500 group-hover:translate-x-1"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* PYTHON Skill */}
            <div className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-green-500 dark:text-green-400 text-lg">PYTHON</span>
                  <span className="text-sm font-medium bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
                    Basics
                  </span>
                </div>
                <div className="w-full">
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 rounded-full transition-all duration-500 group-hover:translate-x-1"
                      style={{ width: '40%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CSS Skill */}
            <div className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-blue-500 dark:text-blue-400 text-lg">CSS</span>
                  <span className="text-sm font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                    Intermediate
                  </span>
                </div>
                <div className="w-full">
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 rounded-full transition-all duration-500 group-hover:translate-x-1"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* JAVASCRIPT Skill */}
            <div className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-yellow-500 dark:text-yellow-400 text-lg">JAVASCRIPT</span>
                  <span className="text-sm font-medium bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full">
                    Basics
                  </span>
                </div>
                <div className="w-full">
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-yellow-500 dark:to-yellow-700 rounded-full transition-all duration-500 group-hover:translate-x-1"
                      style={{ width: '40%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* REACT Skill */}
            <div className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-cyan-500 dark:text-cyan-400 text-lg">REACT</span>
                  <span className="text-sm font-medium bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-full">
                    Learning
                  </span>
                </div>
                <div className="w-full">
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 dark:from-cyan-500 dark:to-cyan-700 rounded-full transition-all duration-500 group-hover:translate-x-1"
                      style={{ width: '30%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* MYSQL Skill */}
            <div className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-orange-500 dark:text-orange-400 text-lg">MYSQL</span>
                  <span className="text-sm font-medium bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full">
                    Intermediate
                  </span>
                </div>
                <div className="w-full">
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-500 dark:to-orange-700 rounded-full transition-all duration-500 group-hover:translate-x-1"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* MONGODB Skill */}
            <div className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-green-500 dark:text-green-400 text-lg">MONGODB</span>
                  <span className="text-sm font-medium bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
                    Basics
                  </span>
                </div>
                <div className="w-full">
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 rounded-full transition-all duration-500 group-hover:translate-x-1"
                      style={{ width: '40%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* NODE.JS Skill */}
            <div className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-green-500 dark:text-green-400 text-lg">NODE.JS</span>
                  <span className="text-sm font-medium bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-3 py-1 rounded-full">
                    Learning
                  </span>
                </div>
                <div className="w-full">
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 to-green-600 dark:from-green-500 dark:to-green-700 rounded-full transition-all duration-500 group-hover:translate-x-1"
                      style={{ width: '30%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="projects" className="min-h-screen py-24 flex items-center bg-white dark:bg-gray-900 relative z-10">
        <div className="w-full">
          <Projects />
        </div>
      </section>
      
      <section id="contact" className="pt-24 pb-16 flex items-center bg-gray-50 dark:bg-gray-800 relative z-10">
        <div className="w-full">
          <ContactForm />
        </div>
      </section>
      
      <div className="fixed top-0 left-0 right-0 bottom-0 -z-10 w-screen h-screen">
        <BackgroundPaths title="" />
      </div>
    </>
  );
}