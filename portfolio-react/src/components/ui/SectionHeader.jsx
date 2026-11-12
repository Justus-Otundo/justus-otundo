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
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">
          {badge}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-stone-200 sm:text-4xl md:text-5xl">
        {title}{' '}
        {highlight && (
          <span className="text-gradient" style={{ fontFamily: '"Newsreader", Georgia, serif' }}>
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-base leading-7 text-stone-400 sm:text-lg ${
          align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
        }`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 h-px w-14 bg-accent-500 ${
        align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
      }`} />
    </motion.div>
  );
}

export default SectionHeader;
