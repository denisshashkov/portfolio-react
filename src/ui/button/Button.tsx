import React, { ReactNode, forwardRef } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface IProps {
  children: ReactNode;
  className: string;
}

type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, IProps>(
  ({ children, className }, ref) => {
    const classes = classNames('btn', className);
    return (
      <button ref={ref} className={classes}>
        {children}
      </button>
    );
  }
);

export const MButton = motion(Button);
