import React from 'react';
import { Box, Typography } from '@material-ui/core';

interface IProps {
  value: string;
}
const Square: React.FC<IProps> = ({ value }) => {
  return (
    <Box
      width={100}
      height={100}
      border={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h2">{value}</Typography>
    </Box>
  );
};

export default Square;
