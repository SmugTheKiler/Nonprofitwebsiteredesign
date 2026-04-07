import { Button } from '../components/ui/button';

export function GetInvolved() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[520px] flex items-center bg-gradient-to-r from-[#006c54] to-[#005544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get Involved
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-gray-200">
            Many ways to support our mission and help families affected by cleft conditions.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Donate */}
            <div className="bg-white rounded-3xl p-10 shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-[#d52a1d] to-[#b32318] rounded-2xl p-8 mb-6 group-hover:scale-105 transition-transform">
                <span className="text-6xl">❤️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Donate</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Your donation helps children with cleft lip and palate in the U.S. receive the care and support they need to thrive.
              </p>
              <a href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-10119" target="_blank" rel="noreferrer">
                <Button className="bg-[#d52a1d] hover:bg-[#b32318] text-white rounded-full w-full py-3">
                  Donate
                </Button>
              </a>
            </div>

            {/* Corporate Partnerships */}
            <div className="bg-white rounded-3xl p-10 shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-[#006c54] to-[#005544] rounded-2xl p-8 mb-6 group-hover:scale-105 transition-transform">
                <span className="text-6xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Corporate Partnerships</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Partner with us to make a bigger impact. Explore sponsorship and collaboration opportunities.
              </p>
              <a href="/corporate-partnerships">
                <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-full py-3">
                  Learn More
                </Button>
              </a>
            </div>

            {/* Ambassador Program */}
            <div className="bg-white rounded-3xl p-10 shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-[#ffcc00] to-[#e6b800] rounded-2xl p-8 mb-6 group-hover:scale-105 transition-transform">
                <span className="text-6xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Become an Ambassador</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Spread the word! Share our mission through your social networks and help us reach more families.
              </p>
              <a href="/programs/ambassador">
                <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-full py-3">
                  Join Us
                </Button>
              </a>
            </div>

            {/* Join Newsletter */}
            <div className="bg-white rounded-3xl p-10 shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-[#006c54] to-[#005544] rounded-2xl p-8 mb-6 group-hover:scale-105 transition-transform">
                <span className="text-6xl">📧</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Join Our Newsletter</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Stay connected! Get updates, inspiring stories, and opportunities to make a difference right in your inbox.
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSebN7m4SZT9VZOv17D6TycPnH9x72Gu5pvDYYuy_PF2s48ZYw/viewform?usp=sharing" target="_blank" rel="noreferrer">
                <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-full py-3">
                  Subscribe
                </Button>
              </a>
            </div>

            {/* Volunteer */}
            <div className="bg-white rounded-3xl p-10 shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-[#006c54] to-[#005544] rounded-2xl p-8 mb-6 group-hover:scale-105 transition-transform">
                <span className="text-6xl">🙋</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Volunteer</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Make a difference by giving your time. Support events, programs, and families in need.
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSczfm8YFG0OSk9sUDd-mntsqlY4WBnAbS6DhAcxTRWM1uOVzA/viewform" target="_blank" rel="noreferrer">
                <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-full py-3">
                  Volunteer
                </Button>
              </a>
            </div>

            {/* Fundraise */}
            <div className="bg-white rounded-3xl p-10 shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-[#006c54] to-[#005544] rounded-2xl p-8 mb-6 group-hover:scale-105 transition-transform">
                <span className="text-6xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fundraise</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Explore ongoing campaigns and find out how you can help raise funds for our mission.
              </p>
              <a href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-10119" target="_blank" rel="noreferrer">
                <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full w-full py-3">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Community Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals and families making a difference in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src="/images/events/person-in-frame3.jpg"
                  alt="Community member"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">Dedicated community advocates</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src="/images/events/person-in-frame4.jpg"
                  alt="Community member"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">Supporting families together</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src="/images/events/group-of-people-wearing-cfsf-shirts.jpg"
                  alt="CFSF community"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">United in our mission</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src="/images/events/happy-post-cleft-surgery-child.jpg"
                  alt="Success story"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm">Stories of hope and healing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Attend Events</h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Join us for upcoming events, workshops, and community gatherings — online and in person.
          </p>
          <a href="https://www.facebook.com/groups/cleftfamiliesofgeorgia" target="_blank" rel="noreferrer">
            <Button className="bg-[#006c54] hover:bg-[#005544] text-white rounded-full px-10 py-6 text-lg">
              Join Our Facebook Community →
            </Button>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#006c54] to-[#005544]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-200 mb-10">
            Whatever your passion, there's a way for you to support our mission and impact families' lives.
          </p>
          <a href="https://www.zeffy.com/en-US/donation-form/donate-to-make-a-difference-10119" target="_blank" rel="noreferrer">
            <Button className="bg-[#ffcc00] text-gray-900 hover:bg-[#e6b800] rounded-full px-10 py-6 text-lg font-semibold">
              Donate Today
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
