import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Heart, Users, DollarSign, Calendar, Megaphone, Globe } from 'lucide-react';

export function GetInvolved() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-gradient-to-r from-[#006c54] to-[#005544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Join us in supporting families affected by cleft conditions
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ways to Make a Difference</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              There are many ways to support our mission and help families in need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#d52a1d] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Donate</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Make a financial contribution to support our programs, provide supplies to families, and fund mission work in underserved communities.
              </p>
              <Link to="/donate">
                <Button className="bg-[#d52a1d] hover:bg-[#b32318] text-white rounded-full w-full">
                  Donate Now
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Share your time and skills to support families, help with events, provide administrative support, or join our mission trips.
              </p>
              <Link to="/contact">
                <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-full">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Megaphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Become an Ambassador</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Raise awareness, share your story, and help educate your community about cleft conditions and available support.
              </p>
              <Link to="/programs/ambassador">
                <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-full">
                  Join the Program
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Host a Fundraiser</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Organize a fundraising event in your community. We'll provide tools, resources, and support to make it successful.
              </p>
              <Link to="/contact">
                <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-full">
                  Get Started
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Attend Events</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Participate in our awareness walks, family gatherings, educational workshops, and fundraising galas.
              </p>
              <Link to="/contact">
                <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-full">
                  View Events
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join a Mission Trip</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Travel to Bangladesh with our medical team to provide surgical care and support to families in underserved communities.
              </p>
              <Link to="/contact">
                <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-full">
                  Learn About Missions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Share your time and talents to support our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peer Mentor</h3>
              <p className="text-gray-600 mb-4">
                Support newly diagnosed families by sharing your experience, answering questions, and providing emotional encouragement. Perfect for parents who have navigated the cleft journey.
              </p>
              <div className="text-sm text-gray-500">Time commitment: 2-3 hours/month</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Event Support</h3>
              <p className="text-gray-600 mb-4">
                Help with setup, registration, activities, and coordination for our community events, fundraisers, and awareness campaigns.
              </p>
              <div className="text-sm text-gray-500">Time commitment: Flexible</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Administrative Support</h3>
              <p className="text-gray-600 mb-4">
                Assist with office tasks, data entry, mailings, phone calls, and other administrative needs to keep our organization running smoothly.
              </p>
              <div className="text-sm text-gray-500">Time commitment: 4-6 hours/week</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Help create content, manage posts, engage with followers, and spread awareness about cleft conditions through our social media channels.
              </p>
              <div className="text-sm text-gray-500">Time commitment: 3-5 hours/week</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Healthcare professionals can join our mission trips to Bangladesh or provide telehealth consultations to families in need.
              </p>
              <div className="text-sm text-gray-500">Time commitment: Varies</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resource Development</h3>
              <p className="text-gray-600 mb-4">
                Help create educational materials, guides, videos, and other resources that support families navigating cleft care.
              </p>
              <div className="text-sm text-gray-500">Time commitment: Flexible</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full px-8 py-6 text-lg">
                Apply to Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Corporate Partnerships</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Partner with us to make a meaningful impact while engaging your employees and customers in a cause that transforms lives. We offer flexible partnership opportunities including:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-[#006c54] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Cause marketing campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-[#006c54] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Employee giving programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-[#006c54] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Volunteer days and team building</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-[#006c54] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Sponsorship opportunities</span>
                </li>
              </ul>
              <Link to="/corporate-partnerships">
                <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full px-8 py-6 text-lg">
                  Learn About Partnerships
                </Button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1758518729240-7162d07427b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwYXJ0bmVyc2hpcCUyMG9mZmljZXxlbnwxfHx8fDE3NzU0NDA2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Corporate partnership"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-[#006c54] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Impact</h2>
            <p className="text-lg text-gray-200">
              See the difference our volunteers and supporters make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl text-gray-200">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-xl text-gray-200">Volunteer Hours Annually</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$850K</div>
              <div className="text-xl text-gray-200">Raised by Fundraisers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Volunteer Stories</h2>
            <p className="text-lg text-gray-600">
              Hear from our volunteers about their experience
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">David Thompson</h3>
              <p className="text-gray-600">Peer Mentor Volunteer</p>
            </div>
            <p className="text-gray-700 italic text-center leading-relaxed">
              "Volunteering as a peer mentor has been incredibly rewarding. Being able to support families who are just starting their cleft journey and share what we learned along the way gives purpose to our own experience. I love seeing families gain confidence and feel less alone."
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our community of supporters and help transform lives
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donate">
              <Button className="bg-[#d52a1d] hover:bg-[#b32318] text-white rounded-full px-8 py-6 text-lg">
                Donate Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
