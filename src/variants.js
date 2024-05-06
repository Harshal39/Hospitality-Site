const DURATION = 1.2;
const EASE = [0.25, 0.25, 0.25, 0.75];

export const fadeIn = (direction, delay) => {
  const directionValue = direction === 'up' ? 40 : direction === 'down' ? -40 : 0;
  const xDirectionValue = direction === 'left' ? 40 : direction === 'right' ? -40 : 0;

  return {
    hidden: {
      y: directionValue,
      x: xDirectionValue,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: DURATION,
        delay: delay,
        ease: EASE,
      },
    },
  };
};