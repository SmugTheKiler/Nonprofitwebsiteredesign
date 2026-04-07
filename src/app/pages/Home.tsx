import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Heart, Users, Target, Globe, PillBottle, UserPlus, Phone, Mail, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { NewsletterSignup } from '../components/NewsletterSignup';

export function Home() {
  return <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero/hero.jpg" alt="Child smiling" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Supporting Families Affected by Cleft Lip and Palate
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Providing compassionate care, education, and resources to
              families navigating the cleft journey. Every child deserves to
              smile with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-10119" target="_blank" rel="noreferrer">
                <Button className="bg-[#d52a1d] hover:bg-[#b32318] text-white rounded-full px-8 py-6 text-lg">
                  Donate
                </Button>
              </a>
              <Link to="/get-support">
                <Button className="bg-white text-[#006c54] hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
                  Get Support
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full px-8 py-6 text-lg">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Purpose
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated to transforming lives through comprehensive support
              and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide comprehensive support, education, and resources to
                families affected by cleft lip and palate, ensuring every
                child has access to quality care and the opportunity to
                thrive.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#ffcc00] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every family affected by cleft conditions has
                access to the support, education, and medical care they need
                to live full, confident lives.
              </p>
            </div>

            {/* Our Work Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#d52a1d] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Work
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We provide specialized feeding programs, family counseling,
                educational resources, and mission work to support families
                both in the United States and internationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support designed to meet families at every stage
              of their journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cleft Bottle Feeding Program */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group flex flex-col">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1758575514409-cb650ba2f4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwYm90dGxlJTIwZmVlZGluZyUyMGluZmFudHxlbnwxfHx8fDE3NzU0NDA2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Baby bottle feeding" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <PillBottle className="h-6 w-6 text-[#006c54]" />
                    <h3 className="text-xl font-bold text-gray-900">
                      Cleft Bottle Feeding Program
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Specialized support and education for families learning to
                    feed infants with cleft conditions using specialized bottles
                    and techniques.
                  </p>
                </div>
                <Link to="/programs/cleft-bottle-feeding">
                  <Button variant="outline" className="w-full border-[#006c54] text-[#006c54] hover:bg-[#006c54] hover:text-white rounded-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Family Support Programs */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group flex flex-col">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1760982150415-183b194eaf4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBzdXBwb3J0JTIwaHVnZ2luZ3xlbnwxfHx8fDE3NzU0NDA2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Family support" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-6 w-6 text-[#006c54]" />
                    <h3 className="text-xl font-bold text-gray-900">
                      Family Support Programs
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Connecting families with resources, counseling, and peer
                    support networks to navigate the emotional and practical
                    aspects of cleft care.
                  </p>
                </div>
                <Link to="/programs/family-support">
                  <Button variant="outline" className="w-full border-[#006c54] text-[#006c54] hover:bg-[#006c54] hover:text-white rounded-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Ambassador Program */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group flex flex-col">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjb21tdW5pdHklMjBoZWxwfGVufDF8fHx8MTc3NTQ0MDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Volunteer community" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <UserPlus className="h-6 w-6 text-[#006c54]" />
                    <h3 className="text-xl font-bold text-gray-900">
                      Ambassador Program
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Join our community of advocates raising awareness about
                    cleft conditions and supporting families through shared
                    experiences and education.
                  </p>
                </div>
                <Link to="/programs/ambassador">
                  <Button variant="outline" className="w-full border-[#006c54] text-[#006c54] hover:bg-[#006c54] hover:text-white rounded-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Providing support and care across borders to reach families in
              need
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <img src="https://images.unsplash.com/photo-1733195296321-b99d129b09cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGdsb2JhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzc1MzU1ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="World map" className="w-full h-96 object-cover rounded-lg mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    United States
                  </h3>
                  <p className="text-gray-600">
                    Providing comprehensive support programs, educational
                    resources, and family counseling services to families
                    throughout the United States.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#ffcc00] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Expanding Globally
                  </h3>
                  <p className="text-gray-600">
                    We have plans to expand our mission work to Bangladesh and
                    other regions in the future to support families facing even
                    greater challenges accessing specialized care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored support for families in different communities
            </p>
          </div>

          <div className="space-y-8">
            {/* US Support - Main Section */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="lg:col-span-2 h-80 lg:h-auto overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1508431640151-f2217ef26c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY2hpbGRyZW4lMjBwbGF5aW5nJTIwaGFwcHl8ZW58MXx8fHwxNzc1NDQwNjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Children playing" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Supporting Families in the United States
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We provide comprehensive programs including specialized
                    bottle feeding education, family counseling, peer support
                    groups, and educational resources to help families navigate
                    every stage of the cleft journey with confidence and
                    support.
                  </p>
                  <Link to="/get-support">
                    <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-fit">
                      Learn More About US Programs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Future Global Expansion - Side Note */}
            <div className="bg-gradient-to-r from-[#fff9e6] to-[#fff5cc] rounded-2xl p-8 border-2 border-[#ffcc00]">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="md:w-1/3">
                  <img src="https://images.unsplash.com/photo-1773243906471-909ac5d3496e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNjaG9vbCUyMEJhbmdsYWRlc2h8ZW58MXx8fHwxNzc1NDQwNjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Children in Bangladesh" className="w-full rounded-xl" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Looking Ahead: Expanding to Bangladesh
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We are laying the groundwork to bring our mission work to Bangladesh in the future. Our goal is to deliver critical surgical care, establish feeding programs, train local healthcare providers, and create sustainable support systems for families in underserved communities.
                  </p>
                  <Link to="/get-involved">
                    <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full">
                      Get Involved Today
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to supporting families
              affected by cleft conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="h-80 overflow-hidden bg-gray-200">
                <img
                  src="/images/team/alina-gamaleeva-founder.jpg"
                  alt="Alina Gamaleeva"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Alina Gamaleeva
                </h3>
                <p className="text-[#006c54] font-medium mb-3">
                  Executive Director
                </p>
                <p className="text-gray-600 text-sm">
                  Leading our organization with 15+ years of experience in
                  pediatric care and family support services.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="h-80 overflow-hidden bg-gray-200">
                <img
                  src="/images/team/meshkatul-islam-bg-program-head.jpg"
                  alt="Meshkatul Islam"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                 Meshkatul Islam
                </h3>
                <p className="text-[#006c54] font-medium mb-3">
                  Executive Director
                </p>
                <p className="text-gray-600 text-sm">
                  Leading our organization with 15+ years of experience in
                  pediatric care and family support services.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="h-80 overflow-hidden bg-gray-200">
                <img
                  src="/images/team/aleksandra-fedorova-director.jpg"
                  alt="Aleksandra Fedorova"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Aleksandra Fedorova
                </h3>
                <p className="text-[#006c54] font-medium mb-3">
                  Director of Programs
                </p>
                <p className="text-gray-600 text-sm">
                  Overseeing all support programs and ensuring families
                  receive comprehensive care and resources.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow text-center md:col-start-2">
              <div className="h-80 overflow-hidden bg-gray-200">
                <img
                  src="/images/team/Maria-schwartzenberger-director.jpg"
                  alt="Maria Schwartzenberger"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Maria Schwartzenberger
                </h3>
                <p className="text-[#006c54] font-medium mb-3">
                  Medical Director
                </p>
                <p className="text-gray-600 text-sm">
                  Board-certified pediatric surgeon specializing in cleft care
                  with extensive international mission experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-20 bg-gradient-to-br from-[#d52a1d] to-[#b32318] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Make a Difference Today
              </h2>
              <p className="text-lg text-gray-100 mb-8 leading-relaxed">
                Your donation directly supports families affected by cleft
                conditions. Every contribution helps provide specialized
                feeding supplies, educational resources, surgical care, and
                ongoing support to families in need.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">
                      $50 provides a specialized feeding bottle kit
                    </p>
                    <p className="text-sm text-gray-100">
                      Helping infants with cleft conditions receive proper
                      nutrition
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">
                      $100 funds family counseling sessions
                    </p>
                    <p className="text-sm text-gray-100">
                      Supporting families through emotional challenges
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">
                      $500 supports surgical care in Bangladesh
                    </p>
                    <p className="text-sm text-gray-100">
                      Transforming lives through mission work
                    </p>
                  </div>
                </div>
              </div>

              <a href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-10119" target="_blank" rel="noreferrer">
                <Button className="bg-white text-[#d52a1d] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
                  Donate Now
                </Button>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quick Donate
              </h3>
              <p className="text-gray-600 mb-6">
                Scan the QR code to make a secure donation
              </p>
              <div className="bg-gray-100 w-64 h-64 mx-auto rounded-lg flex items-center justify-center mb-4">
                <div className="text-gray-400 text-center">
                  <div className="text-6xl mb-2">⚡</div>
                  <p className="text-sm">QR Code</p>
                  <p className="text-xs">Quick Donation</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                All donations are tax-deductible
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup variant="dark" />

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help. Reach out with questions or to learn more
              about our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">
                Leave a message and we will call you back
              </p>
              <a href="tel:14705881844" className="text-[#006c54] font-semibold hover:underline">
                1 (470) 588-1844
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">
                Feel free to reach out to us
              </p>
              <a href="mailto:info@cleftfamilysupport.org" className="text-[#006c54] font-semibold hover:underline">
                info@cleftfamilysupport.org
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Social Media
              </h3>
              <p className="text-gray-600 mb-4">
                Follow us for updates and stories
              </p>
              <div className="flex justify-center gap-3">
                <a href="https://www.facebook.com/CleftFamilySupportFoundation/" target="_blank" rel="noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-[#006c54] hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/cleftfamilysupport/" target="_blank" rel="noreferrer" className="p-2 bg-gray-100 rounded-full hover:bg-[#006c54] hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
