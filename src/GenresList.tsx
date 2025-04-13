import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import { useGenre } from "./hooks/useGenres";
import { getCroppedImgUrl } from "./services/img_url";

export default function GenresList() {
  const { data: genres, isLoading, error } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List.Root listStyle={"none"}>
      {genres.map((g) => (
        <List.Item key={g.id} paddingY={"6px"}>
          <HStack>
            <Image
              borderRadius={"8px"}
              boxSize="32px"
              src={getCroppedImgUrl(g.image_background)}
            />
            <Text fontSize={"md"}>{g.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}
