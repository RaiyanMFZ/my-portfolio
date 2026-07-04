import { ContactForm } from "@/components/ui/contact-form";
import { HeroSection } from "@/components/ui/hero-section";
import { Projects } from "@/components/ui/projects";
import { Skills } from "@/components/ui/skills";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section id="about" className="slide-section bg-black relative z-10">
        <div className="slide-container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <ScrollReveal className="lg:col-span-5 order-2 lg:order-1" delay={0.1}>
              <div className="relative aspect-[3/4] overflow-hidden border border-white/10 group">
                <img
                  src="/IMG_0597.JPG"
                  alt="Raiyan Mahfuz"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-7 order-1 lg:order-2">
              <span className="section-label">01 — About</span>
              <h2 className="section-title">About Me</h2>
              <div className="section-divider" />

              <div className="space-y-5 text-muted-foreground leading-[1.8] text-base md:text-lg font-light">
                <p>
                  Hey there! I&apos;m Raiyan, a passionate developer based in
                  Zurich, Switzerland. For the past years, I&apos;ve been
                  dedicated to creating modern, responsive, and visually
                  appealing web applications. My focus is on building clean,
                  user-friendly interfaces using technologies like React,
                  Next.js and Tailwind CSS.
                </p>
                <p>
                  What I really enjoy is working with computers and solving
                  problems, because I am very good at logical thinking.
                  I&apos;ve always been strong in Informatics, especially during
                  secondary school, where I performed really well in this
                  subject.
                </p>
                <p>
                  My journey with programming started back in secondary school,
                  where I first learned the basics of coding and computer
                  science. This quickly sparked my passion, and I enjoyed diving
                  deeper into the subject outside of class.
                </p>
                <p>
                  I&apos;m always looking for opportunities to take on new
                  challenges, keep growing, and build things that people
                  genuinely enjoy using.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Skills />

      <section id="projects" className="slide-section bg-black relative z-10">
        <Projects />
      </section>

      <section id="contact" className="slide-section bg-black relative z-10">
        <ContactForm />
      </section>
    </>
  );
}
