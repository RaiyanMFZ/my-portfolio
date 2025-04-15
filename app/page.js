import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ContactForm } from "@/components/ui/contact-form";
import { Projects } from "@/components/ui/projects";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center text-center relative z-20 pt-16">
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
      
      {/* About Section */}
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
      
      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-24 flex items-center bg-gray-50 dark:bg-gray-800 relative z-10">
        <div className="max-w-screen-xl mx-auto px-4 w-full">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-500 dark:text-blue-400">
            My Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Frontend Development</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">HTML/CSS</span>
                    <span className="text-gray-700 dark:text-gray-300">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
                    <span className="text-gray-700 dark:text-gray-300">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">React</span>
                    <span className="text-gray-700 dark:text-gray-300">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Framework Skills */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Frameworks & Libraries</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Next.js</span>
                    <span className="text-gray-700 dark:text-gray-300">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Tailwind CSS</span>
                    <span className="text-gray-700 dark:text-gray-300">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Redux</span>
                    <span className="text-gray-700 dark:text-gray-300">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tools Skills */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Tools & Platforms</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Git/GitHub</span>
                    <span className="text-gray-700 dark:text-gray-300">87%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Figma/Design</span>
                    <span className="text-gray-700 dark:text-gray-300">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">CI/CD</span>
                    <span className="text-gray-700 dark:text-gray-300">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-24 flex items-center bg-white dark:bg-gray-900 relative z-10">
        <div className="w-full">
          <Projects />
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-24 flex items-center bg-gray-50 dark:bg-gray-800 relative z-10">
        <div className="w-full">
          <ContactForm />
        </div>
      </section>
      
      <div className="fixed top-0 left-0 right-0 bottom-0 -z-10 w-screen h-screen">
        <BackgroundBeamsWithCollision className="w-full h-full" />
      </div>
    </>
  );
}