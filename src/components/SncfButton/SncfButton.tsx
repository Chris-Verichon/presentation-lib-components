import React, { useState } from 'react';
import './sncfButton.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Component to create a button
 * 
 * ### Usage
 * 
 * ```tsx
 * <SncfButton label='my_text' />
 * ```
 */
export const SncfButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'sncf-button--primary' : 'sncf-button--secondary';
  let [onHoverButton, setOnHoverButton] = useState<boolean>(false);
  const hoverMode = onHoverButton ? 'sncf-button--hover' : 'sncf-button'
  return (
    <button
      onMouseEnter={() => setOnHoverButton(true)}
      onMouseLeave={() => setOnHoverButton(false)}
      type="button"
      className={[hoverMode, `sncf-button--${size}`, mode].join(' ')}
      style={onHoverButton ? {backgroundColor:'#004900'} : {backgroundColor}}
      {...props}
    >
      {label}
    </button>
  );
};