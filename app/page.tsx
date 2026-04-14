"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, MessageCircle, Calendar, Activity, ArrowRight, Phone, Mail, Sparkles, Shield, Clock, Users, Star, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&h=1080&fit=crop"
            alt="Fertility Care Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-4 w-4 text-yellow-400" />
                <span className="text-white text-sm">Trusted by 5000+ Families</span>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Your Fertility Journey <br />
              <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                Starts Here
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Personalized IVF care, counseling, and wellness plans tailored for your unique path to parenthood.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link href="/consultations" className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105">
                Start Your Journey
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <Heart className="h-10 w-10 text-pink-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white">Fertility guidance</h3>
                <p className="text-white/70 text-sm mt-2">Expert advice tailored to you</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <MessageCircle className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white">Medical review</h3>
                <p className="text-white/70 text-sm mt-2">Comprehensive history analysis</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <Activity className="h-10 w-10 text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white">Wellness advice</h3>
                <p className="text-white/70 text-sm mt-2">Holistic lifestyle support</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">5000+</div>
              <div className="text-gray-600 text-sm">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">15+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">98%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="text-gray-600 text-sm">Patient Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Counseling & Wellness Section with Images */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop"
                alt="Counseling Session"
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <MessageCircle className="h-10 w-10 text-blue-400 mb-2" />
                <h2 className="text-2xl font-bold text-white mb-2">Counseling</h2>
                <p className="text-white/90 mb-3">Guidance on male, female, and partner issues. Review your history with expert advice.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop"
                alt="Wellness Session"
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Activity className="h-10 w-10 text-green-400 mb-2" />
                <h2 className="text-2xl font-bold text-white mb-2">Wellness</h2>
                <p className="text-white/90 mb-3">Personalized wellness advice focusing on diet, stress, and hormonal balance.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section with Image */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=500&fit=crop"
                alt="About Us"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Compassionate fertility care tailored to your unique journey and wellness needs.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary-500" />
                  <span className="text-gray-700">15+ years of excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary-500" />
                  <span className="text-gray-700">5000+ successful treatments</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary-500" />
                  <span className="text-gray-700">98% patient satisfaction</span>
                </div>
              </div>
              <Link href="/consultations" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition hover:scale-105">
                Get Help <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Section with Images */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">Personalized fertility care tailored to your unique journey.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop"
                alt="IVF Consultation"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <Calendar className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">IVF Consultations</h3>
                <p className="text-white/90">
                  Expert guidance through IVF, IUI, and natural conception options tailored for you.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
                alt="Fertility Counseling"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <MessageCircle className="h-12 w-12 text-pink-400 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">Fertility Counseling</h3>
                <p className="text-white/90">
                  Personalized online sessions addressing male and female fertility concerns.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Contact Section with Background Image */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=600&fit=crop"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-purple-900/95"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Join Fertility IVF Care and Wellness
              </h2>
              <p className="text-white/90">Stay informed with our latest fertility tips</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8"
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

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-center gap-6">
                  <div className="text-center group cursor-pointer">
                    <Mail className="h-5 w-5 text-primary-500 mx-auto mb-1 group-hover:scale-110 transition" />
                    <p className="text-xs text-gray-600">info@ferticareivf.com</p>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <Phone className="h-5 w-5 text-primary-500 mx-auto mb-1 group-hover:scale-110 transition" />
                    <p className="text-xs text-gray-600">+91-9211565661</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}