import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Users, Heart, BookOpen, Phone, Video, MessageCircle } from 'lucide-react';

export function FamilySupport() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-gradient-to-r from-[#006c54] to-[#005544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-10 w-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Family Support Programs</h1>
          </div>
          <p className="text-xl text-gray-200 max-w-2xl">
            Connecting families with resources, counseling, and peer support networks
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1760982150415-183b194eaf4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBzdXBwb3J0JTIwaHVnZ2luZ3xlbnwxfHx8fDE3NzU0NDA2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Family support"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">You're Not Alone</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Navigating a cleft diagnosis can feel overwhelming. From understanding medical procedures to managing emotions and practical challenges, families often need support beyond medical care.
                </p>
                <p>
                  Our Family Support Programs connect you with counselors, peer mentors, and educational resources designed to help you feel confident, informed, and supported throughout your entire journey.
                </p>
                <p>
                  Whether you're expecting a baby with a cleft condition, just received a diagnosis, or supporting a child through surgeries and therapies, we're here to walk alongside you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Support Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive resources tailored to your family's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Individual Counseling</h3>
              <p className="text-gray-600 leading-relaxed">
                One-on-one sessions with licensed counselors who specialize in supporting families affected by cleft conditions. Address emotional challenges, medical decisions, and family dynamics.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support Groups</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with other families in monthly group meetings. Share experiences, learn from others, and build lasting friendships with people who truly understand your journey.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Helpline</h3>
              <p className="text-gray-600 leading-relaxed">
                Access our support helpline anytime, day or night. Speak with trained volunteers who can provide information, encouragement, and referrals to additional resources.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Resources</h3>
              <p className="text-gray-600 leading-relaxed">
                Access comprehensive guides, videos, and materials covering everything from medical procedures to speech development, feeding, and social-emotional support.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Virtual Workshops</h3>
              <p className="text-gray-600 leading-relaxed">
                Participate in online workshops covering topics like preparing for surgery, understanding speech therapy, navigating insurance, and advocating for your child.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Peer Mentorship</h3>
              <p className="text-gray-600 leading-relaxed">
                Get matched with a parent mentor who has walked a similar path. Receive guidance, encouragement, and practical advice from someone who truly understands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Educational Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Knowledge is power—we provide comprehensive information to help you make informed decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#006c54]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Understanding Cleft Conditions</h3>
              <p className="text-gray-600 text-sm mb-3">
                Comprehensive guides explaining cleft lip and palate, causes, types, and what to expect.
              </p>
              <Button variant="link" className="text-[#006c54] p-0">
                Download Guide →
              </Button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#006c54]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Surgery Timeline & Preparation</h3>
              <p className="text-gray-600 text-sm mb-3">
                What to expect before, during, and after surgery at different ages and developmental stages.
              </p>
              <Button variant="link" className="text-[#006c54] p-0">
                Download Guide →
              </Button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#006c54]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Speech Development & Therapy</h3>
              <p className="text-gray-600 text-sm mb-3">
                Information about speech challenges, therapy options, and how to support language development at home.
              </p>
              <Button variant="link" className="text-[#006c54] p-0">
                Download Guide →
              </Button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#006c54]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Insurance & Financial Support</h3>
              <p className="text-gray-600 text-sm mb-3">
                Navigate insurance coverage, find financial assistance programs, and access resources for medical expenses.
              </p>
              <Button variant="link" className="text-[#006c54] p-0">
                Download Guide →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Access Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Access Support</h2>
            <p className="text-lg text-gray-600">
              Getting started with our Family Support Programs is simple
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-[#006c54] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900">Contact Our Team</h3>
              </div>
              <p className="text-gray-600 ml-14">
                Call, email, or fill out our online form. Our intake coordinator will discuss your needs and connect you with appropriate services.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-[#006c54] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900">Create Your Support Plan</h3>
              </div>
              <p className="text-gray-600 ml-14">
                Work with our team to identify which services will be most helpful for your family's unique situation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-[#006c54] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900">Start Your Journey</h3>
              </div>
              <p className="text-gray-600 ml-14">
                Begin connecting with counselors, joining groups, or accessing resources. We'll be here to support you every step of the way.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full px-8 py-6 text-lg">
                Access Family Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
