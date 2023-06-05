import { TextInput, View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = ({ onPickNumber }) => {
  const [ enterdNumber, setEnteredNumber ] = useState('');

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enterdNumber);
    if ( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
      // show alert ... Alert.alert(title, message, array of button actions (as objects) to provide from the native systems...some button text, a set style, and a function to follow through when pressed)
      Alert.alert(
        'Invalid number!', 
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    };
    // console.log('Valid number!');
    onPickNumber(chosenNumber);
  };

  return (
    <View style={ styles.inputContainer }>
      <TextInput 
        style={ styles.numberInput } 
        maxLength={ 2 } 
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={ false }
        onChangeText={ numberInputHandler }
        value={ enterdNumber }
      />
      <View style={ styles.buttonsContainer }>
        <View style={ styles.buttonContainer }>
          <PrimaryButton onPress={ resetInputHandler }>Reset</PrimaryButton>
        </View>
        <View style={ styles.buttonContainer }>
          <PrimaryButton onPress={ confirmInputHandler }>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#4e0329',
    borderRadius: 8,
    // makes box-shadow on Android
    elevation: 4, 
    // makes box-shadow on iOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: .5,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});