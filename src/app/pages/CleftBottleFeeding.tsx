import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { PillBottle, Heart, BookOpen, Users, CheckCircle } from 'lucide-react';

export function CleftBottleFeeding() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-gradient-to-r from-[#006c54] to-[#005544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <PillBottle className="h-10 w-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Cleft Bottle Feeding Program</h1>
          </div>
          <p className="text-xl text-gray-200 max-w-2xl">
            Specialized support and education for feeding infants with cleft lip and palate
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why This Program Matters</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Feeding an infant with a cleft lip or palate can be challenging. The opening in the lip or roof of the mouth can make it difficult for babies to create the suction needed for traditional breastfeeding or bottle feeding.
                </p>
                <p>
                  Our Cleft Bottle Feeding Program provides comprehensive education, specialized equipment, and ongoing support to ensure your baby receives proper nutrition while you build confidence in feeding techniques.
                </p>
                <p>
                  We work closely with families from diagnosis through successful feeding, providing hands-on training, troubleshooting support, and encouragement every step of the way.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/images/programs/stuff-included-in-cfsf-feeding-program-kits.jpg"
                alt="Items included in CFSF feeding program kits"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Provide</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive resources to support successful feeding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <PillBottle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Bottles</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We provide specialized cleft feeding bottles designed to help babies with cleft conditions feed more easily. These bottles require less suction and allow parents to control milk flow.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#006c54] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Multiple bottle options to find what works best</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#006c54] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Complete feeding kits with nipples and accessories</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#006c54] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Replacement supplies as your baby grows</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education & Training</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                One-on-one training sessions with experienced feeding specialists who will teach you proper techniques and answer all your questions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#006c54] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Hands-on demonstration of feeding techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#006c54] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Video tutorials you can reference at home</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#006c54] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Written guides and feeding schedules</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our support doesn't end after initial training. We're here to help troubleshoot challenges and celebrate successes throughout your feeding journey.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#006c54] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">24/7 hotline for urgent feeding questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#006c54] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Follow-up consultations and check-ins</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#006c54] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Troubleshooting support when challenges arise</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Peer Connection</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Connect with other parents who have successfully navigated cleft feeding. Share experiences, tips, and encouragement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#006c54] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Monthly parent support groups</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#006c54] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Mentorship from experienced parents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#006c54] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Online community forum</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Get Started</h2>
            <p className="text-lg text-gray-600">
              Accessing our Cleft Bottle Feeding Program is easy
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg flex gap-4">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">
                  Reach out via phone, email, or our contact form. Let us know about your baby's needs and when you're expecting or if your baby has already arrived.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg flex gap-4">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Consultation</h3>
                <p className="text-gray-600">
                  We'll set up an initial consultation with one of our feeding specialists to discuss your specific situation and create a personalized plan.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg flex gap-4">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Receive Your Kit</h3>
                <p className="text-gray-600">
                  We'll send you a specialized feeding kit with bottles, nipples, and educational materials tailored to your baby's needs.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg flex gap-4">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get Training & Support</h3>
                <p className="text-gray-600">
                  Attend training sessions, connect with our support team, and join our parent community. We're with you every step of the way!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLScJiR9EpIdGaikozQ_O3tWY8-VhX8LRYeAw-aM6Xubfjic1dg/viewform" target="_blank" rel="noreferrer">
              <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full px-8 py-6 text-lg">
                Enroll in the Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Parent Stories</h2>
            <p className="text-lg text-gray-600">
              Hear from families who have benefited from our program
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sarah & Tom</h3>
              <p className="text-gray-600">Parents of Emma, 8 months</p>
            </div>
            <p className="text-gray-700 italic text-center leading-relaxed">
              "The Cleft Bottle Feeding Program gave us the confidence and knowledge we needed to feed our daughter successfully. The specialized bottles made such a difference, and having a feeding specialist available to answer our questions was invaluable. We're so grateful for this program!"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
