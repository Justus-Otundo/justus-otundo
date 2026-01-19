import { motion } from 'framer-motion';
import { UserIcon, BriefcaseIcon, MagnifyingGlassIcon, StarIcon } from '@heroicons/react/24/outline';
import { Card, CardContent, SectionHeader } from '../ui';
import { testimonials, stats } from '../../data/testimonials';
import {
  ClockIcon,
  RectangleStackIcon,
  FaceSmileIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const testimonialIconMap = {
  UserIcon: UserIcon,
  BriefcaseIcon: BriefcaseIcon,
  MagnifyingGlassIcon: MagnifyingGlassIcon,
};

const statsIconMap = {
  ClockIcon: ClockIcon,
  RectangleStackIcon: RectangleStackIcon,
  FaceSmileIcon: FaceSmileIcon,
  TrophyIcon: TrophyIcon,
};

export function Testimonials() {
  return (
    <>
      {/* Stats Section - Blue Executive Style */}
      <section className="py-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 stats-gradient" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/20 via-transparent to-dark-900/20" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-highlight-400 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-highlight-400 to-transparent opacity-50" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => {
              const IconComponent = statsIconMap[stat.icon];
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
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
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
      <section id="testimonials" className="py-20 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800/50 to-dark-900" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Client"
            highlight="Testimonials"
            subtitle="What my clients say about working with me"
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => {
              const IconComponent = testimonialIconMap[testimonial.icon];
              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full card-executive">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-500 to-highlight-500 flex items-center justify-center shadow-lg">
                        {IconComponent && (
                          <IconComponent className="w-7 h-7 text-white" />
                        )}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-slate-400">{testimonial.role}</p>
                      </div>
                    </div>

                    <CardContent className="p-0">
                      {/* Quote Icon */}
                      <div className="text-highlight-500/40 mb-2">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>

                      <p className="text-slate-300 mb-4 leading-relaxed">{testimonial.content}</p>

                      {/* Rating */}
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className="w-5 h-5 text-highlight-400 fill-highlight-400"
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
