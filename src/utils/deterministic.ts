/** A stable 0..1 value for a seed/index pair (never uses Math.random()). */
export const seededUnit = (seed: number, index: number): number => {
  const value = Math.sin(seed * 127.1 + index * 311.7 + 19.19) * 43758.5453123;
  return value - Math.floor(value);
};
