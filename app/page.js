import Image from "next/image";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { ContactForm } from "@/components/ui/contact-form";
import { Projects } from "@/components/ui/projects";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center text-center relative z-20">
        <h2 className="text-gray-400 dark:text-gray-300 text-4xl mb-4">Hello I'm</h2>
        <h1 className="text-blue dark:text-white text-6xl font-bold mb-4">Raiyan Mahfuz</h1>
        <h3 className="text-gray-400 dark:text-gray-300 text-4xl mb-8">Student at Kantonsschule Hottingen</h3>
      </div>
      
      <section id="about" className="min-h-screen py-24 flex items-center bg-white dark:bg-gray-900 relative z-10">
        <div className="max-w-screen-xl mx-auto px-4 w-full">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-500 dark:text-blue-400">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 text-lg">
              Hey there! I'm Raiyan a passionate developer based in Zurich, Switzerland.
              For the past  years, I’ve been dedicated to creating modern, responsive, and visually appealing web applications. My focus is on building clean, user-friendly interfaces using technologies like React, Next.js and Tailwind Css.              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
              What I really enjoy is working with computers and solving problems, because I am very good at logical thinking. I’ve always been strong in Informatics, especially during secondary school, where I performed really well in this subject. I’m not only interested in writing code, but I also care a lot about how users experience what I create. My goal is to develop solutions that are clear, effective, and user-friendly.</p>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
              My journey with programming started back in secondary school, where I first learned the basics of coding and computer science. This quickly sparked my passion, and I enjoyed diving deeper into the subject outside of class. What began as school lessons turned into something I truly enjoy and want to develop further.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
              Over the past year, I have taken my passion further by working on a variety of projects both as part of my studies and on my own. I have created everything from interactive websites to fully responsive web applications. These hands-on experiences have helped me improve my technical skills and also taught me how to manage a project from the initial idea all the way through to deployment.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
              I’m always looking for opportunities to take on new challenges, keep growing, and build things that people genuinely enjoy using.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md aspect-[3/4] flex items-center justify-center">
              <div className="text-gray-400 dark:text-gray-500 text-center">
                <img
                  src="/public/IMG_0597.JPG"
                  alt="Profile Picture"
                  width={600}
                  height={600}
                  className="rounded-full shadow-lg"
                />
              </div>
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