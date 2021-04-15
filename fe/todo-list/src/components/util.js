import { BLOCK, NONE } from './const';

export const toggleDisplay = (display, cb) => {
  if (display === NONE) return cb(BLOCK);
  return cb(NONE);
};

export const closeActiveTask = (cb) => {
  cb(NONE);
};
