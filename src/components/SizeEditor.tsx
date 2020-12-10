import { Box, Button, makeStyles, TextField, Theme } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles<Theme>((theme) => ({
  textField: {
    width: '60px',
    margin: theme.spacing(1),
  },
}));
interface IProps {
  onSubmit: (value: number) => void;
  size: number;
  minSize: number;
  maxSize: number;
}
const SizeEditor: React.FC<IProps> = ({ onSubmit, size, minSize, maxSize }) => {
  const { textField } = useStyles();
  const [value, setValue] = useState(size);
  const handleChange = (event: any) => {
    setValue(parseInt(event.target.value) || 0);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const clampedValue = Math.min(Math.max(value, minSize), maxSize);
    onSubmit(clampedValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        p={2}
        mb={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={100}
      >
        <TextField
          id="filled-number"
          type="number"
          className={textField}
          inputProps={{ min: minSize, max: maxSize }}
          variant="outlined"
          value={value}
          onChange={handleChange}
        />
        X
        <TextField
          id="filled-number"
          type="number"
          className={textField}
          inputProps={{ min: minSize, max: maxSize }}
          variant="outlined"
          value={value}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Set
        </Button>
      </Box>
    </form>
  );
};

export default SizeEditor;
