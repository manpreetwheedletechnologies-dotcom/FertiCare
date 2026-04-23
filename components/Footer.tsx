import Link from "next/link";
import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
                <img src="logo.png" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm">
              Compassionate fertility care tailored to your unique journey.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-primary-500 transition">Home</Link></li>
              <li><Link href="/counseling" className="hover:text-primary-500 transition">Counseling</Link></li>
              <li><Link href="/consultations" className="hover:text-primary-500 transition">Consultations</Link></li>
              <li><Link href="/wellness" className="hover:text-primary-500 transition">Wellness</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +91-9211565661
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@ferticareivf.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> noida, india
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> Monday - Saturday
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-3">Stay informed with our latest fertility tips</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 FertiCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}