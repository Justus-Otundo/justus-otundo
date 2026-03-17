import { motion } from 'framer-motion';
import { Badge } from '../ui';
import { getIcon } from '../../utils/icons';
import { timeline } from '../../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Career Journey
          </h2>
          <p className="text-lg text-slate-400 max-w-xl">
            From developer to technology leadership
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-accent-500 to-highlight-500 rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line — left on mobile, center on md+ */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 via-success-500 to-highlight-500" aria-hidden="true" />

          <div className="space-y-10" role="list" aria-label="Career timeline">
            {timeline.map((item, index) => {
              const IconComponent = getIcon(item.icon);
              const isLeft = item.position === 'left';

              return (
                <motion.div
                  key={item.id}
                  role="listitem"
                  className="relative"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  {/* Mobile: left-aligned layout */}
                  <div className="flex items-start gap-5 md:hidden">
                    {/* Marker */}
                    <div className="flex-shrink-0 z-10" aria-hidden="true">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.isCurrent
                          ? 'bg-gradient-to-br from-accent-500 to-success-500'
                          : item.isFuture
                          ? 'bg-dark-700 border-2 border-highlight-500/50'
                          : 'bg-dark-800 border-2 border-accent-500/50'
                      }`}>
                        {IconComponent && (
                          <IconComponent className={`w-4 h-4 ${
                            item.isCurrent ? 'text-white' : item.isFuture ? 'text-highlight-400' : 'text-accent-400'
                          }`} />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <div className={`p-5 rounded-xl ${
                        item.isCurrent
                          ? 'bg-accent-500/10 border border-accent-500/25'
                          : item.isFuture
                          ? 'bg-dark-800/40 border border-dark-600/40 opacity-70'
                          : 'bg-dark-800 border border-dark-600/40'
                      }`}>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-sm font-medium ${item.isCurrent ? 'text-accent-400' : 'text-zinc-500'}`}>
                            {item.date}
                          </span>
                          {item.isCurrent && <Badge variant="success" size="sm">CURRENT</Badge>}
                        </div>
                        <h3 className={`text-lg font-semibold mt-1.5 ${item.isFuture ? 'text-zinc-400' : 'text-white'}`}>
                          {item.title}
                        </h3>
                        {item.company && <p className="text-accent-400 text-sm mt-1">{item.company}</p>}
                        {item.skills && (
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {item.skills.map((skill) => (
                              <span key={skill} className="px-2 py-0.5 text-xs font-medium text-zinc-400 bg-dark-700 rounded">
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Desktop: center timeline, alternating left/right */}
                  <div className={`hidden md:flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content side */}
                    <div className={`w-[calc(50%-2rem)] ${isLeft ? 'text-right pr-4' : 'text-left pl-4'}`}>
                      <div className={`p-5 rounded-xl transition-colors duration-200 ${
                        item.isCurrent
                          ? 'bg-accent-500/10 border border-accent-500/25'
                          : item.isFuture
                          ? 'bg-dark-800/40 border border-dark-600/40 opacity-70'
                          : 'bg-dark-800 border border-dark-600/40 hover:border-accent-500/20'
                      }`}>
                        <div className={`flex items-center gap-2 flex-wrap ${isLeft ? 'justify-end' : ''}`}>
                          <span className={`text-sm font-medium ${item.isCurrent ? 'text-accent-400' : 'text-zinc-500'}`}>
                            {item.date}
                          </span>
                          {item.isCurrent && <Badge variant="success" size="sm">CURRENT</Badge>}
                        </div>
                        <h3 className={`text-lg font-semibold mt-1.5 ${item.isFuture ? 'text-zinc-400' : 'text-white'}`}>
                          {item.title}
                        </h3>
                        {item.company && <p className="text-accent-400 text-sm mt-1">{item.company}</p>}
                        {item.skills && (
                          <div className={`flex flex-wrap gap-1.5 mt-3 ${isLeft ? 'justify-end' : ''}`}>
                            {item.skills.map((skill) => (
                              <span key={skill} className="px-2 py-0.5 text-xs font-medium text-zinc-400 bg-dark-700 rounded">
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Center marker — fixed 4rem width */}
                    <div className="w-16 flex justify-center flex-shrink-0 z-10" aria-hidden="true">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        item.isCurrent
                          ? 'bg-gradient-to-br from-accent-500 to-success-500 shadow-lg shadow-accent-500/20'
                          : item.isFuture
                          ? 'bg-dark-700 border-2 border-highlight-500/50'
                          : 'bg-dark-800 border-2 border-accent-500/50'
                      }`}>
                        {IconComponent && (
                          <IconComponent className={`w-5 h-5 ${
                            item.isCurrent ? 'text-white' : item.isFuture ? 'text-highlight-400' : 'text-accent-400'
                          }`} />
                        )}
                      </div>
                    </div>

                    {/* Empty side */}
                    <div className="w-[calc(50%-2rem)]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
