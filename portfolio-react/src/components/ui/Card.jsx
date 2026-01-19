import { motion } from 'framer-motion';

export function Card({
  children,
  className = '',
  variant = 'default',
  hover = true,
  gradient = false,
  ...props
}) {
  const baseStyles = 'rounded-2xl transition-all duration-300';

  const variants = {
    default: 'bg-dark-800 border border-dark-600/50',
    glass: 'glass-card',
    elevated: 'bg-dark-800 shadow-xl shadow-black/20',
    gradient: 'bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-600/30',
  };

  const hoverStyles = hover
    ? 'hover:border-accent-500/30 hover:shadow-lg hover:shadow-accent-500/5'
    : '';

  const gradientBorder = gradient ? 'gradient-border' : '';

  return (
    <motion.div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${gradientBorder} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -4 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`p-6 pb-0 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
