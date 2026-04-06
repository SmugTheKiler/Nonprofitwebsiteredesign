import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { UserPlus, Heart, Megaphone, Share2, Award, Users } from 'lucide-react';

export function AmbassadorProgram() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-gradient-to-r from-[#006c54] to-[#005544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <UserPlus className="h-10 w-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Ambassador Program</h1>
          </div>
          <p className="text-xl text-gray-200 max-w-2xl">
            Become a voice for change and help support families in your community
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Be an Ambassador</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our Ambassador Program empowers individuals—parents, adults with cleft conditions, healthcare professionals, and advocates—to raise awareness about cleft lip and palate while supporting families in their communities.
                </p>
                <p>
                  As an ambassador, you'll share your story, educate others, fight stigma, and connect families with the resources they need. You'll join a passionate community of advocates making a real difference in the lives of families affected by cleft conditions.
                </p>
                <p>
                  Whether you have personal experience with cleft conditions or simply want to make a difference, there's a place for you in our Ambassador Program.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjb21tdW5pdHklMjBoZWxwfGVufDF8fHx8MTc3NTQ0MDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community volunteers"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Ambassadors Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Ambassadors Do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Make an impact through various advocacy activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Megaphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Raise Awareness</h3>
              <p className="text-gray-600 leading-relaxed">
                Share information about cleft conditions through social media, community events, and conversations. Help eliminate stigma and increase understanding.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Share2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Story</h3>
              <p className="text-gray-600 leading-relaxed">
                Your personal experience is powerful. Share your journey to inspire hope, provide perspective, and show families they're not alone.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support Families</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect new families with resources, answer questions based on your experience, and provide peer support to those navigating their cleft journey.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Organize Events</h3>
              <p className="text-gray-600 leading-relaxed">
                Host or participate in fundraisers, awareness walks, support group meetings, and community education events in your local area.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Megaphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Educate Communities</h3>
              <p className="text-gray-600 leading-relaxed">
                Present at schools, healthcare facilities, or community organizations to increase understanding about cleft conditions and available support.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advocate for Change</h3>
              <p className="text-gray-600 leading-relaxed">
                Work on advocacy initiatives to improve access to care, increase research funding, and promote policies that support families affected by cleft conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Being an Ambassador */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ambassador Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What you'll gain as part of our ambassador community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#006c54]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Training & Resources</h3>
              <p className="text-gray-600 text-sm">
                Access comprehensive training materials, presentation templates, and educational resources to help you be an effective advocate.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#006c54]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Supportive Network</h3>
              <p className="text-gray-600 text-sm">
                Connect with other ambassadors through regular meetings, online forums, and special events. Share ideas and support each other.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#006c54]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Recognition & Impact</h3>
              <p className="text-gray-600 text-sm">
                See the real difference you make in families' lives and receive recognition for your advocacy efforts and contributions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#006c54]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Involvement</h3>
              <p className="text-gray-600 text-sm">
                Choose activities that fit your schedule and interests. Whether you have a few hours a month or want to be more involved, there's room for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Become an Ambassador */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Become an Ambassador</h2>
            <p className="text-lg text-gray-600">
              Join our community of advocates in four simple steps
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg flex gap-4">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Submit Application</h3>
                <p className="text-gray-600">
                  Fill out our online ambassador application form. Tell us about yourself, your connection to cleft conditions, and why you want to become an ambassador.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg flex gap-4">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Training</h3>
                <p className="text-gray-600">
                  Attend our virtual ambassador training session where you'll learn about cleft conditions, effective advocacy strategies, and available resources.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg flex gap-4">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your Activities</h3>
                <p className="text-gray-600">
                  Work with our ambassador coordinator to identify activities that match your interests, skills, and availability.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg flex gap-4">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Start Making a Difference</h3>
                <p className="text-gray-600">
                  Begin your advocacy work! We'll support you with resources, guidance, and connection to our ambassador community.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full px-8 py-6 text-lg">
                Apply to Become an Ambassador
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ambassador Testimonial */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ambassador Stories</h2>
            <p className="text-lg text-gray-600">
              Hear from our ambassadors making a difference
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Jennifer Martinez</h3>
              <p className="text-gray-600">Ambassador since 2023</p>
            </div>
            <p className="text-gray-700 italic text-center leading-relaxed">
              "Being an ambassador has given me a way to turn our family's experience into something positive. I love connecting with new parents and showing them that there's hope and support available. Every time I share our story, I see how it impacts others and helps eliminate stigma. This program has been incredibly rewarding!"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
