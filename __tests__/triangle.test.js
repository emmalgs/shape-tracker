import Triangle from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly create a triangle obejct with three lenghts', () => {
    const triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
});