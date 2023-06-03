/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, View, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={ styles.rootScreen }>
      <ImageBackground 
        source={ require('./assets/images/background.png') }
        resizeMode='cover'
        style={ styles.rootScreen }
        imageStyle={ styles.backgroundImage }
      >
        <StartGameScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
  backgroundImage: {
    opacity: 0.15,
  }
});