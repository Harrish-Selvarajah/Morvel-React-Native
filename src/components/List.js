import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Button,
  TouchableWithoutFeedback
} from "react-native";

const show_first = [ //popular
  {
    key: 1,
    name: "The Walking Dead",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/174/437131.jpg"
  },

  {
    key: 2,
    name: "The Walking Dead",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/177/444251.jpg"
  },
  {
    key: 3,
    name: "The Walking Dead",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/177/442821.jpg"
  },
  {
    key: 4,
    name: "The Walking Dead",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/178/445621.jpg"
  },
  {
    key: 5,
    name: "The Walking Dead",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/179/448825.jpg"
  },
  {
    key: 6,
    name: "The Walking Dead",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/174/437131.jpg"
  },
  {
    key: 7,
    name: "The Walking Dead",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/174/437131.jpg"
  },
  {
    key: 8,
    name: "The Walking Dead",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/174/437131.jpg"
  }
];
const show_second = [
  {
    key: 9,
    name: "The Walking Dead",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/173/434759.jpg"
  },

  {
    key: 10,
    name: "The Walking Dead",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/179/448601.jpg"
  },
  {
    key: 11,
    name: "The Walking Dead",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/172/431187.jpg"
  },
  {
    key: 12,
    name: "The Walking Dead",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/179/449201.jpg"
  },
  {
    key: 13,
    name: "The Walking Dead",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/174/437131.jpg"
  },
  {
    key: 14,
    name: "The Walking Dead",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/174/437131.jpg"
  },
  {
    key: 15,
    name: "The Walking Dead",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/174/437131.jpg"
  },
  {
    key: 16,
    name: "The Walking Dead",
    image:
      "http://static.tvmaze.com/uploads/images/medium_portrait/174/437131.jpg"
  }
];
class List extends Component {
 
  renderItem(item) {
    return (
      <Image style={{ width: 120, height: 180 }} source={{ uri: item.image }} />
    );
  }

  cb = () => {
    this.props.navigation.push('QuestionDetail');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <Text style={styles.text}>Popular</Text>
            <FlatList
              horizontal
              ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
              data={show_first}
              //renderItem={({ item }) =>  this.renderItem(item)}  
              renderItem={({ item }) => (
                <TouchableWithoutFeedback onPress={ () => this.cb()}>
                  <View>
                  <Image style={{ width: 120, height: 180 }} source={{ uri: item.image }}/>
                  </View>
                </TouchableWithoutFeedback>
              )}  
            />
            
        
          </View>

          <View>
            <Text style={styles.text}>Recommended For You</Text>
            <FlatList
              horizontal
              ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
              renderItem={({ item }) => this.renderItem(item)}
              data={show_second}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "white"
  }
});

export default List;
