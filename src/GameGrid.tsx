
import { Text } from "@chakra-ui/react";
import { useGame } from "./hooks/useGames";



export default function GameGrid() {
   
    const {games,error}=useGame()
  return (
    <>
      {error && <Text>error</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}
