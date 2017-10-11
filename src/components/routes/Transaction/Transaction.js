import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Transactions extends Component {
  fadeAnim = new Animated.Value(0);

  static navigationOptions = {
    drawerIcon: <Icon name="rocket" size={40} color="#E9E7E5" />,
  };

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 500, // Make it take a while
        easing: Easing.ease,
      },
    ).start();
  }

  render() {
    return (
      <Animated.View style={[styles.container, { opacity: this.fadeAnim }]}>
        <TextInput style={styles.welcome} placeholder="For what" />
        <TextInput style={styles.welcome} placeholder="Amount" />
        <TextInput style={styles.welcome} placeholder="Payee" />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383942',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    color: '#E9E7E5',
  },
});
