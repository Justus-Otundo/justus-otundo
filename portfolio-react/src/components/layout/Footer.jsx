import { Link } from 'react-scroll';
import { ArrowUpIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { profile, contact, social } from '../../data/profile';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-700/70 bg-dark-900">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="flex flex-col gap-8 border-b border-stone-700/70 pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">Have a project in mind?</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-stone-200 sm:text-4xl">
              Let&apos;s make something useful.
            </h2>
          </div>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex w-fit items-center gap-2 border-b border-accent-500 pb-2 text-sm font-semibold text-accent-500 transition-colors hover:text-accent-600"
          >
            {contact.email}
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="flex flex-col gap-6 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-stone-200">{profile.name}</p>
            <p className="mt-1 text-sm text-stone-500">{profile.title} · {contact.location}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-stone-500">
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent-500">LinkedIn</a>
            <a href={social.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent-500">GitHub</a>
            <span>&copy; {currentYear}</span>
            <Link
              to="home"
              smooth
              duration={500}
              className="inline-flex cursor-pointer items-center gap-1.5 transition-colors hover:text-accent-500"
              tabIndex={0}
              role="link"
            >
              Back to top
              <ArrowUpIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
