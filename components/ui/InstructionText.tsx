import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

interface InstructionTextProps {
  children: string,
  style?: {}, // the ? makes this an optional field for the interface
}

const InstructionText = ({ children, style }: InstructionTextProps) => {
  return (
    <Text style={ [styles.instructionText, style ] }>{ children }</Text>
  )
};
// style prop can acceps an array of styles, so we can pass some styles down via props to imitate CSS cascading inheritance

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
