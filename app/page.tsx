"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, MessageCircle, Calendar, Activity, ArrowRight, Phone, Mail, Sparkles, Shield, Clock, Users, Star, ChevronRight, CheckCircle, Microscope, Leaf, TrendingUp } from "lucide-react";
import { ReactNode } from "react";

export default function Home() {
  const steps = [
  {
    num: "01",
    color: "teal",
    iconBg: "bg-[#E1F5EE]",
    stepColor: "text-[#0F6E56]",
    pillBg: "bg-[#E1F5EE]",
    pillText: "text-[#085041]",
    pillDot: "bg-[#1D9E75]",
    pillLabel: "Free resources",
    title: "Understand your fertility",
    body: "Access expert-backed information to understand your body, options, and the right next steps for you.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="10" r="5" fill="#1D9E75" />
        <path d="M10 15.5c0 0 .5 3 3 3s3-3 3-3" stroke="#1D9E75" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 10c0-2.2 1.8-4 4-4" stroke="#E1F5EE" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="13" cy="10" r="1.5" fill="#E1F5EE" />
        <rect x="10.5" y="18.5" width="5" height="1.5" rx=".75" fill="#5DCAA5" />
        <rect x="11.5" y="21" width="3" height="1.5" rx=".75" fill="#9FE1CB" />
      </svg>
    ),
  },
  {
    num: "02",
    color: "blue",
    iconBg: "bg-[#E6F1FB]",
    stepColor: "text-[#185FA5]",
    pillBg: "bg-[#E6F1FB]",
    pillText: "text-[#0C447C]",
    pillDot: "bg-[#378ADD]",
    pillLabel: "Verified doctors",
    title: "Connect with specialists",
    body: "Find and consult verified fertility experts who guide you through every stage of the process.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="10" cy="9" r="3.5" fill="#378ADD" />
        <path d="M4 20c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="#378ADD" />
        <circle cx="18.5" cy="8.5" r="2.5" fill="#85B7EB" />
        <path d="M16.5 16c1 0 4 1.2 4 4" stroke="#85B7EB" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="20" cy="11" r="3" fill="#E6F1FB" stroke="#378ADD" strokeWidth="1" />
        <path d="M18.5 11h3M20 9.5v3" stroke="#378ADD" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    color: "purple",
    iconBg: "bg-[#EEEDFE]",
    stepColor: "text-[#534AB7]",
    pillBg: "bg-[#EEEDFE]",
    pillText: "text-[#3C3489]",
    pillDot: "bg-[#7F77DD]",
    pillLabel: "Tailored to you",
    title: "Move forward with confidence",
    body: "Receive a personalized treatment plan, ongoing support, and full transparency at every stage.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3.5L15.5 9l5.8.85-4.2 4.1.99 5.8L13 17.1l-5.09 2.65.99-5.8-4.2-4.1L10.5 9z" fill="#7F77DD" />
        <path d="M10 13l2 2.2 4-4" stroke="#EEEDFE" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21.5l4-2 4 2" stroke="#AFA9EC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

  const trustPoints = [
    {
      icon: <Shield className="h-6 w-6 text-[#1D9E75]" />,
      title: "Verified fertility experts and clinics",
      description: "All our specialists are thoroughly vetted and accredited"
    },
    {
      icon: <Users className="h-6 w-6 text-[#378ADD]" />,
      title: "Personalized guidance at every stage",
      description: "Tailored support from your first consultation to post-treatment"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#7F77DD]" />,
      title: "Transparent process with no hidden confusion",
      description: "Clear pricing, honest communication, and no surprises"
    },
    {
      icon: <Heart className="h-6 w-6 text-[#E91E63]" />,
      title: "Emotional and medical support combined",
      description: "Holistic care that addresses both your physical and emotional well-being"
    },
    {
      icon: <Sparkles className="h-6 w-6 text-[#FF9800]" />,
      title: "Seamless digital experience",
      description: "Easy appointments, instant updates, and 24/7 access to your health records"
    }
  ];

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
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Your Journey to Parenthood <br />
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
      <div className="container-custom text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#E1F5EE] border border-[#9FE1CB] rounded-full px-4 py-1.5 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#1D9E75]" />
          <span className="text-[10px] font-semibold tracking-widest uppercase text-[#085041]">
            How it works
          </span>
        </div>

        {/* Headline */}
        <h2 className=" text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
          Your path to parenthood
          <br />
          in{" "}
          <em className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            3 simple steps
          </em>
        </h2>
        <p className="text-gray-500 mb-14 max-w-md mx-auto text-base leading-relaxed">
          Expert guidance, verified specialists, and a plan built around{" "}
          <em>you</em>.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-white rounded-[20px] border border-gray-100 p-7 text-left overflow-hidden
                         transition-transform duration-200 hover:-translate-y-1.5 hover:border-gray-200"
            >
              {/* Ghost number */}
              <span className="absolute -bottom-3 -right-1  text-[7rem] font-bold leading-none text-gray-900 opacity-[0.06] select-none pointer-events-none">
                {step.num}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${step.iconBg}`}>
                {step.icon}
              </div>

              {/* Step label */}
              <p className={`text-[10px] font-semibold tracking-[.12em] uppercase mb-1.5 ${step.stepColor}`}>
                Step {step.num}
              </p>

              {/* Title */}
              <h3 className=" text-xl font-bold text-gray-900 mb-2 leading-snug">
                {step.title}
              </h3>

              {/* Body */}
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                {step.body}
              </p>

              {/* Pill tag */}
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium ${step.pillBg} ${step.pillText}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${step.pillDot}`} />
                {step.pillLabel}
              </span>
            </div>
          ))}
        </div>

        {/* Footer divider */}
        <div className="flex items-center justify-center gap-4 mt-14 max-w-sm mx-auto">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 whitespace-nowrap">
            Thousands have started their journey here
          </span>
          <div className="flex-1 h-px bg-gray-200" />
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
                Compassionate Fertility Care, Backed by Expertise
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-gray-700">At FertiCare, we understand that every fertility journey is unique. That's
                  why we combine 
                  medical expertise, emotional support, and personalized guidance to help 
                  you move forward 
                  with confidence. </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-700">Whether you're just starting to explore your options or actively seeking treatment
                  , our 
                  platform connects you with the right specialists, the right information, and the right care, at 
                  the right time. </span>
                </div>
              </div>
              <Link href="/consultations" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition hover:scale-105">
                Get Help <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Families Trust FertiCare - New Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-5">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Families Trust <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">FertiCare</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We combine medical excellence with compassionate care to support you every step of the way
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white/10 rounded-xl w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                <p className="text-gray-300 text-sm">{point.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/consultations" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Join 5000+ Happy Families
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
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
            <p className="text-gray-600 text-lg">Comprehensive Fertility Solutions 
From diagnosis to advanced treatments, we offer end-to-end fertility care tailored to your 
needs. </p>
          </motion.div>
          
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Fertility Assessment */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-2xl shadow-xl"
  >
    <img 
      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop"
      alt="Fertility Assessment"
      className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
      <Calendar className="h-10 w-10 text-blue-400 mx-auto mb-3" />
      <h3 className="text-xl font-bold text-white mb-2">Fertility Assessment</h3>
      <p className="text-white/90 text-sm">
        Identify underlying concerns with detailed diagnostics and expert evaluation.
      </p>
    </div>
  </motion.div>

  {/* IVF Treatment */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-2xl shadow-xl"
  >
    <img 
      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
      alt="IVF Treatment"
      className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
      <MessageCircle className="h-10 w-10 text-pink-400 mx-auto mb-3" />
      <h3 className="text-xl font-bold text-white mb-2">IVF Treatment</h3>
      <p className="text-white/90 text-sm">
        Advanced assisted reproductive techniques with high success rates.
      </p>
    </div>
  </motion.div>

  {/* IUI Procedure */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-2xl shadow-xl"
  >
    <img 
      src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop"
      alt="IUI Procedure"
      className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
      <Calendar className="h-10 w-10 text-green-400 mx-auto mb-3" />
      <h3 className="text-xl font-bold text-white mb-2">IUI Procedure</h3>
      <p className="text-white/90 text-sm">
        A less invasive option designed to improve your chances of conception.
      </p>
    </div>
  </motion.div>

  {/* Egg & Sperm Freezing */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-2xl shadow-xl"
  >
    <img 
      src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&h=400&fit=crop"
      alt="Egg & Sperm Freezing"
      className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
      <MessageCircle className="h-10 w-10 text-purple-400 mx-auto mb-3" />
      <h3 className="text-xl font-bold text-white mb-2">Egg & Sperm Freezing</h3>
      <p className="text-white/90 text-sm">
        Preserve your fertility for the future with safe and reliable methods.
      </p>
    </div>
  </motion.div>

  {/* Genetic Testing - Updated Service Card */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-2xl shadow-xl"
  >
    <img 
      src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=600&h=400&fit=crop"
      alt="Genetic Testing"
      className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
      <Microscope className="h-10 w-10 text-emerald-400 mx-auto mb-3" />
      <h3 className="text-xl font-bold text-white mb-2">Genetic Testing</h3>
      <p className="text-white/90 text-sm">
        Ensure healthier outcomes with advanced screening technologies.
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