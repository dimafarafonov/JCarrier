import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  updateFuncCommon = () => {
    this.setState({counter: this.state.counter + 1});
    this.setState({counter: this.state.counter + 1});
    this.setState({counter: this.state.counter + 1});
  };

  updateFuncCallback = () => {
    this.setState(function (state, props) {
      return {
        counter: state.counter + 1,
      };
    });
    this.setState(function (state, props) {
      return {
        counter: state.counter + 1,
      };
    });
    this.setState(function (state, props) {
      return {
        counter: state.counter + 1,
      };
    });
  };

  render() {
    const {counter} = this.state;
    return (
      <>
        <Pressable style={styles.container} onPress={this.updateFuncCommon}>
          <Text style={{textAlign: 'center'}}>Hello {counter}</Text>
        </Pressable>
        <Pressable
          style={[styles.container, {backgroundColor: 'red'}]}
          onPress={this.updateFuncCallback}>
          <Text style={{textAlign: 'center'}}>Hello {counter}</Text>
        </Pressable>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#00ff00',
  },
});

export default App;
