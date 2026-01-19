export function Badge({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  className = ''
}) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full backdrop-blur-sm';

  const variants = {
    default: 'bg-dark-700/80 text-slate-200 border border-dark-600',
    accent: 'bg-accent-500/20 text-accent-400 border border-accent-500/40',
    success: 'bg-success-500/20 text-success-400 border border-success-500/40',
    warning: 'bg-highlight-500/20 text-highlight-400 border border-highlight-500/40',
    live: 'bg-success-500/25 text-success-400 border border-success-500/50',
    research: 'bg-highlight-500/25 text-highlight-400 border border-highlight-500/50',
    gradient: 'bg-gradient-to-r from-accent-500/25 to-highlight-500/25 text-white border border-accent-500/30',
    gold: 'bg-highlight-500/25 text-highlight-400 border border-highlight-500/50',
  };

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3.5 py-1.5 text-sm',
    lg: 'px-5 py-2 text-base',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {dot && (
        <span className={`w-2 h-2 rounded-full mr-2 ${
          variant === 'success' || variant === 'live'
            ? 'bg-success-400 animate-pulse'
            : variant === 'warning' || variant === 'gold' || variant === 'research'
            ? 'bg-highlight-400 animate-pulse'
            : variant === 'accent'
            ? 'bg-accent-400 animate-pulse'
            : 'bg-current'
        }`} />
      )}
      {children}
    </span>
  );
}

export default Badge;
