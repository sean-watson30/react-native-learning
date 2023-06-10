import { StyleSheet, View, Alert, FlatList, useWindowDimensions } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (min: number, max: number, exclude: number): number => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

interface GameScreenProps {
  userNumber: number,
  onGameOver: (arg0: number) => void,
}

const GameScreen = ({ userNumber, onGameOver }: GameScreenProps) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber) ;
  const [ currentGuess, setCurrentGuess ] = useState(initialGuess);
  const [ guessRounds, setGuessRounds ] = useState([ initialGuess ]);
  const { width, height } =useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction: string) => { // direction => "lower" or "higher"
    if (
      (direction === 'lower' && currentGuess < userNumber) || 
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: 'Sorry....', style: 'cancel'}
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [ newRndNumber, ...prevGuessRounds ]);
  };

  const guessRoundsListLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{ currentGuess }</NumberContainer>
      <Card>
        <InstructionText style={ styles.instructionText }>
          Higher or Lower?
        </InstructionText>
        <View style={ styles.buttonsContainer }>
          <View style={ styles.buttonContainer }>
            <PrimaryButton onPress={ nextGuessHandler.bind(this, 'lower') }>
              -
            </PrimaryButton>
          </View>
          <View style={ styles.buttonContainer }>
            <PrimaryButton onPress={ nextGuessHandler.bind(this, 'greater') }>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={ styles.buttonsContainerWide }>
          <View style={ styles.buttonContainer }>
            <PrimaryButton onPress={ nextGuessHandler.bind(this, 'lower') }>
              -
            </PrimaryButton>
          </View>
          <NumberContainer>{ currentGuess }</NumberContainer>
          <View style={ styles.buttonContainer }>
            <PrimaryButton onPress={ nextGuessHandler.bind(this, 'greater') }>
              +
            </PrimaryButton>
          </View>
        </View>
      </>
    )
  };

  return (
    <View style={ styles.screen }>
      <Title>Opponent's Guess</Title>
      { content }
      <View style={ styles.listContainer }>
        <FlatList 
          data={ guessRounds } 
          renderItem={(itemData) => (
            <GuessLogItem 
              roundNumber={  guessRoundsListLength - itemData.index } 
              guess={ itemData.item } 
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  )
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
