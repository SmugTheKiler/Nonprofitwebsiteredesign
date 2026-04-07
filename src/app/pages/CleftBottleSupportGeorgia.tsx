import { Button } from '../components/ui/button';
import { CheckCircle, Mail } from 'lucide-react';

export function CleftBottleSupportGeorgia() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center bg-gradient-to-r from-[#006c54] to-[#005544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Cleft Bottle Support – Georgia
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-gray-200">
            A free support program for expecting families in Georgia with a prenatal diagnosis of cleft lip and/or palate.
          </p>
        </div>
      </section>

      {/* About the Program */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About the Program</h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Cleft Bottle Support – Georgia is a free support program for expecting families living in Georgia, USA who have recently received a prenatal diagnosis of cleft lip and/or palate. We understand how overwhelming this news can be — and we're here to help you take the first step with confidence and care.
            </p>
            <p>
              This program offers specialized feeding bottles for your baby, free of charge, along with emotional support and helpful resources from families who have walked this path before you.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">What's Included</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
              <CheckCircle className="h-6 w-6 text-[#006c54] flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 text-lg">Free cleft-feeding bottles (selected based on your needs)</p>
                <p className="text-gray-600 mt-2">If your cleft care team has already recommended a specific bottle, you may request that type</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
              <CheckCircle className="h-6 w-6 text-[#006c54] flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 text-lg">A welcome card and basic information about feeding a baby with a cleft</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md">
              <CheckCircle className="h-6 w-6 text-[#006c54] flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 text-lg">Optional contact with other parents who have experience with cleft care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility</h3>
          <p className="text-lg text-gray-600 mb-8">To qualify for the program, you must:</p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-[#006c54] font-bold text-xl">•</span>
              <span className="text-gray-600 text-lg">Live in the state of Georgia (USA)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#006c54] font-bold text-xl">•</span>
              <span className="text-gray-600 text-lg">Be currently pregnant</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#006c54] font-bold text-xl">•</span>
              <span className="text-gray-600 text-lg">Have received a prenatal diagnosis of cleft lip and/or palate (via ultrasound or other medical evaluation)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#006c54] font-bold text-xl">•</span>
              <span className="text-gray-600 text-lg">Be willing to provide a shipping address and your baby's estimated due date</span>
            </li>
          </ul>

          <div className="bg-[#fff3cd] border-l-4 border-[#ffcc00] p-6 rounded">
            <p className="text-gray-800">
              <strong>Please note:</strong> One application per pregnancy and one address. Multiple applications from the same address will not be considered. This program is only for those who have recently received a prenatal cleft diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Apply to CBS-Georgia</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            To join the program, please fill out the form below. We will contact you to confirm your eligibility and ship your free bottle.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScJiR9EpIdGaikozQ_O3tWY8-VhX8LRYeAw-aM6Xubfjic1dg/viewform?usp=send_form" target="_blank" rel="noreferrer">
            <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full px-8 py-4 text-lg">
              Apply Now →
            </Button>
          </a>
        </div>
      </section>

      {/* Why We Do This */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why We Do This</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            We believe early support matters. Many parents aren't aware of cleft-specific bottles until after delivery — but preparation makes a difference. We want you to feel confident, supported, and less alone from the very beginning.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            This program is completely free and run by volunteers through the Cleft Family Support Foundation.
          </p>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Looking Ahead</h3>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              If this pilot program in Georgia is successful, we plan to expand to other U.S. states to support more families across the country.
            </p>
            <p>
              In the future, we also hope to bring this program to Bangladesh, where many families face even greater challenges accessing specialized cleft care and supplies.
            </p>
          </div>
        </div>
      </section>

      {/* Program Limitations */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-200">
            <p className="text-sm text-gray-700 text-center">
              <strong>Program availability is limited and is subject to change.</strong> Only a certain number of applicants will be accepted based on eligibility. We reserve the right to modify or cancel the program at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Questions?</h3>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Contact us:
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center space-y-4">
            <div>
              <p className="flex items-center justify-center gap-2 mb-2">
                <Mail className="h-5 w-5 text-[#006c54]" />
                <span className="text-gray-600">📧 Email:</span>
              </p>
              <a href="mailto:info@cleftfamilysupport.org" className="text-[#006c54] font-semibold hover:underline text-lg">
                info@cleftfamilysupport.org
              </a>
            </div>
            <div>
              <p className="text-gray-600 mb-4">📩 DM us on Instagram or Facebook</p>
              <div className="flex justify-center gap-4">
                <a href="https://www.instagram.com/cleftfamilysupport/" target="_blank" rel="noreferrer" className="text-[#006c54] font-semibold hover:underline">
                  Instagram
                </a>
                <a href="https://www.facebook.com/CleftFamilySupportFoundation/" target="_blank" rel="noreferrer" className="text-[#006c54] font-semibold hover:underline">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
