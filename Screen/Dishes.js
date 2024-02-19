import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import { Header } from 'react-native-elements';

export default class Dishes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <Header
          backgroundColor={'#FF0000'}
          centerComponent={{
            text: "Dishes",
            style: { color: '#fff', fontSize: 25 },
          }}
        />
        <Image
          style={styles.imageIcon}
          source={{
            uri: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg',
          }}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
           // this.setState({ displayText: this.state.text });
            this.props.navigation.navigate('IndianCuisine');
          }}>
           <Image source={require("../assets/IndianCusine.avif")} style={styles.iconImage}/>
          <Text style={styles.buttonText}>Indian Cuisines</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
           // this.setState({ displayText: this.state.text });
            this.props.navigation.navigate('ContinentalCuisine');
          }}>
          <Text style={styles.buttonText}>Continental Cuisines</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
           // this.setState({ displayText: this.state.text });
            this.props.navigation.navigate('ChineseCuisine');
          }}>
          <Text style={styles.buttonText}>Chinese Cuisines</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
    backgroundColor: '#FFFFF0',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

   iconImage: {
        position: "absolute",
        height: 10,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    },

  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    color: '#111111',
    fontWeight: 'bold',
  }
});
