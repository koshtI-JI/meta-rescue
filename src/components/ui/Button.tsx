import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold rounded-2xl h-[56px] px-8 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-hover shadow-btn hover:-translate-y-1",
      secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 hover:-translate-y-1",
      outline: "border border-slate-200 bg-transparent text-slate-900 hover:bg-slate-50 hover:-translate-y-1",
      ghost: "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={disabled ? undefined : { scale: 0.98 }}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
