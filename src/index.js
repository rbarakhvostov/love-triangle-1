/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;
  for (let i = 0, l = preferences.length; i < l; i++) {
    if (preferences[preferences[ [preferences[i] - 1] ] - 1] === i + 1 && preferences[i] !== i + 1 ) counter++;
  };
  return counter / 3;
};
