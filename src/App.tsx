import React, { useState } from 'react';
import ParticleBackground from './components/background/ParticleBackground';
import SideDrawer from './components/elements/drawer/SideDrawer';
import { Box, Grid, GridItem, IconButton, Text } from '@chakra-ui/react';
import ProjectCard from './components/elements/card/ProjectCard';
import projects from './interface/Projects';
import { ReactComponent as ChevronIcon } from "./assets/icons/ChevronRight.svg"

function App() {
  const [drawer, setIsOpen] = useState(false)
  return (
    <div className="App">
      <ParticleBackground />
      <SideDrawer isOpen={drawer} onClose={() => setIsOpen(false)} />
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
          <Text color={'black.500'}>Fooo</Text>
        </GridItem>

        <GridItem
          display={{ base: 'none', lg: 'flex' }}
          justifyContent={'center'}
          alignItems={'center'}
          area={'navLeft'}
        >
          <Box display={'flex'}>
            <IconButton
              isRound
              aria-label=''
              size={'md'}
              icon={<ChevronIcon />}
              onClick={() => setIsOpen(true)}
            />
          </Box>
        </GridItem>
        <GridItem
          area={'main'}
          display={{ base: 'none', lg: 'block' }}
        >
          <Box>
            <ProjectCard {...projects.projectROM} />
            <ProjectCard {...projects.projectROM} />
          </Box>

        </GridItem>
        <GridItem
          display={{ base: 'none', lg: 'block' }}
          area={'navRight'}
        />
      </Grid>
    </div>
  );
}

export default App;
