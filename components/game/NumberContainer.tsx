import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = (props: { children: number }) => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.numberText }>{ props.children }</Text>
    </View>
    )
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    // borderColor: Colors.accent500,
    borderColor: Colors.primary500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    // color: Colors.accent500,
    color: Colors.primary500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontWeight: 'bold',
  },
})