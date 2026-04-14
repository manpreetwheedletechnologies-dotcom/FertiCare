"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  MessageCircle, 
  Users, 
  Heart, 
  Phone, 
  Video, 
  Calendar, 
  ArrowRight, 
  Mail,
  Sparkles,
  Shield,
  Clock,
  CheckCircle,
  Star
} from "lucide-react";

export default function CounselingPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&h=600&fit=crop"
            alt="Fertility Counseling"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 to-pink-900/95"></div>
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
                <span className="text-white text-sm">Compassionate Care</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <MessageCircle className="h-20 w-20 text-pink-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Fertility <span className="text-pink-400">Counseling</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Private online sessions addressing male, female, and partner fertility concerns with empathy.
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
              <div className="text-3xl font-bold text-primary-600">98%</div>
              <div className="text-gray-600 text-sm">Client Satisfaction</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600">5000+</div>
              <div className="text-gray-600 text-sm">Counseling Sessions</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600">15+</div>
              <div className="text-gray-600 text-sm">Expert Counselors</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Caring Approach Section with Image */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
                alt="Caring Approach"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Caring Approach</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                At Fertility IVF Care, we support your fertility journey with compassion and expert guidance every step.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Personalized counseling plans</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Experienced fertility counselors</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Confidential and safe environment</span>
                </div>
              </div>
              <Link href="/consultations" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition hover:scale-105">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Cards with Images */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-gray-600 text-lg">Comprehensive counseling services tailored to your needs</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=300&fit=crop"
                alt="Individual Support"
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Users className="h-10 w-10 text-blue-400 mb-2" />
                <h3 className="text-xl font-bold text-white mb-2">Individual & Partner Support</h3>
                <p className="text-white/90">Guidance on male, female, and partner fertility issues</p>
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
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=300&fit=crop"
                alt="Emotional Wellness"
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Heart className="h-10 w-10 text-pink-400 mb-2" />
                <h3 className="text-xl font-bold text-white mb-2">Emotional Wellness</h3>
                <p className="text-white/90">Coping strategies for stress and anxiety during fertility journey</p>
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
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=300&fit=crop"
                alt="Online Sessions"
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Video className="h-10 w-10 text-green-400 mb-2" />
                <h3 className="text-xl font-bold text-white mb-2">Online Sessions</h3>
                <p className="text-white/90">Convenient remote counseling from anywhere</p>
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
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop"
                alt="History Review"
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Calendar className="h-10 w-10 text-purple-400 mb-2" />
                <h3 className="text-xl font-bold text-white mb-2">History Review</h3>
                <p className="text-white/90">Expert review of your medical and fertility history</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* How to Start Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">How to Start Online Counseling</h3>
              <p className="text-lg mb-6 text-white/90">
                Simply book a session through our website, and a specialist will connect with you remotely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition hover:scale-105">
                  Book a Session
                </button>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-white/80">📞 Or call us directly: +91-9211565661</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Contact Form */}
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

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}