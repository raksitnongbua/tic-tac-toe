import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

interface IProps {
  value: string;
  onClick: () => void;
}
const useStyles = makeStyles({
  text: {
    cursor: 'default',
  },
});
const Square: React.FC<IProps> = ({ value, onClick }) => {
  const { text } = useStyles();
  const handleClick = () => {
    if (value === '') onClick();
  };
  return (
    <Box
      width={100}
      height={100}
      border={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={handleClick}
    >
      <Typography variant="h2" className={text}>
        {value}
      </Typography>
    </Box>
  );
};

export default Square;
