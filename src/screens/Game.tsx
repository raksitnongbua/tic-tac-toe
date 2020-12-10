import { Box, Button, Container, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import Board from '../components/Board';
import SizeEditor from '../components/SizeEditor';
import { checkWonCombos, clearBoardData, getComboWins } from '../services/game';
enum GameStates {
  PLAYING,
  X_WINNER,
  O_WINNER,
  DRAW,
}
const minSize = 3;
const maxSize = 25;
const Game = () => {
  const [currentSize, setCurrentSize] = useState(4);
  const comboWinsRef = useRef<number[][]>([]);
  const [turn, setTurn] = useState<string>('X');
  const [boardData, setBoardData] = useState<string[]>([]);
  const [gameState, setGameState] = useState<GameStates>(GameStates.PLAYING);
  useEffect(() => {
    comboWinsRef.current = getComboWins(currentSize);
    setBoardData(clearBoardData(currentSize));
  }, [currentSize]);
  const handleSubmit = (value: number) => {
    setCurrentSize(value);
    setBoardData(clearBoardData(currentSize));
  };
  const checkWinner = (index: number) => {
    const newBoardData = boardData.map((value, i) =>
      i === index ? turn : value
    );
    setBoardData(newBoardData);
    const wonCombos = checkWonCombos(
      comboWinsRef.current,
      index,
      turn,
      newBoardData
    );
    const gameOver = wonCombos.length > 0;
    if (gameOver) {
      setGameState(turn === 'X' ? GameStates.X_WINNER : GameStates.O_WINNER);
    } else {
      const isDraw = newBoardData.every((v) => v !== '');
      if (isDraw) {
        setGameState(GameStates.DRAW);
      } else {
        setTurn(turn === 'X' ? 'O' : 'X');
      }
    }
  };
  const handleSelect = (index: number) => {
    if (gameState !== GameStates.PLAYING) return;
    checkWinner(index);
  };
  const handleRestartGame = () => {
    setBoardData(clearBoardData(currentSize));
    setGameState(GameStates.PLAYING);
  };
  const getTextEndGame = (gameState: GameStates): string => {
    switch (gameState) {
      case GameStates.DRAW:
        return 'DRAW!';
      case GameStates.X_WINNER:
        return `"X" is Winner!`;
      case GameStates.O_WINNER:
        return `"O" is Winner!`;
      default:
        return '';
    }
  };
  return (
    <Container maxWidth="md">
      <Box p={2}>
        {gameState !== GameStates.PLAYING ? (
          <Box
            p={2}
            mb={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            height={100}
          >
            <Typography variant="h4">{getTextEndGame(gameState)}</Typography>
            <Box my={1} />
            <Button
              variant="contained"
              color="secondary"
              onClick={handleRestartGame}
            >
              Restart
            </Button>
          </Box>
        ) : (
          <>
            <SizeEditor
              size={currentSize}
              onSubmit={handleSubmit}
              minSize={minSize}
              maxSize={maxSize}
            />
          </>
        )}
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
