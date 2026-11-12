import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { profile } from '../../data/profile';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Work', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Services', to: 'services' },
  { name: 'Contact', to: 'contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        isScrolled ? 'border-stone-700/80 bg-dark-900/95 backdrop-blur-sm' : 'border-transparent bg-dark-900/80'
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          to="home"
          smooth
          duration={500}
          className="flex cursor-pointer items-center gap-2.5 text-sm font-semibold tracking-tight text-stone-200 sm:gap-3 sm:text-base"
          tabIndex={0}
          role="link"
          aria-label="Go to top"
        >
          <img
            src={profile.avatar}
            alt=""
            aria-hidden="true"
            className="h-9 w-9 shrink-0 rounded-full border border-stone-600 object-cover object-top"
          />
          <span>
            {profile.name}
            {' '}
            <span className="font-normal text-stone-500">/ Portfolio</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              duration={500}
              offset={-80}
              activeClass="text-accent-500"
              className="cursor-pointer text-sm font-medium text-stone-400 transition-colors hover:text-stone-200"
              tabIndex={0}
              role="link"
            >
              {link.name}
            </Link>
          ))}
          <span className="h-5 w-px bg-stone-600" aria-hidden="true" />
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent-500 transition-colors hover:text-accent-600"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-stone-300 transition-colors hover:bg-dark-700 md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-stone-700 bg-dark-900 md:hidden"
          >
            <div className="mx-auto max-w-7xl px-5 py-3 sm:px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  activeClass="text-accent-500"
                  className="block cursor-pointer border-b border-stone-700/70 py-3 text-sm font-medium text-stone-300 last:border-0"
                  tabIndex={0}
                  role="link"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 text-sm font-semibold text-accent-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                View resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
