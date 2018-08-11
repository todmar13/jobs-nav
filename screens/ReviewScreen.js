import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Button} from 'react-native-elements'
class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Review Jobs",
    headerRight: (
      <Button
        text="Settings"
        onPress={() => {
          navigation.navigate("settings");
        }}
      />
    )
  });

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
