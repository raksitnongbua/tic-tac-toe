import { Box } from '@material-ui/core';
import React from 'react';
import { createIndexArray } from '../services/utils';
import Square from './Square';

interface IProps {
  size: number;
  boardData: string[];
  onSelect: (index: number) => void;
}
const Board: React.FC<IProps> = ({ size, boardData, onSelect }) => {
  const baseSize = 3;
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="grid"
        gridGap={1}
        gridTemplateColumns={`repeat(${size}, 1fr)`}
      >
        {createIndexArray(size * size).map((_, i) => (
          <Square
            key={`square-${i}`}
            value={boardData[i]}
            onClick={() => onSelect(i)}
            scale={baseSize / size}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Board;
