export const getScore = (frames: number[][]): number => {
  let score = 0;
  for (let nFrame = 0; nFrame < frames.length; nFrame++) {
    score = score + frames[nFrame][0] + frames[nFrame][1];
  }
  return score;
};
