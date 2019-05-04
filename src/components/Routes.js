import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import MainMenu from './MainMenu';
import MovieDetails from './MovieDetails';




const Routes = () => (
   <Router>
      <Scene key = "root" hideNavBar={true}>
         <Scene key = "home" component = {MainMenu} title="home" initial = {true} />
         <Scene key = "MovieDetails" component = {MovieDetails} />
      </Scene>
   </Router>
)
export default Routes