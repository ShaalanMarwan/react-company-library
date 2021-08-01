import React from 'react';
import { StyledButton } from './styles';
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?:
    | 'text'
    | 'outlined'
    | 'contained'
    | 'stroked'
    | 'filled'
    | 'secondary'
    | 'primary'
    | 'danger';
  color?: 'default' | 'primary' | 'secondary' | 'danger' | 'light' | 'dark';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isRounded?: boolean;
  isCircular?: boolean;
  isExpanded?: boolean;
  isFilled?: boolean;
  isLink?: boolean;
  href?: string;
  target?: string;
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, isFullWidth, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        isFullWidth={isFullWidth}
        type="button"
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);
Button.defaultProps = {
  variant: 'secondary',
  size: 'small',
  isFullWidth: false,
};
Button.displayName = 'Button';
