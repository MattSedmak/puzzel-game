import { Tile } from "@components/tile/tile";
import { GRID_COLS, GRID_ROWS, TILE_COUNT } from "@utils/config";
import {
  canMoveTile,
  isPuzzleSolved,
  moveTile,
  shuffleTiles,
} from "@utils/helpers";
import React, { useCallback, useEffect, useState } from "react";

export const Puzzle = () => {
  const [tiles, setTiles] = useState<number[]>([...Array(TILE_COUNT).keys()]);

  const shufflePuzzleTiles = useCallback(() => {
    setTiles((tiles) => shuffleTiles(tiles));
  }, []);

  useEffect(() => {
    shufflePuzzleTiles();
  }, [shufflePuzzleTiles]);

  const handleTileClick = (tileIndex: number) => {
    if (canMoveTile(tileIndex, tiles.indexOf(TILE_COUNT - 1))) {
      const swappedTiles = moveTile(
        tiles,
        tileIndex,
        tiles.indexOf(TILE_COUNT - 1)
      );
      setTiles(swappedTiles);
    }
  };

  const handleShuffleClick = () => {
    shufflePuzzleTiles();
  };

  const isGameWon = isPuzzleSolved(tiles);

  const _tiles = tiles.map((tile, i) => (
    <Tile key={tile} tile={tile} index={i} OnClick={handleTileClick} />
  ));

  return (
    <>
      {isGameWon && (
        <div className='text-2xl mb-8 border border-green-500 p-4'>
          Grattis. Du vann!
        </div>
      )}
      <div
        className={`w-[300px] h-[300px] bg-slate-200 md:w-[400px] md:h-[400px] grid grid-cols-${GRID_COLS} gap-1 grid-rows-${GRID_ROWS} mx-auto`}
      >
        {_tiles}
      </div>

      <button
        className='mt-10 bg-black text-2xl text-white py-4 px-10 rounded-xl'
        onClick={handleShuffleClick}
      >
        Slumpa
      </button>
    </>
  );
};
