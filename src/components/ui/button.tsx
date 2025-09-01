import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    loading = false,
    fullWidth = false,
    asChild = false,
    disabled,
    children, 
    ...props 
  }, ref) => {
    const baseClasses = 'btn-base inline-flex items-center justify-center gap-2 disabled:opacity-50';
    
    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-600',
      secondary: 'bg-industrial-100 text-industrial-900 hover:bg-industrial-200 focus-visible:outline-industrial-600',
      outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50 focus-visible:outline-primary-600',
      ghost: 'text-primary-600 hover:bg-primary-50 focus-visible:outline-primary-600',
    };

    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    const widthClass = fullWidth ? 'w-full' : '';
    
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          widthClass,
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
        )}
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button };