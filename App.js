import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import List from "./src/components/List";
import Slide from "./src/components/Slider";
import Header from "./src/components/Header";
import Menu from "./src/components/Menu";
import SideMenu from "react-native-side-menu";

class App extends Component {
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
          <List />
        </SideMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  }
});

export default App;
