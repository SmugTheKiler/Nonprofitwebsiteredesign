import { Button } from '../components/ui/button';

export function AmbassadorProgram() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center bg-gradient-to-r from-[#006c54] to-[#005544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Become an Ambassador
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-gray-200">
            Support. Connect. Inspire.
          </p>
        </div>
      </section>

      {/* About the Program */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl mb-12">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Are you passionate about making a difference in the lives of children with cleft lip and palate and their families? Join us as an Ambassador for the Cleft Family Support Foundation and become part of a supportive, mission-driven community that uplifts and empowers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our Ambassadors help us expand awareness, reach more families in need, and build a strong, compassionate network of support across the globe.
            </p>
          </div>

          {/* Roles */}
          <div className="bg-white rounded-3xl p-12 shadow-xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">🤝 Role of an Ambassador</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#006c54] font-bold text-2xl leading-none">•</span>
                <span className="text-gray-600">Raise awareness about cleft conditions and the emotional needs of families</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#006c54] font-bold text-2xl leading-none">•</span>
                <span className="text-gray-600">Share our mission, values, and free resources in your community</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#006c54] font-bold text-2xl leading-none">•</span>
                <span className="text-gray-600">Represent the Foundation online and/or locally through outreach and advocacy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#006c54] font-bold text-2xl leading-none">•</span>
                <span className="text-gray-600">Help connect families to emotional support, mentorship, and helpful information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#006c54] font-bold text-2xl leading-none">•</span>
                <span className="text-gray-600">Collaborate with other Ambassadors and volunteers to strengthen our global impact</span>
              </li>
            </ul>
          </div>

          {/* Who Can Apply */}
          <div className="bg-white rounded-3xl p-12 shadow-xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">🌟 Who Can Apply</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#006c54] font-bold text-2xl leading-none">•</span>
                <span className="text-gray-600">Parents, caregivers, and family members of children with cleft conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#006c54] font-bold text-2xl leading-none">•</span>
                <span className="text-gray-600">Individuals with lived experience (adults born with cleft lip and/or palate)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#006c54] font-bold text-2xl leading-none">•</span>
                <span className="text-gray-600">Medical professionals, educators, or mental health advocates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#006c54] font-bold text-2xl leading-none">•</span>
                <span className="text-gray-600">Anyone who shares our passion for helping families feel supported and seen</span>
              </li>
            </ul>
          </div>

          {/* What You'll Receive */}
          <div className="bg-white rounded-3xl p-12 shadow-xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">💌 What You'll Receive</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#006c54] font-bold text-2xl leading-none">•</span>
                <span className="text-gray-600">A chance to make meaningful impact in your community</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#006c54] font-bold text-2xl leading-none">•</span>
                <span className="text-gray-600">Access to training, resources, and networking opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#006c54] font-bold text-2xl leading-none">•</span>
                <span className="text-gray-600">The ability to shape programs and initiatives through your ideas and experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#006c54] font-bold text-2xl leading-none">•</span>
                <span className="text-gray-600">Ongoing support and collaboration with the Cleft Family Support Foundation team</span>
              </li>
            </ul>
          </div>

          {/* How to Join */}
          <div className="bg-white rounded-3xl p-12 shadow-xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">📝 How to Join</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We welcome Ambassadors from the United States. If you feel called to support, inspire, and connect, we'd love to hear from you.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPVMVsBhCgyNVAQp1fssV1Gw24Y6DH97hSWmH6HEFe8ir1KA/viewform" target="_blank" rel="noreferrer">
              <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full px-10 py-6 text-lg font-semibold">
                Become an Ambassador →
              </Button>
            </a>
          </div>

          {/* Contact for Questions */}
          <div className="bg-gray-50 rounded-3xl p-12 shadow-xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Reach out to our team to learn more about the Ambassador Program and how you can get involved.
            </p>
            <a href="mailto:info@cleftfamilysupport.org" className="text-[#006c54] font-semibold hover:underline">
              info@cleftfamilysupport.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
