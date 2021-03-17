/**
 * Adds x and y.
 * @param {number} x
 * @param {number} y
 * @returns {number} Sum of x and y
 */
export default function add(x: number, y: number): number {
  if (x <= 0 || y <= 0) {
    throw Error("Numbers must be greater than 0!");
  }

  return x + y;
}

console.log(add(5, 5));
