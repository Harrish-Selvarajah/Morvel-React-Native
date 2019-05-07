import React, { Component } from 'react'
import { View, Text, StatusBar, ScrollView, Image } from "react-native";
import {Config} from '../Config';
import Styles from "./Styles";
import Constants from "../Constants";

export class MovieDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movieDetails:{}
     };
   }

   componentDidMount() {
    this.getMovieDetails();
}

getMovieDetails = () => {
  var endpoint = Config.apiURL + "movie/" + this.props.id + "?" + Config.apiKey
};

getMovieDetailsCallback = responseJson => {
  this.setState({ 
    loading: false,
    movieDetails: responseJson 
  });
};

render() {
  return (
    <View style={{ backgroundColor: Constants.Colors.Grey }}>
      <StatusBar backgroundColor={Constants.Colors.Cyan} barStyle="light-content" />
      {this.state.isLoading ? <Loader show={true} loading={this.state.isLoading} /> : null}
      <ScrollView style={Styles.movieCard} showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={Styles.image}
            source={{
              uri:
                this.state.movieDetails.poster_path != null
                  ? Constants.URL.IMAGE_URL + this.state.movieDetails.poster_path
                  : Constants.URL.PLACEHOLDER_IMAGE
            }}
          />
          <Text style={{ fontSize: 16, margin: 5, fontWeight: "bold" }}>{this.state.movieDetails.original_title}</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={{ flex: 0.5 }}>{Constants.Strings.STATUS}</Text>
          <Text style={{ flex: 0.5 }}>{this.state.movieDetails.status}</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={{ flex: 0.5 }}>{Constants.Strings.RATINGS}</Text>
          <Text style={{ flex: 0.5 }}>
            {this.state.movieDetails.vote_average}
            /10
          </Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={{ flex: 0.5 }}>{Constants.Strings.POPULARITY}</Text>
          <Text style={{ flex: 0.5 }}>{this.state.movieDetails.popularity}%</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={{ flex: 0.5 }}>{Constants.Strings.BUDGET}</Text>
          <Text style={{ flex: 0.5 }}>${this.state.movieDetails.budget}</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={{ flex: 0.5 }}>{Constants.Strings.REVENUE}</Text>
          <Text style={{ flex: 0.5 }}>${this.state.movieDetails.revenue}</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={{ flex: 0.5 }}>{Constants.Strings.RUNTIME}</Text>
          <Text style={{ flex: 0.5 }}>{this.state.movieDetails.runtime} min</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Text style={{ flex: 0.5 }}>{Constants.Strings.LANGUAGE}</Text>
          <Text style={{ flex: 0.5 }}>{this.state.movieDetails.original_language}</Text>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ flex: 0.2 }}>{Constants.Strings.OVERVIEW}</Text>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ flexWrap: "wrap", flex: 0.8 }}>{this.state.movieDetails.overview}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
}

export default MovieDetails
