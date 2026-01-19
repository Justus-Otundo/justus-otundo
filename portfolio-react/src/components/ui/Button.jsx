import { motion } from 'framer-motion';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900';

  const variants = {
    primary: 'bg-gradient-to-r from-accent-500 to-accent-600 text-white hover:from-accent-400 hover:to-accent-500 focus:ring-accent-500 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40',
    secondary: 'bg-dark-700 text-zinc-100 border border-dark-600 hover:bg-dark-600 hover:border-accent-500/50 focus:ring-dark-600',
    outline: 'border-2 border-accent-500 text-accent-400 hover:bg-accent-500/10 focus:ring-accent-500',
    ghost: 'text-zinc-300 hover:text-white hover:bg-dark-700 focus:ring-dark-600',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="w-5 h-5">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="w-5 h-5">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}

export default Button;
