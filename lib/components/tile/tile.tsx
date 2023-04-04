import classNames from "classnames";
import { TILE_COUNT } from "@utils/config";

interface TileProps {
  index: number;
  tile: number;
  OnClick: (idx: number) => void;
}

export const Tile = ({ index, tile, OnClick }: TileProps) => {
  return (
    <div
      className={classNames(
        "bg-blue-200 rounded-lg border border-black flex justify-center items-center",
        {
          "opacity-0 pointer-events-none ": tile === TILE_COUNT - 1,
          "opacity-100 cursor-pointer": tile !== TILE_COUNT - 1,
        }
      )}
      onClick={() => OnClick(index)}
    >
      <span className='text-2xl md:text-[40px] font-bold'>{tile + 1}</span>
    </div>
  );
};
