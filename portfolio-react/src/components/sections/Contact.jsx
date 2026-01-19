import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { Card, SectionHeader } from '../ui';
import { contact, social, profile, formspreeEndpoint } from '../../data/profile';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get In"
          highlight="Touch"
          subtitle="Let's discuss your next project"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Send Message
              </h3>
              <p className="text-zinc-400 mb-6">
                Ready to start your project? Drop me a message!
              </p>

              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircleIcon className="w-16 h-16 text-success-400 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-zinc-400">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 rounded-xl transition-all duration-300 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <PaperAirplaneIcon className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 md:p-8 h-full">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Contact Info
              </h3>
              <p className="text-zinc-400 mb-6">
                Get in touch through any of these channels
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <a
                      href={`tel:${contact.phoneLink}`}
                      className="text-zinc-400 hover:text-accent-400 transition-colors"
                    >
                      {contact.phone}
                    </a>
                    <span className="block text-xs text-success-400 mt-1">
                      Available 24/7
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-success-500/20 flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-5 h-5 text-success-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-zinc-400 hover:text-accent-400 transition-colors"
                    >
                      {contact.email}
                    </a>
                    <span className="block text-xs text-success-400 mt-1">
                      Quick Response
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-highlight-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-5 h-5 text-highlight-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <span className="text-zinc-400">{contact.locationFull}</span>
                    <span className="block text-xs text-success-400 mt-1">
                      Remote Friendly
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-dark-600">
                <h4 className="text-white font-medium mb-4">Connect With Me</h4>
                <div className="flex gap-3">
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-dark-700 text-zinc-400 hover:bg-accent-500/20 hover:text-accent-400 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-dark-700 text-zinc-400 hover:bg-accent-500/20 hover:text-accent-400 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-dark-700 text-zinc-400 hover:bg-accent-500/20 hover:text-accent-400 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-6 p-4 bg-dark-700/50 rounded-xl">
                <div className="flex items-center gap-2 text-zinc-400">
                  <ClockIcon className="w-4 h-4 text-accent-400" />
                  <span className="text-sm">{profile.responseTime}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
