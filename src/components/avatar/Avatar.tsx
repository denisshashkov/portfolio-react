import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface IProps {
  className: string;
}

type Ref = HTMLDivElement;

export const Avatar = forwardRef<Ref, IProps>((props, ref) => {
  const classes = classNames('avatar', props.className);
  return <div ref={ref} className={classes}></div>;
});

export const MAvatar = motion(Avatar);
