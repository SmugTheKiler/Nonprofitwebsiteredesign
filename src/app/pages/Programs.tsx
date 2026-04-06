import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Bottle, Users, UserPlus, ArrowRight, Heart } from 'lucide-react';

export function Programs() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-gradient-to-r from-[#006c54] to-[#005544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive support designed to meet families at every stage of their journey
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Supporting Families Every Step of the Way</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From birth through adulthood, our programs provide the education, resources, and support that families need to navigate the cleft journey with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cleft Bottle Feeding Program */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-72 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1758575514409-cb650ba2f4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwYm90dGxlJTIwZmVlZGluZyUyMGluZmFudHxlbnwxfHx8fDE3NzU0NDA2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Baby bottle feeding"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#006c54] p-2 rounded-full">
                    <Bottle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Cleft Bottle Feeding Program</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Specialized feeding education and support for parents of infants with cleft conditions. We provide hands-on training, specialized bottles, and ongoing guidance to ensure proper nutrition and bonding.
                </p>
                <Link to="/programs/cleft-bottle-feeding">
                  <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Family Support Programs */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-72 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1760982150415-183b194eaf4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBzdXBwb3J0JTIwaHVnZ2luZ3xlbnwxfHx8fDE3NzU0NDA2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Family support"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#006c54] p-2 rounded-full">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Family Support Programs</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Connect with counselors, peer support groups, and educational resources. We help families navigate medical decisions, emotional challenges, and practical aspects of cleft care.
                </p>
                <Link to="/programs/family-support">
                  <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Ambassador Program */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-72 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjb21tdW5pdHklMjBoZWxwfGVufDF8fHx8MTc3NTQ0MDYzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Community volunteers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#006c54] p-2 rounded-full">
                    <UserPlus className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Ambassador Program</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Become an advocate and raise awareness about cleft conditions. Share your story, educate your community, and help eliminate stigma while supporting other families.
                </p>
                <Link to="/programs/ambassador">
                  <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Programs Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support that addresses every aspect of the cleft journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600 text-sm">
                Access to medical professionals and experienced counselors who specialize in cleft care.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Peer Support</h3>
              <p className="text-gray-600 text-sm">
                Connect with other families who understand your journey and can offer encouragement.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Bottle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Practical Resources</h3>
              <p className="text-gray-600 text-sm">
                Specialized equipment, educational materials, and tools to support daily care.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Emotional Support</h3>
              <p className="text-gray-600 text-sm">
                Counseling services to help families navigate the emotional aspects of the journey.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Events</h3>
              <p className="text-gray-600 text-sm">
                Regular gatherings, workshops, and activities that bring families together.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-[#006c54] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <UserPlus className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Advocacy Training</h3>
              <p className="text-gray-600 text-sm">
                Learn how to advocate for your child and educate others about cleft conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect with our programs today and join a community that understands your journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-support">
              <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full px-8 py-6 text-lg">
                Get Support
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-[#006c54] text-[#006c54] hover:bg-[#006c54] hover:text-white rounded-full px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
