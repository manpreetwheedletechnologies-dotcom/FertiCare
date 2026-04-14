import ServiceCard from "@/components/ServiceCard";
import { MessageCircle, Calendar, Heart, Stethoscope, ClipboardList, Smile } from "lucide-react";

export default function Services() {
  const allServices = [
    {
      title: "Fertility Counseling",
      description: "Personalized online sessions addressing male and female fertility concerns. Review your history with expert advice.",
      icon: MessageCircle,
      link: "/counseling",
    },
    {
      title: "IVF Consultations",
      description: "Expert guidance through IVF, IUI, and natural conception options tailored for you.",
      icon: Calendar,
      link: "/consultations",
    },
    {
      title: "Wellness Plans",
      description: "Holistic wellness programs including nutrition, stress management, and lifestyle optimization.",
      icon: Heart,
      link: "/wellness",
    },
    {
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your fertility health and personalized recommendations.",
      icon: Stethoscope,
      link: "/consultations",
    },
    {
      title: "Treatment Planning",
      description: "Detailed roadmap for your fertility journey with clear timelines and options.",
      icon: ClipboardList,
      link: "/consultations",
    },
    {
      title: "Emotional Support",
      description: "Ongoing psychological support throughout your fertility journey.",
      icon: Smile,
      link: "/counseling",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-pink-500">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive care to support your journey through fertility and wellness.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}