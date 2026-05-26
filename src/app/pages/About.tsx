import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Target, Users, Globe, Award, BookOpen } from 'lucide-react';

export function About() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center bg-gradient-to-r from-[#006c54] to-[#005544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="uppercase tracking-[0.3em] text-sm text-[#ffcc00] mb-4">Cleft Family Support Foundation</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Supporting families born with cleft lip and palate
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-gray-200 mb-8">
            We are a new nonprofit building support and community in Georgia while extending care across the United States. We have plans to expand internationally, including to Bangladesh, in the future.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="https://www.facebook.com/groups/cleftfamiliesofgeorgia" target="_blank" rel="noreferrer">
              <Button className="bg-white text-[#006c54] hover:bg-gray-100 rounded-full px-8 py-4 text-base">
                Join Our Facebook Group
              </Button>
            </a>
            <span className="text-sm text-gray-200">Cleft Families of Georgia</span>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Through age-specific programs, mentorship, education, and emotional care, we uplift families with love, empathy, and understanding.
                </p>
                <p>
                  We support children and adults born with cleft lip and palate across the U.S., with plans to expand internationally including to Bangladesh in the future.
                </p>
                <p>
                  Currently, we provide support across the U.S. to children and adults born with cleft lip and palate — including those who never received surgery. We are laying the groundwork to expand internationally in the future.
                </p>
                <p>
                  We’re beginning our journey in the state of Georgia, where our local programs, mentorship, and community support are taking root.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1760982150415-183b194eaf4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBzdXBwb3J0JTIwaHVnZ2luZ3xlbnwxfHx8fDE3NzU0NDA2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Family support"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Work */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission, Vision, and Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building a foundation of care, connection, and hope for every family affected by cleft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <img src="/images/icons/logo.png" alt="logo" className="h-10 w-10" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Through age-specific programs, mentorship, education, and emotional care, we uplift families with love, empathy, and understanding.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="bg-[#ffcc00] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where children with cleft lip and/or palate are seen, supported, and never left to face stigma or isolation alone.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="bg-[#d52a1d] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Work</h3>
              <p className="text-gray-600 leading-relaxed">
                We are building programs across the U.S., beginning in Georgia with local support groups, feeding education, mentorship, and community outreach. Our vision includes expanding to Bangladesh and other regions in the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Where We Work</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We are a new organization, founded in 2025. We are starting our work in our home state of Georgia, where we plan to launch our first support programs. Step by step, we plan to grow.
                </p>
                <p>
                  Our goal is to work across the whole United States, and we are planning for future expansion to Bangladesh and other regions, partnering with local organizations to build sustainable support networks and care that reaches families where they live.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1733195296321-b99d129b09cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMGdsb2JhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzc1MzU1ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="World map"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Community Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/images/events/person-in-frame.jpg"
                alt="Community member"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/images/events/person-in-frame1.jpg"
                alt="Community member"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/images/events/happy-post-cleft-surgery-child.jpg"
                alt="Happy child"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm">Stories of healing and hope from families we support.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/images/events/person-in-frame2.jpg"
                alt="Community member"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm">Passionate community members dedicated to our mission.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/images/events/group-of-people-wearing-cfsf-shirts.jpg"
                alt="CFSF community"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm">United as a community to make a difference.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#006c54] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/10 p-12 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#ffcc00] mb-4">Join Our Feeding Program</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Support families as they learn to feed and care for their newborns</h2>
              <p className="text-gray-200 leading-relaxed">
                We offer guidance on specialized feeding techniques, safe bottle options, and ongoing education so families can feel more confident and supported from the very beginning.
              </p>
            </div>
            <div className="flex items-center justify-start">
              <Link to="/programs/cleft-bottle-feeding">
                <Button className="bg-[#ffcc00] text-gray-900 hover:bg-[#e6b800] rounded-full px-8 py-5 text-base">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Help</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From the very first diagnosis through every stage of life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local support in Georgia</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                At CFSF, we are just beginning our journey in our home state of Georgia, where we’re launching our first support programs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We’re starting by building a local Facebook group for families, planning in-person meetups, and looking for ways to engage local resources to support our mission.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A long-term plan for care</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our goal is to provide emotional support, mentorship, and resources from the moment parents learn during an ultrasound that their child has a cleft—through childhood, adolescence, and into adulthood.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As we grow, we will continue developing age-specific programs for each stage of life with a cleft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Cleft */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Is a “Cleft”?</h3>
              <p className="text-gray-600 leading-relaxed">
                The word “cleft” comes from the Old English word cleofan, meaning “to split” or “to divide.” In medicine, it describes a gap or opening in the tissues of the lip or palate that forms during fetal development.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Words Matter</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Words can hurt or heal. That’s why it’s so important to use kind, respectful language when talking about cleft conditions.
              </p>
              <p className="text-gray-600 leading-relaxed font-semibold">
                “Children with cleft lip and/or palate.”
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                This puts the child first — not the condition.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What About Other Parts of the World?</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                In some countries, the words used are different — and not always kind. In older times, the word “harelip” was common. Today, it’s considered outdated and offensive.
              </p>
              <p className="text-gray-600 leading-relaxed">
                In Bangladesh, many rural families still say things like “cut lip” or “broken mouth” (in Bengali: cheṭa ṭhōṭ or kata mukh). These terms can feel shameful or frightening to a child and their family.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Awareness Matters</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                In many parts of the world, families don’t know what a cleft is or where to find help.
              </p>
              <p className="text-gray-600 leading-relaxed">
                They may feel scared, alone, or even ashamed. That’s why education and support are so important — especially in underserved communities.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The Cleft Family Support Foundation is here to help bridge that gap, one smile at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-[#006c54] rounded-3xl p-10 text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">From the Founder</h2>
              <p className="leading-relaxed">
                The journey began at 20 weeks of pregnancy, right around Christmas 2024, with a diagnosis of cleft lip and possible cleft palate. It was a time of fear, uncertainty, and a desperate search for answers.
              </p>
              <p className="leading-relaxed mt-4">
                After birth, breastfeeding was not possible. Feeding became a full-time job — involving pumping, special bottles, and constant adaptation. In those early months, NAM therapy and medical taping became part of daily life.
              </p>
              <p className="leading-relaxed mt-4">
                The realization that access to high-quality care was not guaranteed everywhere sparked the creation of the Cleft Family Support Foundation. The founder’s son is half Bangladeshi, and knowing that his life could have been so different had he been born elsewhere created a powerful sense of responsibility.
              </p>
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Multiple hospital visits became routine. And while navigating treatment, there was also the pain of being in public — enduring the curious or confused stares of people who simply didn’t understand. Yet each challenge added a new layer of strength and resilience.
              </p>
              <p>
                In countries like Bangladesh, even the most basic support for children born with cleft lip and palate is often missing. Families may not have access to specialized feeding bottles, clear guidance, or emotional support.
              </p>
              <p>
                This realization sparked the creation of the Cleft Family Support Foundation. No family should walk this journey alone. And no child should be denied care simply because of where they were born.
              </p>
              <p className="font-semibold text-gray-900">
                Healing begins with compassion. And compassion knows no borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Hearts Behind the Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leaders guiding our work with care, culture, and global perspective.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <div className="mx-auto mb-6 w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-white overflow-hidden">
                <img src="/images/team/aleksandra-fedorova-director.jpg" alt="Aleksandra Fedorova" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Aleksandra Fedorova</h3>
              <p className="text-[#006c54] font-medium mb-3">Director</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <div className="mx-auto mb-6 w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-white overflow-hidden">
                <img src="/images/team/meshkatul-islam-bg-program-head.jpg" alt="Meshkatul Islam" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Meshkatul Islam</h3>
              <p className="text-[#006c54] font-medium mb-3">Bangladesh Program Head</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <div className="mx-auto mb-6 w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-white overflow-hidden">
                <img src="/images/team/alina-gamaleeva-founder.jpg" alt="Alina Gamaleeva" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Alina Gamaleeva</h3>
              <p className="text-[#006c54] font-medium mb-3">Founder, President</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
              <div className="mx-auto mb-6 w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-white overflow-hidden">
                <img src="/images/team/Maria-schwartzenberger-director.jpg" alt="Maria Schwartzenberger" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Maria Schwartzenberger</h3>
              <p className="text-[#006c54] font-medium mb-3">Director</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
