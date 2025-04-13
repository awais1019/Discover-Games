import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGame } from "./hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import { Genre } from "./hooks/useGenres";


type Props={
  genre:Genre | null
}

export default function GameGrid({genre}:Props) {
  const { data:games, error, isLoading } = useGame(genre);
  const skeletons = Array.from({ length: 30 }, (_, index) => index);

  return (
    <>
      {error && <Text>error</Text>}

      <SimpleGrid
        columns={{ base:1,sm: 2, md: 3, lg: 4, xl: 5 }}
        gap={'10px'}
        padding={"10px"}
      >
        {isLoading && skeletons.map((s) =>
           <CardContainer key={s} >
             <CardSkeleton />
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
