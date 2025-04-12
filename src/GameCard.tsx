import { Game } from "./hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";

type Props = {
  game: Game;
};

export default function GameCard({ game }: Props) {
  return (
    <Card.Root size="sm" borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Header>
        <Heading fontSize="xl">{game.name}</Heading>
      </Card.Header>

      <Card.Body></Card.Body>
    </Card.Root>
  );
}
