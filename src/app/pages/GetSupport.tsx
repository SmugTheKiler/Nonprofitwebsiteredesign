import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Phone, Mail, FileText, Users } from 'lucide-react';

export function GetSupport() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-gradient-to-r from-[#006c54] to-[#005544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Support</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Access comprehensive resources and support for your family's cleft journey
          </p>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">We're Here to Help</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're newly diagnosed, preparing for surgery, or navigating long-term care, we have resources and support available for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-[#006c54] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Helpline</h3>
              <p className="text-gray-600 mb-6">
                Speak with a trained volunteer anytime, day or night. Get immediate support and guidance.
              </p>
              <a href="tel:5551234567">
                <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-full">
                  Call (555) 123-4567
                </Button>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-[#006c54] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Support</h3>
              <p className="text-gray-600 mb-6">
                Send us a message and we'll respond within 24 hours with information and resources.
              </p>
              <Link to="/contact">
                <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-full">
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="bg-[#006c54] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Information</h3>
              <p className="text-gray-600 mb-6">
                Fill out a form to receive tailored information about our programs and resources.
              </p>
              <Link to="/contact">
                <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-full">
                  Request Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Support Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the program that best fits your family's needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Link to="/programs/cleft-bottle-feeding" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1758575514409-cb650ba2f4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwYm90dGxlJTIwZmVlZGluZyUyMGluZmFudHxlbnwxfHx8fDE3NzU0NDA2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Baby bottle feeding"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#006c54] transition-colors">
                    Cleft Bottle Feeding Program
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Specialized bottles, feeding education, and ongoing support for parents of infants with cleft conditions.
                  </p>
                  <span className="text-[#006c54] font-semibold">Learn More →</span>
                </div>
              </div>
            </Link>

            <Link to="/programs/family-support" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1760982150415-183b194eaf4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBzdXBwb3J0JTIwaHVnZ2luZ3xlbnwxfHx8fDE3NzU0NDA2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Family support"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#006c54] transition-colors">
                    Family Support Programs
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Counseling, peer support groups, educational resources, and emotional support throughout your journey.
                  </p>
                  <span className="text-[#006c54] font-semibold">Learn More →</span>
                </div>
              </div>
            </Link>

            <Link to="/programs/ambassador" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjb21tdW5pdHklMjBoZWxwfGVufDF8fHx8MTc3NTQ0MDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Community volunteers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#006c54] transition-colors">
                    Ambassador Program
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Connect with trained ambassadors who share their experiences and provide peer support and guidance.
                  </p>
                  <span className="text-[#006c54] font-semibold">Learn More →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Educational Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access comprehensive information to help you make informed decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#006c54]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">New Parent Guide</h3>
              <p className="text-gray-600 text-sm mb-3">
                Everything you need to know when your baby is first diagnosed with a cleft condition.
              </p>
              <Button variant="link" className="text-[#006c54] p-0">
                Download Guide →
              </Button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#006c54]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Surgery Preparation Checklist</h3>
              <p className="text-gray-600 text-sm mb-3">
                A comprehensive checklist to help prepare for your child's cleft repair surgery.
              </p>
              <Button variant="link" className="text-[#006c54] p-0">
                Download Checklist →
              </Button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#006c54]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Speech Development Guide</h3>
              <p className="text-gray-600 text-sm mb-3">
                Understanding speech challenges and how to support language development at home.
              </p>
              <Button variant="link" className="text-[#006c54] p-0">
                Download Guide →
              </Button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#006c54]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Insurance Navigation Guide</h3>
              <p className="text-gray-600 text-sm mb-3">
                Tips for working with insurance companies and finding financial assistance.
              </p>
              <Button variant="link" className="text-[#006c54] p-0">
                Download Guide →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about getting support
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Who can access your support services?</h3>
              <p className="text-gray-600">
                Our services are available to any family affected by cleft lip and palate, regardless of where you live or your financial situation. All of our support programs are provided free of charge.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do I need a referral to access support?</h3>
              <p className="text-gray-600">
                No referral is needed. You can contact us directly to access any of our support programs and resources.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Are your services really free?</h3>
              <p className="text-gray-600">
                Yes! All of our support programs, counseling services, educational resources, and specialized feeding equipment are provided at no cost to families. We're funded through donations and grants.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What if I'm pregnant and my baby was just diagnosed?</h3>
              <p className="text-gray-600">
                We're here to support you from prenatal diagnosis through every stage of your journey. Contact us as soon as you're ready—we can provide information, emotional support, and connect you with other parents who have been in your shoes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#006c54] rounded-2xl p-12 text-white">
            <img src="/images/icons/logo.png" alt="logo" className="h-20 w-20 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Connect with our team today and take the first step toward accessing support for your family.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:5551234567">
                <Button className="bg-white text-[#006c54] hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
                  Call (555) 123-4567
                </Button>
              </a>
              <Link to="/contact">
                <Button className="bg-[#ffcc00] text-gray-900 hover:bg-[#e6b800] rounded-full px-8 py-6 text-lg">
                  Contact Us Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
