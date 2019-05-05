import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import SideMenu from "react-native-side-menu";
import List from "./PopularList";
import Slide from "./Slider";
import Header from "./Header";
import Menu from "./Menu";
import PopularList from "./PopularList";
import CFmovies from "./CFmovies";


export class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    
      updateMenu(isOpen) {
        this.setState({ isOpen });
      }

  render() {
    return (
       <View style={[{ flex: 1 }, styles.container]}>
      
      <SideMenu
        menu={<Menu />}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenu(isOpen)}
      >
        <Header toggle={this.toggle.bind(this)} />
        
        <Slide />
        <PopularList />
        <CFmovies />

      
      </SideMenu>
      
    </View> 
    )
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "black"
    }
  });

export default MainMenu
