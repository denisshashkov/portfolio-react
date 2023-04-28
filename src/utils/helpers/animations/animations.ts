export const fromTopAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

export const fromLeftAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

export const fromRightAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

export const fromBottomAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

export const titleAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: custom * 0.3,
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: 'spring',
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      },
    },
  }),
};
