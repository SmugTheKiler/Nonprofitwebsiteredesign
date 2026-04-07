import { Link } from 'react-router';
import { Heart, Mail, Phone, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#006c54] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-2 rounded-lg">
                <Heart className="h-6 w-6 text-[#006c54] fill-[#006c54]" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">Cleft Family</span>
                <span className="text-sm text-gray-200">Support Foundation</span>
              </div>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed">
              Supporting families affected by cleft lip and palate through education, resources, and compassionate care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/get-support" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Get Support
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs/cleft-bottle-feeding" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Bottle Feeding Program
                </Link>
              </li>
              <li>
                <Link to="/programs/family-support" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Family Support
                </Link>
              </li>
              <li>
                <Link to="/programs/ambassador" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Ambassador Program
                </Link>
              </li>
              <li>
                <Link to="/corporate-partnerships" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Corporate Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm text-gray-200">1 (470) 588-1844</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@cleftfamilysupport.org" className="text-sm text-gray-200 hover:text-white transition-colors">
                  info@cleftfamilysupport.org
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/CleftFamilySupportFoundation/" target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/cleftfamilysupport/" target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-200">
            © {new Date().getFullYear()} Cleft Family Support Foundation. All rights reserved. | Tax ID: 12-3456789
          </p>
        </div>
      </div>
    </footer>
  );
}
