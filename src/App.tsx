import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import GenresList from "./GenresList";

function App() {
  const shouldShowAside = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",           // only one column on mobile
        lg: "200px 1fr",       // aside gets 250px, main gets remaining space
      }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>

      {shouldShowAside && (
        <GridItem area="aside" paddingX={5}>
          <GenresList/>
        </GridItem>
      )}
      <GridItem area="main">
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
