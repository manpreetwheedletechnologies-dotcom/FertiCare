"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Stethoscope, ClipboardList, Clock, Heart, ArrowRight, Phone, Mail, Shield, Users, Sparkles, ChevronDown, CheckCircle } from "lucide-react";

export default function ConsultationsPage() {
    return (
        <>
            <Navbar />

            {/* Hero Section with Background Image */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&h=600&fit=crop"
                        alt="IVF Consultation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-purple-900/95"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                <Sparkles className="h-4 w-4 text-yellow-400" />
                                <span className="text-white text-sm">Expert Fertility Care</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <Calendar className="h-20 w-20 text-blue-400 mx-auto mb-6" />
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                                IVF <span className="text-blue-400">Consultations</span>
                            </h1>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto">
                                Expert IVF guidance reviewing your medical history and treatment options.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white shadow-sm">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-3xl font-bold text-primary-600">5000+</div>
                            <div className="text-gray-600 text-sm">Successful IVF Cycles</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-3xl font-bold text-primary-600">98%</div>
                            <div className="text-gray-600 text-sm">Patient Satisfaction</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-3xl font-bold text-primary-600">15+</div>
                            <div className="text-gray-600 text-sm">Years Experience</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-3xl font-bold text-primary-600">24/7</div>
                            <div className="text-gray-600 text-sm">Expert Support</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Offer Section with Image */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Personalized plans that cover IVF, natural conception, and lifestyle advice tailored to you.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span className="text-gray-700">Comprehensive medical review</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span className="text-gray-700">Personalized treatment plans</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span className="text-gray-700">Ongoing support and guidance</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop"
                                alt="IVF Consultation"
                                className="rounded-2xl shadow-xl w-full"
                            />
                        </motion.div>
                    </div>

                    {/* Service Cards with Images */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=300&fit=crop"
                                alt="Medical Consultation"
                                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="relative p-6 z-10">
                                <Stethoscope className="h-10 w-10 text-blue-400 mb-3" />
                                <h3 className="text-xl font-bold text-white mb-2">Consultations</h3>
                                <p className="text-white/90">Detailed IVF and IUI guidance based on your medical history and personal goals.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop"
                                alt="Medical Review"
                                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="relative p-6 z-10">
                                <ClipboardList className="h-10 w-10 text-purple-400 mb-3" />
                                <h3 className="text-xl font-bold text-white mb-2">Review</h3>
                                <p className="text-white/90">Thorough analysis of medical histories and tests.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=300&fit=crop"
                                alt="Expert Consultation"
                                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="relative p-6 z-10">
                                <Heart className="h-10 w-10 text-pink-400 mb-3" />
                                <h3 className="text-xl font-bold text-white mb-2">Consult</h3>
                                <p className="text-white/90">Clear guidance on IVF, IUI, and natural methods.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=300&fit=crop"
                                alt="Wellness Advice"
                                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="relative p-6 z-10">
                                <Clock className="h-10 w-10 text-green-400 mb-3" />
                                <h3 className="text-xl font-bold text-white mb-2">Wellness</h3>
                                <p className="text-white/90">Lifestyle advice for diet, stress, and hormones.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Your Journey With Us</h2>
                        <p className="text-gray-600 text-lg">Simple, transparent, and supportive process</p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Initial Consultation", desc: "Discuss your medical history and goals", icon: "📋" },
                            { step: "02", title: "Medical Review", desc: "Comprehensive tests and analysis", icon: "🔬" },
                            { step: "03", title: "Treatment Plan", desc: "Personalized IVF/IUI plan", icon: "📝" },
                            { step: "04", title: "Ongoing Support", desc: "Continuous guidance and care", icon: "🤝" }
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                                    {item.icon}
                                </div>
                                <div className="text-primary-600 font-bold text-sm mb-2">STEP {item.step}</div>
                                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs Section with Image */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=500&fit=crop"
                                alt="FAQ"
                                className="rounded-2xl shadow-xl w-full h-full object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {[
                                    { q: "How soon can I try?", a: "After your consultation, we guide you on the best timing to begin treatments." },
                                    { q: "What tests are needed?", a: "We review your medical history and recommend specific blood work and imaging tests." },
                                    { q: "Is IVF always necessary?", a: "Not always. We evaluate if natural conception or IUI might be effective before suggesting IVF." },
                                    { q: "Can lifestyle changes help?", a: "Yes, diet and stress management can improve fertility outcomes significantly." },
                                    { q: "Do you support male fertility?", a: "Absolutely, we address fertility concerns for both partners with tailored plans." }
                                ].map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition"
                                    >
                                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                            <ChevronDown className="h-4 w-4 text-primary-500" />
                                            {faq.q}
                                        </h4>
                                        <p className="text-gray-600 text-sm pl-6">{faq.a}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section with Background Image */}
            <section className="relative py-20 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=400&fit=crop"
      alt="Get in Touch"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-secondary-900/95"></div>
  </div>

  <div className="container-custom relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center text-white"
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h3>
      <p className="text-xl mb-8 text-white/90">
        Reach out anytime for personalized fertility support and guidance tailored just for you.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
        <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
          <Phone className="h-5 w-5" />
          <div>
            <p className="text-sm opacity-80">Call us</p>
            <p className="font-semibold">+91-9211565661</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
          <Mail className="h-5 w-5" />
          <div>
            <p className="text-sm opacity-80">Email us</p>
            <p className="font-semibold">info@ferticareivf.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-2xl p-8 text-left"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Contact</h3>
        <p className="text-gray-600 text-center mb-6">
          We're here to support your fertility journey.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Mobile Number *</label>
            <input
              type="tel"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition"
              placeholder="Enter your mobile number"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Short answer</label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition"
              placeholder="Tell us about your fertility concerns..."
            />
          </div>

          <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition hover:scale-105">
            Send Request
          </button>
        </form>


      </motion.div>
    </motion.div>
  </div>
</section>

            <Footer />
        </>
    );
}