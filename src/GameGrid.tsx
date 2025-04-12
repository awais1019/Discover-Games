import { useEffect, useState } from "react";
import apiClient from "./services/api-client";
import { Text } from "@chakra-ui/react";

type Game = {
  id: number;
  name: string;
};

type FetchGamesResponse = {
  count: number;
  results: Game[];
};

export default function GameGrid() {
  const [games, SetGames] = useState<Game[]>([]);
  const [error, SetError] = useState();

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => SetGames(res.data.results))
      .catch((error) => SetError(error.massage));
  }, []);
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
