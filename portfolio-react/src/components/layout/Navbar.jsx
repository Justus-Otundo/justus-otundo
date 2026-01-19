import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { profile } from '../../data/profile';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Services', to: 'services' },
  { name: 'Contact', to: 'contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-lg border-b border-dark-700/50 shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-10 h-10 rounded-full border-2 border-accent-500/50 object-cover"
            />
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-lg">{profile.name}</h1>
              <p className="text-accent-400 text-xs uppercase tracking-wider">
                {profile.title}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="text-accent-400 bg-accent-500/10"
                className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-dark-700/50 rounded-lg transition-all duration-200 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 rounded-xl transition-all duration-300 cursor-pointer shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-900/98 backdrop-blur-lg border-b border-dark-700/50"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  activeClass="text-accent-400 bg-accent-500/10"
                  className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-dark-700/50 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 mt-4 text-center text-white bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl cursor-pointer"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
