import { useState } from 'react';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'dark' | 'light';
}

export function NewsletterSignup({ variant = 'dark' }: NewsletterSignupProps) {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to Formspree endpoint - replace with your actual endpoint
      const response = await fetch('https://formspree.io/f/mwvwyvaw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: 'New Newsletter Signup',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const isDark = variant === 'dark';
  const textColorClass = isDark ? 'text-white' : 'text-gray-900';
  const secondaryTextClass = isDark ? 'text-gray-200' : 'text-gray-600';
  const inputBgClass = isDark ? 'bg-white/10 border-white/20' : 'bg-white border-gray-200';
  const inputTextClass = isDark ? 'text-white placeholder-gray-300' : 'text-gray-900 placeholder-gray-500';

  return (
    <section className={`py-20 ${isDark ? 'bg-gradient-to-r from-[#006c54] to-[#005544] text-white' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${textColorClass}`}>
            Stay Connected
          </h2>
          <p className={`text-lg mb-10 max-w-2xl mx-auto ${secondaryTextClass}`}>
            Join our newsletter to receive inspiring stories, program updates, and opportunities to make a difference in the lives of families affected by cleft conditions.
          </p>

          {submitted ? (
            <div className={`max-w-md mx-auto p-6 rounded-xl ${isDark ? 'bg-white/10 border border-white/20' : 'bg-green-50 border border-green-200'}`}>
              <div className="flex items-center gap-3 justify-center">
                <div className={`flex-shrink-0 ${isDark ? 'text-white' : 'text-green-600'}`}>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className={isDark ? 'text-white' : 'text-green-800'}>
                  Thank you for subscribing! Check your email for confirmation.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${textColorClass}`}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={`w-full px-4 py-3 rounded-lg border-2 ${inputBgClass} ${inputTextClass} focus:outline-none focus:border-[#006c54] transition-colors`}
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${textColorClass}`}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 rounded-lg border-2 ${inputBgClass} ${inputTextClass} focus:outline-none focus:border-[#006c54] transition-colors`}
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className={`w-full py-3 text-lg font-semibold rounded-lg transition-all ${
                  isDark
                    ? 'bg-white text-[#006c54] hover:bg-gray-100 disabled:opacity-50'
                    : 'bg-[#006c54] text-white hover:bg-[#005544] disabled:opacity-50'
                }`}
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </Button>

              <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
                We'll never share your email. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
