import React, { ReactNode, forwardRef } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface IProps {
  children: ReactNode;
  className: string;
}

type Ref = HTMLDivElement;

export const SectionTitle = forwardRef<Ref, IProps>(
  ({ children, className }, ref) => {
    const classes = classNames('title', className);
    return (
      <h1 ref={ref} className={classes}>
        {children}
      </h1>
    );
  }
);

export const MSectionTitle = motion(SectionTitle);
