import { createIndexArray } from './utils';

const getHorizontalComboWins = (size: number): number[][] => {
  const indexArr = createIndexArray(size * size);
  return createIndexArray(Math.ceil(indexArr.length / size)).map(() =>
    indexArr.splice(0, size)
  );
};
const getVerticalComboWins = (size: number): number[][] => {
  return createIndexArray(size).map((n) =>
    createIndexArray(size).map((v) => n + v * size)
  );
};

const getDiagonalComboWins = (size: number): number[][] => {
  const indexArr = createIndexArray(size);
  let n1 = 0;
  let n2 = 0;
  const result = [
    indexArr.map((v) => 0 + v * size + n1++),
    indexArr.map((v) => size - 1 + v * size + n2--),
  ];
  return result;
};
const getComboWins = (size: number): number[][] => {
  return [
    ...getHorizontalComboWins(size),
    ...getVerticalComboWins(size),
    ...getDiagonalComboWins(size),
  ];
};
const clearBoardData = (size: number) => {
  return createIndexArray(size * size).map((_) => '');
};

export { getComboWins, clearBoardData };
