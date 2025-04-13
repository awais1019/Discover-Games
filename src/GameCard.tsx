import { Game } from "./hooks/useGames";
import { Card, Heading, Image, Text } from "@chakra-ui/react";
import PlatFormsIconsList from "./PlatFormsIconsList";

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
      <Card.Body>
       <PlatFormsIconsList platforms={
        game.parent_platforms.map(p=>p.platform)
       }/>
      </Card.Body>
    </Card.Root>
  );
}
