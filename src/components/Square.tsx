import React from 'react';
import { Box, makeStyles, Theme, Typography } from '@material-ui/core';

interface IProps {
  value: string;
  onClick: () => void;
  scale: number;
}
interface IStyleProps {
  scale: number;
}
const baseFontSize = 10;
const useStyles = makeStyles<Theme, IStyleProps>(() => ({
  text: {
    cursor: 'default',
    fontSize: ({ scale }) => `calc(${scale}*${baseFontSize}rem)`,
  },
}));
const Square: React.FC<IProps> = ({ value, onClick, scale }) => {
  const { text } = useStyles({ scale });
  const handleClick = () => {
    if (value === '') onClick();
  };
  const baseBoxSize = 250;
  const boxSize = baseBoxSize * scale;
  return (
    <Box
      width={boxSize}
      height={boxSize}
      border={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={handleClick}
    >
      <Typography className={text}>{value}</Typography>
    </Box>
  );
};

export default Square;
