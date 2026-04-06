import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Heart, Target, Users, Award, Globe, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-gradient-to-r from-[#006c54] to-[#005544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Learn about our mission, values, and commitment to supporting families affected by cleft conditions
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Cleft Family Support Foundation was founded with a simple but powerful mission: to ensure that no family faces the challenges of cleft lip and palate alone. Our journey began when a group of parents, medical professionals, and advocates came together, united by their experiences and determination to create lasting change.
                </p>
                <p>
                  What started as a small support group has grown into a comprehensive organization serving thousands of families across the United States and internationally. We've expanded our programs to include specialized feeding education, family counseling, peer support networks, and international mission work.
                </p>
                <p>
                  Today, we continue to evolve and expand our services, always keeping families at the center of everything we do. Our commitment remains unwavering: to provide compassionate, comprehensive support to every family navigating the cleft journey.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1760982150415-183b194eaf4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBzdXBwb3J0JTIwaHVnZ2luZ3xlbnwxfHx8fDE3NzU0NDA2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Family support"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide comprehensive support, education, and resources to families affected by cleft lip and palate, ensuring every child has access to quality care and the opportunity to thrive. We are committed to empowering families with knowledge, connecting them with resources, and advocating for their needs at every stage of their journey.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#ffcc00] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A world where every family affected by cleft conditions has access to the support, education, and medical care they need to live full, confident lives. We envision communities where cleft conditions are well understood, stigma is eliminated, and every child can smile with confidence and reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and shape our approach to family support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#006c54] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We approach every family with empathy, understanding, and genuine care for their unique journey.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#006c54] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in the power of connection and create supportive networks where families can thrive together.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#006c54] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in our programs, resources, and support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg text-center">
              <div className="h-80 bg-gray-200 flex items-center justify-center">
                <Users className="h-24 w-24 text-gray-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Sarah Johnson</h3>
                <p className="text-[#006c54] font-medium mb-3">Executive Director</p>
                <p className="text-gray-600 text-sm mb-4">
                  Dr. Johnson brings over 15 years of experience in pediatric care and nonprofit leadership. She is passionate about creating comprehensive support systems for families.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg text-center">
              <div className="h-80 bg-gray-200 flex items-center justify-center">
                <Users className="h-24 w-24 text-gray-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Chen</h3>
                <p className="text-[#006c54] font-medium mb-3">Director of Programs</p>
                <p className="text-gray-600 text-sm mb-4">
                  Michael oversees all support programs, ensuring families receive comprehensive care and resources. He has a background in social work and family counseling.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg text-center">
              <div className="h-80 bg-gray-200 flex items-center justify-center">
                <Users className="h-24 w-24 text-gray-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Maria Rodriguez</h3>
                <p className="text-[#006c54] font-medium mb-3">Medical Director</p>
                <p className="text-gray-600 text-sm mb-4">
                  A board-certified pediatric surgeon specializing in cleft care with extensive international mission experience in Bangladesh and other countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Impact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">2025 Annual Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A year of growth, support, and transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">2,500+</div>
              <p className="text-gray-600">Families Supported</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">850</div>
              <p className="text-gray-600">Counseling Sessions</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">125</div>
              <p className="text-gray-600">Surgeries Funded</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-[#006c54] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">1,200</div>
              <p className="text-gray-600">Feeding Kits Distributed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#006c54] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl text-gray-200 mb-8">
            Whether you're seeking support or looking to help, there are many ways to get involved with our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-support">
              <Button className="bg-white text-[#006c54] hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
                Get Support
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button className="bg-[#ffcc00] text-gray-900 hover:bg-[#e6b800] rounded-full px-8 py-6 text-lg">
                Get Involved
              </Button>
            </Link>
            <Link to="/donate">
              <Button className="bg-[#d52a1d] hover:bg-[#b32318] text-white rounded-full px-8 py-6 text-lg">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
