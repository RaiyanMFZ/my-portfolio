"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: null });

    const templateParams = {
      name: formData.name,
      title: formData.subject,
      message: formData.message,
      email: formData.email,
    };

    try {
      await emailjs.send(
        "service_ylmhmdd",
        "template_nggu527",
        templateParams,
        "lG2RgvfWFJT88k-Ds"
      );

      setFormStatus({ submitted: true, submitting: false, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      console.error(error);
      setFormStatus({
        submitted: false,
        submitting: false,
        error: "Something went wrong. Please try again.",
      });
    }
  };

  const inputClass =
    "w-full px-0 py-3 bg-transparent border-0 border-b border-border/60 focus:border-foreground focus:ring-0 focus:outline-none text-foreground placeholder:text-muted-foreground/40 transition-colors duration-300";

  return (
    <div className="slide-container">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            <span className="section-label">04 — Contact</span>
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-divider mx-auto" />
            <p className="text-muted-foreground font-light text-[15px] sm:text-base px-2">
              Feel free to reach out if you have any questions
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="border border-white/10 p-5 sm:p-8 md:p-12 bg-white/[0.03] backdrop-blur-sm">
            {formStatus.submitted ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 border border-foreground/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-fade-in-up">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">
                  Thank You
                </h3>
                <p className="text-muted-foreground font-light">
                  Your message has been sent successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {formStatus.error && (
                  <div className="p-4 border border-destructive/50 text-destructive text-sm">
                    {formStatus.error}
                  </div>
                )}

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className={`btn-premium-filled min-w-[200px] ${
                      formStatus.submitting
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {formStatus.submitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
