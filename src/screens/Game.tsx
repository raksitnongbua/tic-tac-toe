import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Board from '../components/Board';
import { clearBoardData, getComboWins } from '../services/game';
const useStyles = makeStyles<Theme>((theme) => ({
  textField: {
    width: '60px',
    margin: theme.spacing(1),
  },
}));
const minSize = 2;
const maxSize = 15;
const Game = () => {
  const { textField } = useStyles();
  const [size, setSize] = useState(4);
  const [currentSize, setCurrentSize] = useState(4);
  const [comboWins, setComboWins] = useState<number[][]>([]);
  const [turn, setTurn] = useState<string>('X');
  const [boardData, setBoardData] = useState<string[]>([]);
  useEffect(() => {
    setComboWins(getComboWins(currentSize));
    setBoardData(clearBoardData(currentSize));
  }, [currentSize]);
  const handleSizeChange = (event: any) => {
    setSize(parseInt(event.target.value) || 0);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const value = Math.min(Math.max(size, minSize), maxSize);
    setCurrentSize(value);
    setSize(value);
    setBoardData(clearBoardData(currentSize));
  };
  const handleSelect = (index: number) => {
    const newBoardData = boardData.map((value, i) =>
      i === index ? turn : value
    );
    setBoardData(newBoardData);
    setTurn(turn === 'X' ? 'O' : 'X');
  };
  return (
    <Container maxWidth="md">
      <Box p={2}>
        <form onSubmit={handleSubmit}>
          <Box
            p={2}
            mb={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <TextField
              id="filled-number"
              type="number"
              className={textField}
              inputProps={{ min: minSize, max: maxSize }}
              variant="outlined"
              value={size}
              onChange={handleSizeChange}
            />
            X
            <TextField
              id="filled-number"
              type="number"
              className={textField}
              inputProps={{ min: minSize, max: maxSize }}
              variant="outlined"
              value={size}
              onChange={handleSizeChange}
            />
            <Button variant="contained" color="primary" type="submit">
              Set
            </Button>
          </Box>
        </form>
        <Board
          size={currentSize}
          boardData={boardData}
          onSelect={handleSelect}
        />
      </Box>
    </Container>
  );
};

export default Game;
