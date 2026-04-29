import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/outline';
import { SectionHeader } from '../ui';
import { getIcon } from '../../utils/icons';
import { testimonials, stats } from '../../data/testimonials';

export function Testimonials() {
  return (
    <>
      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden" aria-label="Key statistics">
        <div className="absolute inset-0 stats-gradient" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/20 via-transparent to-dark-900/20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => {
              const IconComponent = getIcon(stat.icon);
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center" aria-hidden="true">
                      {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-4xl md:text-5xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm md:text-base text-white/80 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-20 lg:py-24 relative" aria-label="Client testimonials">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 to-dark-900" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Client"
            highlight="Testimonials"
            subtitle="What my clients say about working with me"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => {
              const IconComponent = getIcon(testimonial.icon);
              return (
                <motion.figure
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="group h-full"
                >
                  <div className="card-tilt relative h-full bg-gradient-to-br from-dark-800/60 to-dark-900/80 backdrop-blur-sm rounded-3xl border border-slate-700/40 group-hover:border-accent-500/40 p-7 sm:p-9 lg:p-10 overflow-hidden">
                    {/* Watermark quote mark — left side, behind the stars */}
                    <div className="absolute top-4 left-5 sm:top-5 sm:left-6 text-accent-500/10 select-none pointer-events-none" aria-hidden="true">
                      <svg className="w-20 h-20 sm:w-24 sm:h-24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>

                    <div className="relative flex flex-col h-full">
                      {/* Rating */}
                      <div className="flex gap-1 mb-5 sm:mb-6" aria-label={`${testimonial.rating} out of 5 stars`}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400"
                            aria-hidden="true"
                          />
                        ))}
                      </div>

                      {/* Quote body */}
                      <blockquote className="flex-1 mb-6 sm:mb-8">
                        <p className="text-base sm:text-[17px] lg:text-lg text-slate-200 leading-relaxed italic">
                          &ldquo;{testimonial.content}&rdquo;
                        </p>
                      </blockquote>

                      {/* Divider stripe */}
                      <div className="h-px w-12 bg-gradient-to-r from-accent-500 to-transparent mb-4 sm:mb-5" aria-hidden="true" />

                      {/* Author */}
                      <figcaption className="flex items-center gap-3 sm:gap-4">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-accent-500/20 to-highlight-500/15 border border-accent-500/30 flex items-center justify-center shrink-0" aria-hidden="true">
                          {IconComponent && <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400" />}
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-white text-sm sm:text-base leading-tight">
                            {testimonial.name}
                          </div>
                          <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                            {testimonial.role}
                          </div>
                        </div>
                      </figcaption>
                    </div>
                  </div>
                </motion.figure>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
