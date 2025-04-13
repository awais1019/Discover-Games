import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGame } from "./hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";

export default function GameGrid() {
  const { games, error, isLoading } = useGame();
  const Skeleton = [1, 2, 3, 4, 5, 6,7,8];
  return (
    <>
      {error && <Text>error</Text>}

      <SimpleGrid
        columns={{ base:1,sm: 2, md: 3, lg: 4, xl: 5 }}
        gap={'10px'}
        padding={"10px"}
      >
        {isLoading && Skeleton.map((s) =>
           <CardContainer>
             <CardSkeleton key={s} />
           </CardContainer>)}
        {games.map((game) => (
          <CardContainer>
            <GameCard game={game} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}
