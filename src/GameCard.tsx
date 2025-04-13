import { Game } from "./hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatFormsIconsList from "./PlatFormsIconsList";
import CriticsScore from "./CriticsScore";
import { getCroppedImgUrl } from "./services/img_url";

type Props = {
  game: Game;
};

export default function GameCard({ game }: Props) {
  return (
    <Card.Root size="sm" borderRadius={10} overflow="hidden">
      <Image src={getCroppedImgUrl(game.background_image)} alt={game.name} />
      <Card.Header>
        <Heading fontSize="xl">{game.name}</Heading>
      </Card.Header>
      <Card.Body>
        <HStack justifyContent={"space-between"}>
          <PlatFormsIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticsScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}
