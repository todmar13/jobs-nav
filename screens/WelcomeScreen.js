import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Slides from '../components/Slides'

const SLIDE_DATA = [
  {index:0,color:'#03a9f4',text: 'Welcome to JobApp'},
  {index:1,color:'#009688',text: 'Use this to get ze jobski'},
  {index:2,color:'#03a9f4',text: 'Set your location, then swipe away'},
]

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }
  render() {
    return (
      <Slides data = {SLIDE_DATA} onComplete = {this.onSlidesComplete} />
    );
  }
}
export default WelcomeScreen;
