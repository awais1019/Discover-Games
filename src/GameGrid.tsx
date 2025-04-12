import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGame } from "./hooks/useGames";
import GameCard from "./GameCard";

export default function GameGrid() {
  const { games, error } = useGame();
  return (
    <>
      {error && <Text>error</Text>}
      <SimpleGrid columns={{base:1, sm: 2, md: 3, lg: 4, xl: 5 }} gap={4} padding={4}>
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}
