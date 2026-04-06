import { Button } from '../components/ui/button';
import { Heart, CheckCircle, CreditCard, Calendar, Building2 } from 'lucide-react';
import { useState } from 'react';

export function Donate() {
  const [donationAmount, setDonationAmount] = useState<number | null>(null);
  const [isMonthly, setIsMonthly] = useState(false);

  const amounts = [25, 50, 100, 250, 500];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-gradient-to-r from-[#d52a1d] to-[#b32318]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Donation</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Your gift transforms lives and provides hope to families affected by cleft conditions
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Gift</h2>
              <p className="text-gray-600">
                Every dollar makes a difference in the lives of families
              </p>
            </div>

            {/* Donation Type Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-full p-1 inline-flex">
                <button
                  onClick={() => setIsMonthly(false)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
                    !isMonthly
                      ? 'bg-white text-[#006c54] shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  One-Time
                </button>
                <button
                  onClick={() => setIsMonthly(true)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
                    isMonthly
                      ? 'bg-white text-[#006c54] shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setDonationAmount(amount)}
                  className={`p-6 rounded-xl border-2 transition-all font-semibold text-xl ${
                    donationAmount === amount
                      ? 'border-[#006c54] bg-[#006c54] text-white'
                      : 'border-gray-200 hover:border-[#006c54] text-gray-900'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">Or enter a custom amount:</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">$</span>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#006c54] focus:outline-none text-lg"
                  onChange={(e) => setDonationAmount(Number(e.target.value))}
                />
              </div>
            </div>

            {/* Donor Information */}
            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#006c54] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#006c54] focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#006c54] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#006c54] focus:outline-none"
                />
              </div>
            </div>

            {/* Dedication (Optional) */}
            <div className="mb-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-4">Make this gift in honor or memory of someone (Optional)</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#006c54] focus:outline-none bg-white"
                  />
                </div>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="dedication" className="w-4 h-4 text-[#006c54]" />
                    <span className="text-gray-700">In Honor Of</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="dedication" className="w-4 h-4 text-[#006c54]" />
                    <span className="text-gray-700">In Memory Of</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-[#d52a1d] hover:bg-[#b32318] text-white rounded-xl py-6 text-lg font-semibold">
              <Heart className="mr-2 h-5 w-5" />
              Complete Donation
            </Button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Your donation is secure and tax-deductible. Tax ID: 12-3456789
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how your donation supports families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-[#006c54] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">$50</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Feeding Kit</h3>
              <p className="text-gray-600">
                Provides a complete specialized feeding bottle kit for an infant with cleft conditions
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-[#006c54] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">$100</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Counseling Sessions</h3>
              <p className="text-gray-600">
                Funds family counseling sessions to support emotional well-being
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-[#006c54] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">$500</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Surgical Care</h3>
              <p className="text-gray-600">
                Supports cleft repair surgery for a child in Bangladesh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Other Ways to Give</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore additional options to support our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Monthly Giving</h3>
              <p className="text-gray-600 text-sm mb-4">
                Become a sustaining donor with automatic monthly contributions
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Corporate Matching</h3>
              <p className="text-gray-600 text-sm mb-4">
                Double your impact through your employer's matching gift program
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Planned Giving</h3>
              <p className="text-gray-600 text-sm mb-4">
                Include us in your estate planning or beneficiary designations
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Stock Donations</h3>
              <p className="text-gray-600 text-sm mb-4">
                Donate appreciated securities for potential tax benefits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Your Gift Matters</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-[#006c54] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Direct Impact</h3>
                    <p className="text-gray-600">
                      Your donation directly supports families with specialized feeding supplies, counseling, and medical care.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-[#006c54] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Transparent Operations</h3>
                    <p className="text-gray-600">
                      85% of every dollar goes directly to programs and services for families in need.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-[#006c54] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Tax Deductible</h3>
                    <p className="text-gray-600">
                      All donations are tax-deductible to the fullest extent allowed by law.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-[#006c54] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Proven Results</h3>
                    <p className="text-gray-600">
                      Over 2,500 families supported with measurable outcomes and lasting impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1771323994415-aba85604d4b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb25hdGlvbiUyMGdpdmluZyUyMGhhbmRzfGVufDF8fHx8MTc3NTQ0MDYzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Giving hands"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#006c54] to-[#005544] rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Quick Donate with Your Phone</h2>
            <p className="text-xl text-gray-200 mb-8">
              Scan the QR code below to make a secure donation from your mobile device
            </p>
            <div className="bg-white rounded-2xl p-8 inline-block">
              <div className="w-64 h-64 bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-2">⚡</div>
                  <p className="text-sm">QR Code</p>
                  <p className="text-xs">Mobile Donation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
