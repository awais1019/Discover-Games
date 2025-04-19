import { Box, Grid, GridItem, HStack, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import GenresList from "./GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatFormSelector from "./PlatFormSelector";
import { PlatForm } from "./hooks/useGames";
import SortSelector from "./SortSelector";
import DynamicHeading from "./DynamicHeading";

export type GameQurey={
  genre:Genre|null;
  platform:PlatForm|null;
  sortOrder:string;
  search:string;
}


function App() {
  const shouldShowAside = useBreakpointValue({ base: false, lg: true });
  const [gameQurey,setGameQurey]=useState<GameQurey>({ } as GameQurey)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",          
        lg: "200px 1fr",       
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(search)=>setGameQurey({...gameQurey,search})}/>
      </GridItem>

      {shouldShowAside && (
        <GridItem area="aside" paddingX={3}>
          <GenresList onSelected={(genre)=>setGameQurey({...gameQurey,genre}) } selectedGenre={gameQurey.genre}/>
        </GridItem>
      )}
      <GridItem area="main">
        <Box paddingLeft={2}>
          <DynamicHeading gameQuery={gameQurey}/>
          <HStack spaceX={1}>
          <PlatFormSelector onSelected={(platform)=>setGameQurey({...gameQurey,platform})} selectedPlatform={gameQurey.platform}/>
          <SortSelector onSelectedOrder={(sortOrder)=>setGameQurey({...gameQurey,sortOrder})} selectedOrder={gameQurey.sortOrder}/>
          </HStack>
          <GameGrid gameQurey={gameQurey}/>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
