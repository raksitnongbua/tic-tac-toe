import { Box } from '@material-ui/core';
import React from 'react';
import Square from './Square';

const Board = () => {
  const gridSize = 3;
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="grid"
        gridGap={1}
        gridTemplateColumns={`repeat(${gridSize}, 1fr)`}
      >
        {Array.apply(null, new Array(gridSize * gridSize)).map((_, i) => (
          <Square key={`square-${i}`} />
        ))}
      </Box>
    </Box>
  );
};

export default Board;
