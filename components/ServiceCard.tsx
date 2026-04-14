import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export default function ServiceCard({ title, description, icon: Icon, link }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
      <div className="inline-block p-3 bg-pink-100 rounded-full mb-4">
        <Icon className="h-8 w-8 text-pink-500" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  );
}