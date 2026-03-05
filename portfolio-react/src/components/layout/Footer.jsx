import { profile, contact, social } from '../../data/profile';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Have a project in mind?
          </h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            I'm currently available for freelance work and new opportunities. Let's build something great together.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-accent-600 font-bold rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {contact.email}
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-dark-900 border-t border-dark-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex items-center gap-4">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-12 h-12 rounded-full border-2 border-accent-500/40 object-cover"
              />
              <div>
                <h4 className="text-white font-bold text-lg">{profile.name}</h4>
                <p className="text-slate-400 text-sm">{profile.title}</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              <a
                href={`tel:${contact.phoneLink}`}
                className="hover:text-accent-400 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {contact.phone}
              </a>
              <span className="hidden md:block w-1 h-1 rounded-full bg-slate-600" />
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {contact.location}
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-dark-700/80 border border-slate-700/50 text-slate-400 hover:text-white hover:border-accent-500/50 hover:bg-accent-500/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-dark-700/80 border border-slate-700/50 text-slate-400 hover:text-white hover:border-accent-500/50 hover:bg-accent-500/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-dark-700/80 border border-slate-700/50 text-slate-400 hover:text-white hover:border-accent-500/50 hover:bg-accent-500/10 transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-5 border-t border-dark-700/50 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs">
              Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
