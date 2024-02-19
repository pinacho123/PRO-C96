import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { Header } from 'react-native-elements';

import db from './Localdb';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSounds: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <Header
          backgroundColor={'#FF0000'}
          centerComponent={{
            text: "All D's",
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <Image
          style={styles.imageIcon}
          source={{
            uri: 'https://uploads-ssl.webflow.com/5fe0022130b6119c3b25d03f/6000a4262c3c62f6aadb85d3_shutterstock_1044844045.jpg',
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
           this.setState({ chunks: db[this.state.text].chunks });
            this.setState({ phonicSounds: db[this.state.text].phones });
            //this.props.navigation.navigate('Dishes');
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <Text style={styles.displayText}>{this.state.chunks}</Text>
        <Text style={styles.displayText}>{this.state.phonicSounds}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  inputBox: {
    marginTop: 80,
    width: '89%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  imageIcon: {
    width: 150,
    height: 160,
    marginLeft: 87,
    marginTop: 20,
  },

  displayText: {
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    fontSize: 30,
  },
});
