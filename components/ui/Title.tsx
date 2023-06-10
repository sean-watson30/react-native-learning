import { Text, StyleSheet, Platform } from "react-native";
// import Colors from "../constants/colors";

interface TitleProps {
  children: string,
}

const Title = ({ children }: TitleProps) => {
  return <Text style={ styles.title }>{ children }</Text>
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    // color: Colors.accent500,
    textAlign: 'center',
    // borderColor: Colors.accent500,
    borderColor: 'black',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 1, android: 2 }),
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});