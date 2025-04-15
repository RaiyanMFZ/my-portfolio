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
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Frontend Category */}
            <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-blue-500 dark:text-blue-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Frontend Development</h3>
              </div>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">HTML/CSS</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-blue-500 dark:text-blue-400">95%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-indigo-500 rounded-full group-hover:animate-pulse" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">JavaScript</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-blue-500 dark:text-blue-400">90%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-indigo-500 rounded-full group-hover:animate-pulse" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">React</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-blue-500 dark:text-blue-400">88%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-indigo-500 rounded-full group-hover:animate-pulse" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Frameworks Category */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/20 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-purple-500 dark:text-purple-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Frameworks & Libraries</h3>
              </div>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">Next.js</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-purple-500 dark:text-purple-400">85%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 dark:from-purple-500 dark:to-indigo-500 rounded-full group-hover:animate-pulse" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">Tailwind CSS</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-purple-500 dark:text-purple-400">92%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 dark:from-purple-500 dark:to-indigo-500 rounded-full group-hover:animate-pulse" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">Redux</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-purple-500 dark:text-purple-400">80%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 dark:from-purple-500 dark:to-indigo-500 rounded-full group-hover:animate-pulse" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tools Category */}
            <div className="bg-gradient-to-br from-white to-green-50 dark:from-gray-900 dark:to-green-900/20 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-green-500 dark:text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Tools & Platforms</h3>
              </div>
              
              <div className="space-y-6">
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">Git/GitHub</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-green-500 dark:text-green-400">87%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-green-600 dark:from-green-500 dark:to-teal-500 rounded-full group-hover:animate-pulse" style={{ width: '87%' }}></div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">Figma/Design</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-green-500 dark:text-green-400">78%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-green-600 dark:from-green-500 dark:to-teal-500 rounded-full group-hover:animate-pulse" style={{ width: '78%' }}></div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">CI/CD</span>
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-green-500 dark:text-green-400">75%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-green-600 dark:from-green-500 dark:to-teal-500 rounded-full group-hover:animate-pulse" style={{ width: '75%' }}></div>
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