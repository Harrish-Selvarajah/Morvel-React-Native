import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {createStackNavigator, createAppContainer} from 'react-navigation';
// import List from "./src/components/List";
// import Slide from "./src/components/Slider";
// import Header from "./src/components/Header";
// import Menu from "./src/components/Menu";
// import SideMenu from "react-native-side-menu";
// import Details from "./src/components/Details";
// import MovieDetails from "./src/components/MovieDetails";
// import Routes from "./src/components/Routes";
import MainMenu from "./src/components/MainMenu";
import Routes from "./src/components/Routes";

class App extends Component {
  
  render() {
    return (
     <Routes />
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  }
});

export default App;
