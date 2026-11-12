import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDownIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { profile, contact, social, stats } from '../../data/profile';

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-stone-700/70"
      aria-label="Introduction"
    >
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16 lg:px-12 lg:pb-12 lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-500 sm:mb-7">
              <span className="h-px w-8 bg-highlight-500" aria-hidden="true" />
              Senior Software Developer
              <span className="text-stone-500">Nairobi, Kenya</span>
            </p>

            <h1 className="max-w-3xl text-[clamp(2.65rem,8vw,5.75rem)] font-medium leading-[0.99] tracking-tight text-stone-200">
              I build systems
              <br />
              <span className="font-serif italic text-accent-500">people rely on.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-stone-400 sm:mt-8 sm:text-lg sm:leading-8">
              {profile.bio}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <Link
                to="projects"
                spy
                smooth
                duration={500}
                offset={-80}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600 sm:w-auto"
                role="button"
                tabIndex={0}
              >
                View selected work
                <ArrowDownIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-600 px-6 py-3.5 text-sm font-semibold text-stone-300 transition-colors hover:border-accent-400 hover:text-accent-500 sm:w-auto"
              >
                View my resume
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone-500">
              <a className="transition-colors hover:text-accent-500" href={social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="transition-colors hover:text-accent-500" href={social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="transition-colors hover:text-accent-500" href={`mailto:${contact.email}`}>Email</a>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-sm lg:max-w-md lg:justify-self-end"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <div className="relative rounded-[2rem] bg-dark-700 p-2.5 sm:p-3">
              <img
                src={profile.avatar}
                alt={`${profile.name}, ${profile.title}`}
                className="aspect-[4/4.5] w-full rounded-[1.5rem] object-cover object-top"
                fetchPriority="high"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/40 bg-dark-800/95 p-4 shadow-sm sm:bottom-6 sm:left-6 sm:right-6">
                <p className="font-semibold text-stone-200">{profile.name}</p>
                <p className="mt-1 text-sm text-stone-500">{profile.title}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-success-400 sm:justify-end">
              <span className="h-2 w-2 rounded-full bg-success-400" aria-hidden="true" />
              Open to new opportunities
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-3 border-t border-stone-700/70 pt-6 sm:mt-16 sm:gap-6 sm:pt-8 lg:mt-14">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-0">
              <p className="text-2xl font-semibold tracking-tight text-stone-200 sm:text-3xl">{stat.number}</p>
              <p className="mt-1 text-[11px] leading-4 text-stone-500 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
