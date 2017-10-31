export const CLICK_TIMER = 'CLICK_TIMER';
export const RESTART_TIMER = 'RESTART_TIMER';

export const togglePause = () => {
  return {
    type: CLICK_TIMER
  };
};

export const restartTimer = () => {
  return {
    type: RESTART_TIMER
  };
};
