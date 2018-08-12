import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Button} from 'react-native-elements'
// Platform header offset for Android is in app.js inside of review: createStackNavigator(....)
class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Review Jobs",
    title: "Review Jobs",
    headerRight: (
      <Button
        title="Settings"
        onPress={() => {
          navigation.navigate("settings");
        }}
      />
    ),
    /*
    headerStyle: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
    */
  })

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
          <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
      </View>
    );
  }
}
export default ReviewScreen;
