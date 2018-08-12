import React, {Component} from 'react'
import {View, Text, ScrollView, Dimensions} from 'react-native'
import {Button} from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index===this.props.data.length-1) {
      return (<View style={{margin:15}}><Button title="Onwards!"
        buttonStyle={styles.buttonStyle} raised
        textStyle={{color:'#00ffff'}}
        onPress={this.props.onComplete}/>
        </View>)
    }
  }

  renderSlides() {
    return this.props.data.map((slide,index) => {
      return (<View
              key={slide.index}
              style={[styles.slideStyle,{backgroundColor:slide.color}]}>
        <Text style={styles.textStyle}> {slide.text}</Text>
        {this.renderLastSlide(index)}
        </View>
    )
    })
  }
  render() {
    return(   // JSX horizontal implies 'true', flex:1 fills up the screen...
    <ScrollView horizontal style={{flex:1}} pagingEnabled>
    {this.renderSlides()}
    </ScrollView>
  )
  }
}

const styles = {
  slideStyle: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  textStyle:{ color:'white',fontSize:30, textAlign:'center'},

  buttonStyle: { backgroundColor:'#0288D1'}

}
export default Slides;
