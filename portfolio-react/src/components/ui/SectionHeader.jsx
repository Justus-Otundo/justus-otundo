import { motion } from 'framer-motion';

export function SectionHeader({
  title,
  highlight,
  subtitle,
  badge,
  align = 'center',
  className = ''
}) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      className={`mb-12 ${alignStyles[align]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent-400 bg-accent-500/10 border border-accent-500/20 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        {title}{' '}
        {highlight && (
          <span className="text-gradient">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-gradient-to-r from-accent-500 to-success-500 rounded-full ${
        align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
      }`} />
    </motion.div>
  );
}

export default SectionHeader;
