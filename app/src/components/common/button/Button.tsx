'use client';

import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

const ButtonSizeClass = {
  small: 'is-small',
  normal: 'is-normal',
  medium: 'is-medium',
  large: 'is-large',
};

const ButtonVariantClass = {
  normal: '',
  outlined: 'is-outlined',
  inverted: 'is-inverted',
  rounded: 'is-rounded',
};

type ButtonPropsType = {
  variants?: (keyof typeof ButtonVariantClass)[];
  size?: keyof typeof ButtonSizeClass;
  responsive?: boolean;
  children: ReactNode;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({
  variants = ['normal'],
  size = 'normal',
  responsive = false,
  children,
  ...props
}: ButtonPropsType) => {
  const { className: propsClassName, ...otherProps } = props;
  const responsiveClass = responsive === true ? 'is-responsive' : '';
  const formattedVariants = variants
    .map((_variant: keyof typeof ButtonVariantClass) => ButtonVariantClass[_variant])
    .join(' ');
  const className = `button ${ButtonSizeClass[size]} ${responsiveClass} ${formattedVariants} ${propsClassName}`;

  return (
    <button
      type='button'
      className={className}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
