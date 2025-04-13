import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import GenresList from "./GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatFormSelector from "./PlatFormSelector";
import { PlatForm } from "./hooks/useGames";

function App() {
  const shouldShowAside = useBreakpointValue({ base: false, lg: true });
  const [selectedGenre,setSeletedGenre]=useState<Genre | null>(null)
  const [selectedPlatform,setSelectedPlatform]=useState<PlatForm | null>(null)

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
        <NavBar/>
      </GridItem>

      {shouldShowAside && (
        <GridItem area="aside" paddingX={3}>
          <GenresList onSelected={(g)=>setSeletedGenre(g) } selectedGenre={selectedGenre}/>
        </GridItem>
      )}
      <GridItem area="main">
        <PlatFormSelector onSelected={(p)=>setSelectedPlatform(p)} selectedPlatform={selectedPlatform}/>
        <GameGrid genre={selectedGenre} platform={selectedPlatform}/>
      </GridItem>
    </Grid>
  );
}

export default App;
