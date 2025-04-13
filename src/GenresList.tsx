import { Button, HStack, Image, Link, List, Spinner } from "@chakra-ui/react";
import { Genre, useGenre } from "./hooks/useGenres";
import { getCroppedImgUrl } from "./services/img_url";


type Props={
  onSelected:(genre:Genre)=>void;
  selectedGenre:Genre|null;
}

export default function GenresList({onSelected,selectedGenre}:Props) {
  const { data: genres, isLoading, error } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List.Root listStyle={"none"}>
      {genres.map((g) => (
        <List.Item key={g.id} paddingY={"6px"}>
          <HStack >
            <Image
              borderRadius={"8px"}
              boxSize="32px"
              src={getCroppedImgUrl(g.image_background)}
            />
            <Button as={Link} fontWeight={ g.id===selectedGenre?.id?"dark":'normal'}  variant={'plain'} onClick={()=>onSelected(g)} fontSize={"md"}>{g.name}</Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}
