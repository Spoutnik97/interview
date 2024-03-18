import { getScore } from ".";

describe("getScore", function () {
  it("should return 0 for the first frame without quille", function () {
    const frames = [
      [0, 0],
      [0, 0],
      [0, 0],
    ];
    expect(getScore(frames)).toEqual(0);
  });
  it("should return the score for 1 frame", function () {
    const frames = [
      [1, 0],
      [0, 0],
      [0, 0],
    ];
    expect(getScore(frames)).toEqual(1);
  });
  it("should return the score for 2 frames", function () {
    const frames = [
      [1, 0],
      [3, 0],
      [0, 0],
    ];
    expect(getScore(frames)).toEqual(4);
  });

  it("should return the score for 3 frames", function () {
    const frames = [
      [1, 0],
      [3, 0],
      [3, 0],
    ];
    expect(getScore(frames)).toEqual(7);
  });
});

// const frame1 = frames[0]; // = [1, 0]
// const coup1Frame1 = frames[0][0];
// const coup2Frame1 = frames[0][1];
// const coup1frame2 = frames[1][0];
// const coup2Frame2 = frames[1][1];
