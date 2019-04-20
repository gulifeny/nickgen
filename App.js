
import React, {Component} from 'react';
import {Platform
        , StyleSheet
        , Text
        , View
        , Button
        , FlatList
        , Picker
        } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  state = {
    themeList : ['weather', 'animal', 'emotion']
    , weather : ['창창한','쨍쨍한','히린', '우중충한', '푸른']
    , animal : ['호랑이','고양이','강아지', '멍멍이']
    , emotion : ['기쁜', '우울한', '피곤한', '쌩쌩한']
    , nick : []
  } 

  genNick() {
    num1 = Math.trunc( this.state.weather.length * Math.random())
    num2 = Math.trunc( this.state.animal.length * Math.random())

    word1 = this.state.weather[num1]
    word2 = this.state.animal[num2]
    
    this.setState({ nick: this.state.nick.concat( word1 + word2) });
  }
  
  render() {
    return (
      <View style={styles.container}>
      <Picker
        selectedValue={this.state.themeList}
        style={{flex: 1, height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({theme: itemValue})
        }>
        {
          this.state.themeList.map(theme => <Picker.Item label= {theme} value= {theme} />)
        }
      </Picker>
{/** 
        <Button
          onPress={this.genNick.bind(this)}
          title="입력"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <FlatList data={this.state.nick}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
        */
}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
