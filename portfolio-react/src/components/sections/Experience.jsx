import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  BriefcaseIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import { SectionHeader, Badge } from '../ui';
import { timeline } from '../../data/experience';

const iconMap = {
  CodeBracketIcon: CodeBracketIcon,
  DevicePhoneMobileIcon: DevicePhoneMobileIcon,
  BriefcaseIcon: BriefcaseIcon,
  SparklesIcon: SparklesIcon,
  RocketLaunchIcon: RocketLaunchIcon,
};

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Career"
          highlight="Journey"
          subtitle="From developer to technology leadership"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent-500 via-success-500 to-highlight-500" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              const isLeft = item.position === 'left';

              return (
                <motion.div
                  key={item.id}
                  className={`relative flex items-center ${
                    isLeft ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div
                      className={`p-6 rounded-2xl transition-all duration-300 ${
                        item.isCurrent
                          ? 'bg-gradient-to-br from-accent-500/20 to-success-500/10 border border-accent-500/30'
                          : item.isFuture
                          ? 'bg-dark-800/50 border border-dark-600/50 opacity-70'
                          : 'bg-dark-800 border border-dark-600/50 hover:border-accent-500/30'
                      }`}
                    >
                      <span className={`text-sm font-medium ${
                        item.isCurrent ? 'text-accent-400' : item.isFuture ? 'text-zinc-500' : 'text-zinc-500'
                      }`}>
                        {item.date}
                      </span>

                      {item.isCurrent && (
                        <Badge variant="success" size="sm" className="ml-2">
                          CURRENT
                        </Badge>
                      )}

                      <h3 className={`text-xl font-semibold mt-2 ${
                        item.isFuture ? 'text-zinc-400' : 'text-white'
                      }`}>
                        {item.title}
                      </h3>

                      {item.company && (
                        <p className="text-accent-400 text-sm mt-1">{item.company}</p>
                      )}

                      {item.skills && (
                        <div className={`flex flex-wrap gap-2 mt-3 ${
                          isLeft ? 'justify-end' : 'justify-start'
                        }`}>
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 text-xs font-medium text-zinc-400 bg-dark-700 rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center Marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        item.isCurrent
                          ? 'bg-gradient-to-br from-accent-500 to-success-500 shadow-lg shadow-accent-500/30'
                          : item.isFuture
                          ? 'bg-dark-700 border-2 border-highlight-500/50'
                          : 'bg-dark-800 border-2 border-accent-500/50'
                      }`}
                    >
                      {IconComponent && (
                        <IconComponent className={`w-5 h-5 ${
                          item.isCurrent ? 'text-white' : item.isFuture ? 'text-highlight-400' : 'text-accent-400'
                        }`} />
                      )}
                    </div>
                  </div>

                  {/* Empty Space for Other Side */}
                  <div className="w-5/12" />
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
