import { Button, Heading, HStack, Image, Link, List, Spinner } from "@chakra-ui/react";
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
    <>
      <Heading marginBottom={1} fontSize={"xl"}>Genres</Heading>
    <List.Root listStyle={"none"}>
      {genres.map((g) => (
        <List.Item key={g.id} paddingY={"4px"}>
          <HStack >
            <Image
              borderRadius={"8px"}
              boxSize="32px"
              objectFit={'cover'}
              src={getCroppedImgUrl(g.image_background)
                
              
              }
            />
            <Button whiteSpace={'normal'} textAlign={'left'} as={Link} fontWeight={ g.id===selectedGenre?.id?"dark":'normal'}  variant={'plain'} onClick={()=>onSelected(g)} fontSize={"md"}>{g.name}</Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
    </>
  
  );
}
