import { 
  TextInput, 
  View, 
  StyleSheet, 
  Alert, 
  // Dimensions, 
  useWindowDimensions,
  KeyboardAvoidingView, 
  ScrollView,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

interface StartGameProps {
  onPickNumber: (arg0: number) => void,
}

const StartGameScreen = ({ onPickNumber }: StartGameProps) => {
  const [ enterdNumber, setEnteredNumber ] = useState<string>('');

  const { width, height } = useWindowDimensions();

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

  const marginTopDistance = height < 400 ? 30 : 100;
  // uses useWindowDimension hook to create a dynamic variable, that we can add to the style array below.
  // Dimensions API is used for static adjustments for screen dimension, but the hook version is for dynamic changes.

  return (
    <ScrollView style={ styles.screen }>
      <KeyboardAvoidingView style={ styles.screen } behavior="position">
        <View style={[ styles.rootContainer, { marginTop: marginTopDistance } ]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            {/* <Text style={ styles.instructionText }>Enter a Number</Text> */}
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
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height; 
// This code will only check the dimensions once, not respond to any orientation changes (sicne it's outside of the component function)

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: 'center'
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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