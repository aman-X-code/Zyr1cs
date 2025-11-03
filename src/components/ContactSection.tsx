"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BlurText from "./BlurText";
import { Particles } from "./ui/Particles";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    driveLink: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors = { email: "", phone: "" };

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      hasErrors = true;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
        const response = await fetch('https://formspree.io/f/xqagvlaz', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            message: "",
            driveLink: "",
          });
          setTimeout(() => setSubmitStatus('idle'), 5000);
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // For phone, only allow digits and limit to 10
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData({
        ...formData,
        [name]: digitsOnly,
      });

      // Clear error when user starts typing
      if (errors.phone) {
        setErrors({ ...errors, phone: "" });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });

      // Clear email error when user starts typing
      if (name === "email" && errors.email) {
        setErrors({ ...errors, email: "" });
      }
    }
  };

  return (
    <section id="contact" className="py-12 bg-black relative overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={80}
        ease={80}
        color="#ffffff"
        refresh
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-baseline mb-4 sm:mb-6">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mr-2 sm:mr-4"
              style={{ fontFamily: "'Druk Trial', sans-serif" }}
            >
              <BlurText
                text="CONTACT US"
                delay={200}
                animateBy="words"
                direction="top"
              />
            </h2>
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-300 rounded-full" />
          </div>
          <p
            className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Ready to start your project? Fill out the form and we&apos;ll get
            back to you within 24 hours
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Name *"
                      className="w-full bg-white/5 border-2 border-gray-800 focus:border-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-gray-500 outline-none transition-all duration-300"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                      required
                    />
                    <div
                      className={`absolute inset-0 rounded-xl bg-white/5 -z-10 blur-xl transition-opacity duration-300 ${
                        focusedField === "name" ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>

                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Email Address *"
                      className={`w-full bg-white/5 border-2 ${
                        errors.email ? "border-red-500" : "border-gray-800"
                      } focus:border-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-gray-500 outline-none transition-all duration-300`}
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                      required
                    />
                    {errors.email && (
                      <p
                        className="text-red-500 text-sm mt-2"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        {errors.email}
                      </p>
                    )}
                    <div
                      className={`absolute inset-0 rounded-xl bg-white/5 -z-10 blur-xl transition-opacity duration-300 ${
                        focusedField === "email" ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Phone Number (10 digits)"
                      className={`w-full bg-white/5 border-2 ${
                        errors.phone ? "border-red-500" : "border-gray-800"
                      } focus:border-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-gray-500 outline-none transition-all duration-300`}
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                      maxLength={10}
                    />
                    {errors.phone && (
                      <p
                        className="text-red-500 text-sm mt-2"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        {errors.phone}
                      </p>
                    )}
                    <div
                      className={`absolute inset-0 rounded-xl bg-white/5 -z-10 blur-xl transition-opacity duration-300 ${
                        focusedField === "phone" ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>

                  <div className="relative group">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Company Name"
                      className="w-full bg-white/5 border-2 border-gray-800 focus:border-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-gray-500 outline-none transition-all duration-300"
                      style={{ fontFamily: "'Quicksand', sans-serif" }}
                    />
                    <div
                      className={`absolute inset-0 rounded-xl bg-white/5 -z-10 blur-xl transition-opacity duration-300 ${
                        focusedField === "company" ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="relative group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("service")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white/5 border-2 border-gray-800 focus:border-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-white outline-none transition-all duration-300 appearance-none cursor-pointer"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    <option value="" className="bg-black">
                      Select Service
                    </option>
                    <option value="Web Development" className="bg-black">
                      Web Development
                    </option>
                    <option value="Mobile Application" className="bg-black">
                      Mobile Application
                    </option>
                    <option value="AI Automation" className="bg-black">
                      AI Automation
                    </option>
                    <option value="Cloud Services" className="bg-black">
                      Cloud Services
                    </option>
                    <option value="Other" className="bg-black">
                      Other
                    </option>
                  </select>
                  <svg
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <div
                    className={`absolute inset-0 rounded-xl bg-white/5 -z-10 blur-xl transition-opacity duration-300 ${
                      focusedField === "service" ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                {/* Message */}
                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about your project *"
                    rows={5}
                    className="w-full bg-white/5 border-2 border-gray-800 focus:border-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-gray-500 outline-none transition-all duration-300 resize-none"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                    required
                  />
                  <div
                    className={`absolute inset-0 rounded-xl bg-white/5 -z-10 blur-xl transition-opacity duration-300 ${
                      focusedField === "message" ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                {/* Google Drive Link */}
                <div className="relative group">
                  <div className="flex items-start gap-3 bg-white/5 border-2 border-gray-800 focus-within:border-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                    <div className="flex-1">
                      <input
                        type="url"
                        name="driveLink"
                        value={formData.driveLink}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("driveLink")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Google Drive / Dropbox Link (Optional)"
                        className="w-full bg-transparent text-white placeholder-gray-500 outline-none"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      />
                      <p className="text-gray-600 text-xs mt-1" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                        Share a link to your files (make sure it&apos;s publicly accessible)
                      </p>
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 rounded-xl bg-white/5 -z-10 blur-xl transition-opacity duration-300 ${
                      focusedField === "driveLink" ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-black text-lg sm:text-xl py-4 sm:py-5 rounded-xl transition-colors duration-300 tracking-wider ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : submitStatus === 'success'
                      ? 'bg-green-500 text-white'
                      : submitStatus === 'error'
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-black hover:bg-gray-200'
                  }`}
                  style={{ fontFamily: "'Druk Trial', sans-serif" }}
                >
                  {isSubmitting 
                    ? 'SENDING...' 
                    : submitStatus === 'success'
                    ? '✓ MESSAGE SENT!'
                    : submitStatus === 'error'
                    ? '✗ FAILED - TRY AGAIN'
                    : 'SEND MESSAGE'
                  }
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                    Thank you! We&apos;ll get back to you within 24 hours.
                  </p>
                )}
              </form>
            </motion.div>

            {/* Right Side - Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-white to-gray-200 rounded-2xl p-6 sm:p-8 text-black">
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6"
                  style={{ fontFamily: "'Druk Trial', sans-serif" }}
                >
                  LET&apos;S TALK
                </h3>
                <p
                  className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  Have a project in mind? We&apos;d love to hear about it. Fill
                  out the form and we&apos;ll get back to you as soon as
                  possible.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="font-bold mb-1 tracking-wider text-sm sm:text-base"
                        style={{ fontFamily: "'Druk Trial', sans-serif" }}
                      >
                        EMAIL
                      </p>
                      <p
                        className="text-gray-700 text-xs sm:text-sm break-all"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        aamankhanna1112@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="font-bold mb-1 tracking-wider text-sm sm:text-base"
                        style={{ fontFamily: "'Druk Trial', sans-serif" }}
                      >
                        PHONE
                      </p>
                      <p
                        className="text-gray-700 text-xs sm:text-sm"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        +91 9039242458
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="font-bold mb-1 tracking-wider text-sm sm:text-base"
                        style={{ fontFamily: "'Druk Trial', sans-serif" }}
                      >
                        OFFICE
                      </p>
                      <p
                        className="text-gray-700 text-xs sm:text-sm"
                        style={{ fontFamily: "'Quicksand', sans-serif" }}
                      >
                        Delhi, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white/5 backdrop-blur-sm border-2 border-gray-800 rounded-xl p-4 sm:p-6 text-center">
                  <p
                    className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2"
                    style={{ fontFamily: "'Druk Trial', sans-serif" }}
                  >
                    24h
                  </p>
                  <p
                    className="text-gray-400 text-xs sm:text-sm"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    Response Time
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border-2 border-gray-800 rounded-xl p-4 sm:p-6 text-center">
                  <p
                    className="text-4xl font-black text-white mb-2"
                    style={{ fontFamily: "'Druk Trial', sans-serif" }}
                  >
                    100+
                  </p>
                  <p
                    className="text-gray-400 text-xs sm:text-sm"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    Projects Done
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  );
}
