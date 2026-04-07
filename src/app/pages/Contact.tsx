import { Button } from '../components/ui/button';
import { Phone, Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import { NewsletterSignup } from '../components/NewsletterSignup';

export function Contact() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-gradient-to-r from-[#006c54] to-[#005544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            We're here to help. Reach out with questions or to learn more about our programs.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#006c54] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Phone</h3>
              <p className="text-gray-600 mb-4">
                Leave a message and we will call you back
              </p>
              <a href="tel:14705881844" className="text-[#006c54] font-semibold text-lg hover:underline">
                1 (470) 588-1844
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#006c54] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-600 mb-4">
                Feel free to reach out to us
              </p>
              <a href="mailto:info@cleftfamilysupport.org" className="text-[#006c54] font-semibold text-lg hover:underline">
                info@cleftfamilysupport.org
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#006c54] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Follow Us</h3>
              <p className="text-gray-600 mb-4">
                Connect on social media
              </p>
              <div className="flex justify-center gap-3">
                <a href="https://www.facebook.com/CleftFamilySupportFoundation/" target="_blank" rel="noreferrer" className="text-[#006c54] hover:text-[#005544] font-medium transition-colors">Facebook</a>
                <a href="https://www.instagram.com/cleftfamilysupport/" target="_blank" rel="noreferrer" className="text-[#006c54] hover:text-[#005544] font-medium transition-colors">Instagram</a>
                <a href="https://www.threads.com/@cleftfamilysupport?xmt=AQGzpc0CJqvZQ889gWQfuqSZgGusl9JV9OEZnR5F8i3XY3g" target="_blank" rel="noreferrer" className="text-[#006c54] hover:text-[#005544] font-medium transition-colors">Threads</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#006c54] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#006c54] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#006c54] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#006c54] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                <select
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#006c54] focus:outline-none"
                >
                  <option value="">Select a subject</option>
                  <option value="support">Request Support</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="donate">Donation Inquiry</option>
                  <option value="partnership">Corporate Partnership</option>
                  <option value="ambassador">Ambassador Program</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message *</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#006c54] focus:outline-none resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mt-1 w-5 h-5 text-[#006c54] border-gray-300 rounded focus:ring-[#006c54]"
                />
                <label htmlFor="newsletter" className="text-gray-600 text-sm">
                  I would like to receive updates, newsletters, and information about events and programs from the Cleft Family Support Foundation.
                </label>
              </div>

              <Button className="w-full bg-[#006c54] hover:bg-[#005544] text-white rounded-xl py-6 text-lg font-semibold">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>

              <p className="text-center text-sm text-gray-500">
                * Required fields. We'll respond to your message within 24 hours during business days.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup variant="light" />

      {/* Social Media */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Connect With Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            Follow us on social media for updates, stories, and community news
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com/CleftFamilySupportFoundation/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#006c54] p-4 rounded-full hover:bg-[#005544] transition-colors group"
              aria-label="Facebook"
            >
              <Facebook className="h-8 w-8 text-white" />
            </a>
            <a
              href="https://www.instagram.com/cleftfamilysupport/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#006c54] p-4 rounded-full hover:bg-[#005544] transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="h-8 w-8 text-white" />
            </a>
            <a
              href="https://www.threads.com/@cleftfamilysupport?xmt=AQGzpc0CJqvZQ889gWQfuqSZgGusl9JV9OEZnR5F8i3XY3g"
              target="_blank"
              rel="noreferrer"
              className="bg-[#006c54] p-4 rounded-full hover:bg-[#005544] transition-colors group"
              aria-label="Threads"
            >
              <Mail className="h-8 w-8 text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Quick answers before you reach out
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What are your office hours?</h3>
              <p className="text-gray-600">
                Our office is open Monday through Friday from 9:00 AM to 5:00 PM EST. However, our 24/7 helpline is available anytime for urgent support needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How quickly will you respond to my message?</h3>
              <p className="text-gray-600">
                We strive to respond to all inquiries within 24 hours during business days. For urgent matters, please call us at 1 (470) 588-1844.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do I need an appointment to visit your office?</h3>
              <p className="text-gray-600">
                While walk-ins are welcome, we recommend scheduling an appointment to ensure a staff member is available to assist you. Please call ahead or use our contact form.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can you help me find a cleft specialist in my area?</h3>
              <p className="text-gray-600">
                Yes! We maintain a directory of cleft care teams and specialists across the United States. Contact us and we'll be happy to provide referrals in your area.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How can I request educational materials or resources?</h3>
              <p className="text-gray-600">
                You can request materials by phone, email, or through our contact form. We'll mail physical resources or send digital versions, depending on your preference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-20 bg-[#006c54] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 rounded-2xl p-8">
            <Phone className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Need Immediate Support?</h2>
            <p className="text-xl text-gray-200 mb-6">
              Our 24/7 helpline is always available for urgent questions about feeding, medical concerns, or emotional support.
            </p>
            <a href="tel:5551234567">
              <Button className="bg-white text-[#006c54] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
                Call (555) 123-4567 Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
