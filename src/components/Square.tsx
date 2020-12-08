import React from 'react';
import { Box } from '@material-ui/core';

const Square = () => {
  return (
    <Box
      width={100}
      height={100}
      border={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    ></Box>
  );
};

export default Square;
