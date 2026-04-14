"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Heart, 
  Apple, 
  Dumbbell, 
  Moon, 
  Coffee, 
  Activity, 
  Smile, 
  ArrowRight, 
  Mail, 
  Phone,
  Sparkles,
  CheckCircle,
  Star,
  Calendar,
  Users,
  Shield
} from "lucide-react";

export default function WellnessPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&h=600&fit=crop"
            alt="Fertility Wellness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-teal-900/95"></div>
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
                <span className="text-white text-sm">Holistic Wellness Approach</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Heart className="h-20 w-20 text-green-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Fertility <span className="text-green-400">Wellness</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Personalized fertility and wellness support tailored to your journey.
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
              <div className="text-3xl font-bold text-primary-600">95%</div>
              <div className="text-gray-600 text-sm">Wellness Success</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600">3000+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600">10+</div>
              <div className="text-gray-600 text-sm">Wellness Experts</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="text-gray-600 text-sm">Wellness Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Care Section with Image */}
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
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop"
                alt="Wellness Care"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Care</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Personalized fertility and wellness support tailored to your journey.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Holistic wellness approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Personalized lifestyle plans</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Ongoing wellness support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Cards with Images */}
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
            <p className="text-gray-600 text-lg">Comprehensive wellness services for your fertility journey</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=300&fit=crop"
                alt="Counseling"
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Heart className="h-10 w-10 text-pink-400 mb-2" />
                <h3 className="text-xl font-bold text-white mb-2">Counseling</h3>
                <p className="text-white/90">Private online sessions addressing fertility concerns</p>
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
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=300&fit=crop"
                alt="Consults"
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Activity className="h-10 w-10 text-blue-400 mb-2" />
                <h3 className="text-xl font-bold text-white mb-2">Consults</h3>
                <p className="text-white/90">Expert IVF guidance reviewing your medical history</p>
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
                alt="Wellness"
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Smile className="h-10 w-10 text-green-400 mb-2" />
                <h3 className="text-xl font-bold text-white mb-2">Wellness</h3>
                <p className="text-white/90">Clear advice on next steps for tests and treatments</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wellness Plans Section */}
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
            <p className="text-gray-600 text-lg">Customized wellness solutions for optimal fertility health</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=300&fit=crop"
                alt="Wellness Plans"
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Apple className="h-10 w-10 text-green-400 mb-2" />
                <h3 className="text-xl font-bold text-white mb-2">Wellness Plans</h3>
                <p className="text-white/90">Customized lifestyle advice focusing on diet, stress, and hormones.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop"
                alt="IVF Consult"
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Dumbbell className="h-10 w-10 text-blue-400 mb-2" />
                <h3 className="text-xl font-bold text-white mb-2">IVF Consult</h3>
                <p className="text-white/90">Detailed review of medical history and tailored IVF plans.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wellness Tips Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Wellness Tips</h2>
            <p className="text-gray-600 text-lg">Simple lifestyle changes for better fertility health</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Apple, title: "Balanced Nutrition", desc: "Eat fertility-boosting foods rich in antioxidants and vitamins" },
              { icon: Dumbbell, title: "Regular Exercise", desc: "Moderate physical activity improves hormonal balance" },
              { icon: Moon, title: "Quality Sleep", desc: "7-8 hours of sleep supports reproductive health" },
              { icon: Coffee, title: "Stress Management", desc: "Meditation and yoga reduce stress levels" },
              { icon: Heart, title: "Healthy Weight", desc: "Maintaining optimal BMI improves fertility" },
              { icon: Activity, title: "Stay Hydrated", desc: "Proper hydration supports overall health" }
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition"
              >
                <tip.icon className="h-12 w-12 text-primary-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form with Background */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&h=600&fit=crop"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-teal-900/95"></div>
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
                Get in Touch
              </h2>
              <p className="text-white/90">Reach out for personalized fertility and wellness support.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <form className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition"
                    placeholder="Enter your phone number"
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
                  Send Message
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <div>
                    <p className="text-sm text-gray-600">📧 info@ferticareivf.com</p>
                    <p className="text-sm text-gray-600">📞 +91-9211565661</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">📍 Location: Mumbai</p>
                    <p className="text-sm text-gray-600">🕐 Hours: Monday - Saturday</p>
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