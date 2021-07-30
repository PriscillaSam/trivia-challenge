import './Button.scss';

import React, { ReactNode } from 'react';
import classnames from 'classnames';

import { ButtonVariant } from 'types';

type ButtonProps = {
  variant: ButtonVariant;
  children: ReactNode;
};

function Button({ variant, children }: ButtonProps) {
  const classNames = classnames({
    Button: true,
    'Button--primary': variant === 'primary',
    'Button--secondary': variant === 'secondary',
  });

  return <button className={classNames}>{children}</button>;
}

export default Button;
