const createIndexArray = (size: number) => {
  return Array.apply(null, new Array(size)).map((_, i) => i);
};
export { createIndexArray };
