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
  fullWidth?: boolean;
  children: ReactNode;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({
  variants = ['normal'],
  size = 'normal',
  responsive = false,
  fullWidth = false,
  children,
  ...props
}: ButtonPropsType) => {
  const { className: propsClassName, ...otherProps } = props;
  const formattedVariants = variants
    .map((_variant: keyof typeof ButtonVariantClass) => ButtonVariantClass[_variant])
    .join(' ');
  const classes = [
    'button',
    ButtonSizeClass[size],
    responsive === true ? 'is-responsive' : '',
    fullWidth === true ? 'is-fullwidth' : '',
    formattedVariants,
    propsClassName,
  ]
    .join(' ')
    .trim();

  return (
    <button
      type='button'
      className={classes}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
