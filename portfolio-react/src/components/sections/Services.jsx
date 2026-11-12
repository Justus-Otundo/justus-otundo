import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { SectionHeader } from '../ui';
import { getIcon } from '../../utils/icons';
import { services, builderJourney } from '../../data/services';

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-dark-900" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Services"
          title="Practical support,"
          highlight="from plan to production."
          subtitle="I help teams turn business needs into dependable digital products, and stay accountable for the result."
          align="left"
        />

        <ul className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const IconComponent = getIcon(service.icon);

            return (
              <motion.li
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (index % 2) * 0.06, duration: 0.35 }}
                className="rounded-3xl border border-stone-700/70 bg-dark-800 p-5 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent-500/20 bg-accent-500/10 text-accent-500">
                    {IconComponent && <IconComponent className="h-5 w-5" aria-hidden="true" />}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-stone-200">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-400">{service.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${service.title} areas`}>
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="rounded-full border border-stone-700/80 px-3 py-1 text-xs font-medium text-stone-500"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>

        <div className="mt-20 border-t border-stone-700/70 pt-16 sm:mt-24 sm:pt-20">
          <div className="mb-9 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">
              A clear process
            </p>
            <h3 className="text-3xl font-semibold tracking-tight text-stone-200 sm:text-4xl">
              How I work
            </h3>
            <p className="mt-3 text-base leading-7 text-stone-400">
              You know what is happening, what comes next, and who is accountable at every stage.
            </p>
          </div>

          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {builderJourney.map((phase, index) => (
              <motion.li
                key={phase.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.06, duration: 0.35 }}
                className="rounded-3xl border border-stone-700/70 bg-dark-800 p-5 sm:p-6"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-stone-500">
                    Step {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-stone-200">{phase.title}</h4>
                <p className="mt-2 text-sm leading-6 text-stone-400">{phase.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.div
          className="mt-12 flex flex-col gap-5 rounded-3xl border border-stone-700/70 bg-dark-800 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-lg font-semibold text-stone-200 sm:text-xl">
              Have a challenge worth solving?
            </h3>
            <p className="mt-1 text-sm leading-6 text-stone-400">
              Tell me what your team needs. We can work out the right next step together.
            </p>
          </div>
          <Link
            to="contact"
            spy
            smooth
            duration={500}
            offset={-80}
            className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
            role="button"
            tabIndex={0}
          >
            Start a conversation
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
