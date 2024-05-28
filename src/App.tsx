import React from 'react';
import ParticleBackground from './components/background/ParticleBackground';
import SideDrawer from './components/elements/drawer/Drawer';
import { Card, Grid, GridItem, Text } from '@chakra-ui/react';
import ProjectCard from './components/elements/card/ProjectCard';
import projects from './interface/Projects';

function App() {
  var link: String = "https://github.com/patriknotvincent"

  return (
    <div className="App">
      <ParticleBackground />
      <SideDrawer />
      <Grid
        templateAreas={{
          base: `"header"
               "main"`,
          lg: `"header header header"
             "navLeft main navRight"`,
        }}
        gridTemplateRows={{
          base: '10%',
          lg: '7%',
        }}
        gridTemplateColumns={{
          base: '1fr',
          lg: '16% 1fr 16%',
        }}
        w={'100%'}
        h={'100vh'}
      >
        <GridItem area={'header'}>
          <Text>Fooo</Text>
        </GridItem>

        <GridItem
          display={{ base: 'none', lg: 'block' }}
          area={'navLeft'}
          borderRight={'1px ridge'}
          borderBottom={'1px ridge'}>


        </GridItem>
        <GridItem
          area={'main'}
          borderRight={'1px ridge'}
        >
          <ProjectCard {...projects.webProfile} />
          <ProjectCard {...projects.projectROM} />
          <ProjectCard {...projects.webProfile} />
          <ProjectCard {...projects.projectROM} />
          <ProjectCard {...projects.webProfile} />
          <ProjectCard {...projects.projectROM} />

        </GridItem>
        <GridItem
          display={{ base: 'none', lg: 'block' }}
          area={'navRight'}
          borderRight={'1px ridge'}
          borderBottom={'1px ridge'}
        />
      </Grid>
    </div>
  );
}

export default App;
