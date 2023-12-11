import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {};

type State = {
  counter: number;
};

class SetStateUpdatesExamples extends React.Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  updateFuncCommon = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
  };

  updateFuncCallback = () => {
    this.setState(function (state) {
      return {
        counter: state.counter + 1,
      };
    });
    this.setState(function (state) {
      return {
        counter: state.counter + 1,
      };
    });
    this.setState(function (state) {
      return {
        counter: state.counter + 1,
      };
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <>
        <Pressable style={styles.container} onPress={this.updateFuncCommon}>
          <Text style={{ textAlign: 'center' }}>Hello {counter}</Text>
        </Pressable>
        <Pressable
          style={[styles.container, { backgroundColor: 'red' }]}
          onPress={this.updateFuncCallback}
        >
          <Text style={{ textAlign: 'center' }}>Hello {counter}</Text>
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

export default SetStateUpdatesExamples;
