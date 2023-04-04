import { Puzzle } from "@components/puzzle/puzzle";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main
      style={{ fontFamily: openSans.style.fontFamily }}
      className='flex flex-col items-center'
    >
      <h1 className='my-10 text-2xl font-bold'>15 puzzle game</h1>
      <Puzzle />
    </main>
  );
}
