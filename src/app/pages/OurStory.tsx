import { Link } from 'react-router';
import { Button } from '../components/ui/button';

export function OurStory() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center bg-gradient-to-r from-[#006c54] to-[#005544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The Story Behind the Foundation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-gray-200">
            How a personal journey became a mission to support families worldwide.
          </p>
        </div>
      </section>

      {/* Founder's Journey */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#006c54] to-[#005544] rounded-3xl p-12 text-white shadow-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">From the Founder of Cleft Family Support Foundation</h2>
            
            <div className="space-y-6 leading-relaxed text-lg">
              <p>
                The journey began at 20 weeks of pregnancy, right around Christmas 2024, with a diagnosis of cleft lip and possible cleft palate. It was a time of fear, uncertainty, and a desperate search for answers. The following months were filled with research — finding real stories, medical information, and images that helped prepare for the path ahead.
              </p>
              
              <p>
                After birth, breastfeeding was not possible. Feeding became a full-time job — involving pumping, special bottles, and constant adaptation. In those early months, NAM therapy and medical taping became part of daily life. These treatments required not only physical care, but deep emotional strength. There were days filled with tears, exhaustion, and moments of doubt. But belief in the child, in the medical team, and in the long-term outcome carried the journey forward.
              </p>
              
              <p>
                Multiple hospital visits became routine. And while navigating treatment, there was also the pain of being in public — enduring the curious or confused stares of people who simply didn't understand. Yet each challenge added a new layer of strength and resilience.
              </p>
              
              <p>
                One truth became clear: immense gratitude for the place of birth. Access to high-quality care in the United States is not something taken for granted.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Realization</h3>
              <p>
                In countries like Bangladesh, even the most basic support for children born with cleft lip and palate is often missing. Families may not have access to specialized feeding bottles, which are essential for nourishing a newborn with a cleft. Parents are rarely given clear guidance or emotional support, and many are left without the tools or resources to care for their child in the way they hope to.
              </p>
            </div>

            <div>
              <p>
                Without these foundational forms of care, the challenges quickly multiply. What begins as a feeding difficulty can grow into a lifelong struggle — especially when surgical treatment is delayed or unavailable. Access to cleft surgeries is limited by poverty, lack of awareness, and a shortage of trained specialists. As a result, some children grow up without ever receiving the procedure that could change their lives.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Powerful Responsibility</h3>
              <p>
                This realization sparked the creation of the Cleft Family Support Foundation. The founder's son is half Bangladeshi, and knowing that his life could have been so different had he been born elsewhere created a powerful sense of responsibility. The foundation was born out of both gratitude and purpose — to support families locally, and to one day extend that support globally.
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-900">
                No family should walk this journey alone. And no child should be denied care simply because of where they were born.
              </p>
            </div>

            <div>
              <p className="text-lg italic text-gray-700">
                Healing begins with compassion. And compassion knows no borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Community in Action</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/images/events/group-of-people-wearing-cfsf-shirts.jpg"
                alt="Community members in CFSF shirts"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">Community Events</h3>
                <p className="text-gray-600 text-sm mt-2">Our community coming together to support families affected by cleft conditions.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/images/events/happy-post-cleft-surgery-child.jpg"
                alt="Happy child post-surgery"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">Success Stories</h3>
                <p className="text-gray-600 text-sm mt-2">Stories of hope, resilience, and transformation through medical care and support.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/images/events/funny-picture-of-child-post-cleft-surgery.jpg"
                alt="Child smiling after surgery"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">Joy and Healing</h3>
                <p className="text-gray-600 text-sm mt-2">Moments of joy and happiness as children recover and thrive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of something meaningful. Support families today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-10119" target="_blank" rel="noreferrer">
              <Button className="bg-[#d52a1d] hover:bg-[#b32318] text-white rounded-full px-8 py-6 text-lg">
                Donate Now
              </Button>
            </a>
            <Link to="/get-involved">
              <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full px-8 py-6 text-lg">
                Get Involved
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
