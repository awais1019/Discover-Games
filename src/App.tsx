import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";

function App() {
  const shouldShowAside = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>

      {shouldShowAside && (
        <GridItem area="aside">
          Aside
        </GridItem>
      )}

      <GridItem area="main">
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
