import { Text, StyleSheet } from "react-native";
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
    borderWidth: 2,
    padding: 12,
  },
});