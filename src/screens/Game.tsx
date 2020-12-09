import {
  Box,
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
const Game = () => {
  const { textField } = useStyles();
  const [size, setSize] = useState(4);
  const [comboWins, setComboWins] = useState<number[][]>([]);
  const [boardData, setBoardData] = useState<string[]>([]);
  useEffect(() => {
    setComboWins(getComboWins(size));
    setBoardData(clearBoardData(size));
  }, [size]);
  const handleSizeChange = (event: any) => {
    setSize(parseInt(event.target.value));
  };
  return (
    <Container maxWidth="md">
      <Box p={2}>
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
            inputProps={{ min: 2, max: 15 }}
            variant="outlined"
            value={size}
            onChange={handleSizeChange}
          />
          X
          <TextField
            id="filled-number"
            type="number"
            className={textField}
            inputProps={{ min: 2, max: 15 }}
            variant="outlined"
            value={size}
            onChange={handleSizeChange}
          />
        </Box>
        <Board size={size} boardData={boardData} />
      </Box>
    </Container>
  );
};

export default Game;
