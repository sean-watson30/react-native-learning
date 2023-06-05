/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [ userNumber, setuserNumber ] = useState();

  const pickedNumberHandler = (pickedNumber: number) => {
    setuserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={ pickedNumberHandler }/>;

  if (userNumber) {
    screen = <GameScreen />
  };

  return (
    <View style={ styles.rootScreen }>
      <ImageBackground 
        source={ require('./assets/images/background.png') }
        resizeMode='cover'
        style={ styles.rootScreen }
        imageStyle={ styles.backgroundImage }
      >
        {/* <StartGameScreen /> */}
        { screen }
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
