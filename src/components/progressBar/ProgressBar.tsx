import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface IProps {
  className?: string;
  title: string;
  bgcolor: string;
  completed: number;
}

type Ref = HTMLDivElement;

export const ProgressBar = forwardRef<Ref, IProps>(
  ({ title, bgcolor, completed, className }, ref) => {
    const classes = classNames('progressBar', className);

    const filler = {
      width: `${completed}%`,
      backgroundColor: bgcolor,
    };

    return (
      <div ref={ref} className={classes}>
        <div className='progressBar__label'>
          <span className='progressBar__title'>{title}</span>
          <span className='progressBar__percent'>{`${completed}%`}</span>
        </div>
        <div className='progressBar__track'>
          <div className='progressBar__filler' style={filler}></div>
        </div>
      </div>
    );
  }
);

export const MProgressBar = motion(ProgressBar);
