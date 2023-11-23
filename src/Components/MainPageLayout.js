import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import TopNavBar from './TopNavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './DashBoard';
import FacultyHandler from './FacultyHandler';
import TrainerClassesList from './TrainerClassesList';
import Documentation from './Documentation';

const MainPageLayout = () => {
  return (
    <Grid
        h={['200vh','200vh','full','full']}
        templateRows='repeat(20, 1fr)'
        templateColumns='repeat(12, 1fr)'
        gap={1}
        bgGradient='linear(to-l, #7F7FD5 , #91EAE4)'
        >
          <GridItem rowSpan={2} colSpan={12} zIndex="20">
            <TopNavBar />
          </GridItem>
          <GridItem rowSpan={18} colSpan={12} zIndex="10">
            {/* Main Page Starts Here */}
            <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="home" element={<DashBoard />} />
                <Route path="faculty" element={<FacultyHandler />} />
                <Route path="classes" element={<TrainerClassesList />} />
                <Route path="docs" element={<Documentation />} />
            </Routes>
          </GridItem>
    </Grid>
  )
}

export default MainPageLayout