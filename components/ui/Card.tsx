import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = (props: { children: any }) => {
  return (
    <View style={ styles.card }>
      { props.children }
    </View>
  )
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    // backgroundColor: '#4e0329',
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // makes box-shadow on Android
    elevation: 4, 
    // makes box-shadow on iOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: .5,
  },
});