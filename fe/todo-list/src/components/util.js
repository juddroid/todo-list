import { BLOCK, NONE } from './const';

export const toggleDisplay = (display, cb, dispalyType) => {
  if (dispalyType === undefined) dispalyType = BLOCK;
  if (display === NONE) return cb(dispalyType);
  return cb(NONE);
};

export const closeActiveTask = (cb) => {
  cb(NONE);
};
