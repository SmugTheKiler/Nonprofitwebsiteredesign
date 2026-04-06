import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Building2, Users, Heart, TrendingUp, Award, Handshake } from 'lucide-react';

export function CorporatePartnerships() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-gradient-to-r from-[#006c54] to-[#005544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Corporate Partnerships</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Partner with us to create meaningful impact while engaging your team
          </p>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1758518729240-7162d07427b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwYXJ0bmVyc2hpcCUyMG9mZmljZXxlbnwxfHx8fDE3NzU0NDA2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Corporate partnership"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Partner With Us</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A partnership with the Cleft Family Support Foundation creates meaningful impact for families while providing your company with opportunities to engage employees, strengthen your brand, and demonstrate corporate social responsibility.
                </p>
                <p>
                  We work with businesses of all sizes to create customized partnerships that align with your company's values and goals. From cause marketing campaigns to employee volunteer programs, we'll help you make a difference.
                </p>
                <p>
                  Join leading companies who have chosen to support our mission of providing comprehensive care and support to families affected by cleft conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What your company gains through partnership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Meaningful Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Make a real difference in the lives of families affected by cleft conditions through your company's support and engagement.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Employee Engagement</h3>
              <p className="text-gray-600 leading-relaxed">
                Boost morale and retention by giving employees opportunities to volunteer and participate in meaningful charitable activities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Brand Enhancement</h3>
              <p className="text-gray-600 leading-relaxed">
                Strengthen your brand reputation and demonstrate corporate social responsibility to customers and stakeholders.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recognition</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive recognition through our marketing channels, events, and communications as a valued partner supporting families.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Work with our team to create a partnership program tailored to your company's specific goals and values.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Handshake className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted Partnership</h3>
              <p className="text-gray-600 leading-relaxed">
                Partner with an established nonprofit with proven programs, transparent operations, and measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible options to support our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#006c54]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cause Marketing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Create a campaign where a portion of sales supports our mission. We provide marketing materials, social media content, and promotional support to maximize impact and engagement.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Point-of-sale campaigns</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Product partnerships</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Awareness month promotions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#006c54]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Employee Giving</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Engage employees through workplace giving campaigns, payroll deduction programs, and matching gift initiatives that double the impact of employee donations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Payroll deduction programs</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Matching gift programs</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Annual giving campaigns</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#006c54]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Sponsorship</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sponsor our signature events, programs, or mission trips. Receive prominent recognition and opportunities to engage with our community of supporters.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Annual gala sponsorship</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Program sponsorship</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Mission trip sponsorship</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#006c54]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer Programs</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Organize employee volunteer days or ongoing volunteer partnerships. We'll coordinate meaningful activities that make a real difference for families.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Team volunteer days</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Skills-based volunteering</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Board service opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#006c54]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">In-Kind Donations</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Donate products, services, or expertise that support our operations and programs. From office supplies to professional services, every contribution helps.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Product donations</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Professional services</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Technology and equipment</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#006c54]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Partnerships</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Work with our team to create a unique partnership that aligns with your company's specific goals, values, and corporate giving strategy.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Multi-year partnerships</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Program development</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#006c54] font-bold">•</span>
                  <span>Strategic initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proud to work with these organizations making a difference
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md flex items-center justify-center h-32">
                <Building2 className="h-12 w-12 text-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Get Started</h2>
            <p className="text-lg text-gray-600">
              Begin your partnership in three simple steps
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg flex gap-4">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Our Team</h3>
                <p className="text-gray-600">
                  Reach out to discuss your company's interests, goals, and how we can create a meaningful partnership together.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg flex gap-4">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Develop Partnership Plan</h3>
                <p className="text-gray-600">
                  Work with our corporate partnerships team to design a customized program that aligns with your objectives and budget.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg flex gap-4">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Launch & Make Impact</h3>
                <p className="text-gray-600">
                  Execute your partnership program with our support and see the real difference your company makes in families' lives.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full px-8 py-6 text-lg">
                Start a Partnership
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#006c54] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Create Impact Together</h2>
          <p className="text-xl text-gray-200 mb-8">
            Partner with us to support families affected by cleft conditions while engaging your team and strengthening your brand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-[#006c54] hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/about">
              <Button className="bg-[#ffcc00] text-gray-900 hover:bg-[#e6b800] rounded-full px-8 py-6 text-lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
