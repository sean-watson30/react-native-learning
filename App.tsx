/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';

export default function App() {
  const [ userNumber, setuserNumber ] = useState();
  const [ gameIsOver, setGameIsOver ] = useState(true);

  const pickedNumberHandler = (pickedNumber: number) => {
    setuserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverhandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onPickNumber={ pickedNumberHandler }/>;

  if (userNumber) {
    screen = <GameScreen userNumber={ userNumber } onGameOver={ gameOverhandler} />
  };

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
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
        <SafeAreaView style={ styles.rootScreen }>
          { screen }
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.accent500,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});

