import { GRID_COLS } from "./config";

export const shuffleTiles = (tiles: number[]) => {
  const shuffledTiles = [...tiles.sort(() => Math.random() - 0.5)];
  return shuffledTiles;
};

export const canMoveTile = (tileIndex: number, emptyIndex: number) => {
  const row = Math.floor(tileIndex / GRID_COLS);
  const col = tileIndex % GRID_COLS;
  const emptyRow = Math.floor(emptyIndex / GRID_COLS);
  const emptyCol = emptyIndex % GRID_COLS;

  if (emptyRow === row || emptyCol === col) {
    return true;
  }

  return false;
};

export const moveTile = (
  tiles: number[],
  startIndex: number,
  emptyIndex: number
) => {
  const tilesCopy: number[] = [...tiles];
  const clickedRow = Math.floor(startIndex / GRID_COLS);
  const emptyRow = Math.floor(emptyIndex / GRID_COLS);
  const clickedCol = startIndex % GRID_COLS;
  const emptyCol = emptyIndex % GRID_COLS;
  const distance = Math.abs(startIndex - emptyIndex);

  if (clickedRow === emptyRow) {
    let emptyTile = tilesCopy.splice(emptyIndex, 1);
    tilesCopy.splice(startIndex, 0, emptyTile[0]);
  }

  if (clickedCol === emptyCol) {
    if (distance === GRID_COLS) {
      [tilesCopy[startIndex], tilesCopy[emptyIndex]] = [
        tilesCopy[emptyIndex],
        tilesCopy[startIndex],
      ];
    } else {
      //move multiple tiles
    }
  }

  return tilesCopy;
};

export function isPuzzleSolved(tiles: number[]) {
  for (let i = 0, l = tiles.length; i < l; i++) {
    if (tiles[i] !== i) {
      return false;
    }
  }
  return true;
}
