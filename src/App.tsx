import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import GenresList from "./GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const shouldShowAside = useBreakpointValue({ base: false, lg: true });
  const [selectedGenre,setSeletedGenre]=useState<Genre | null>(null)

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
        <GameGrid genre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
