import type { ReactNode } from 'react';
import { type ButtonHTMLAttributes } from 'react';
import styles from './button.module.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Sets the component children
   */
  children?: ReactNode;
  /**
   * Sets the variant style of the button
   */
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * Sets the size of the button
   */
  size?: 'small' | 'medium' | 'large';
};

export function Button({ 
  children, 
  variant = 'primary',
  size = 'medium',
  disabled,
  className = '',
  ...props 
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} 
        ${styles[variant]} 
        ${styles[size]}
        ${disabled ? styles.disabled : ''}
        ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
