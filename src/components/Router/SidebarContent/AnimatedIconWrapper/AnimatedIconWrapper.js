import React from 'react';
import PropTypes from 'prop-types';
import { Animated, StyleSheet } from 'react-native';

class AnimatedIconWrapper extends React.Component {
  marginAnim = new Animated.Value(30);
  opacityAnim = new Animated.Value(0);

  animateIcon = () =>
    Animated.parallel([
      Animated.timing(this.marginAnim, {
        toValue: 0,
        duration: 200,
        delay: +this.props.delay,
      }),
      Animated.timing(this.opacityAnim, {
        toValue: 1,
        duration: 200,
        delay: +this.props.delay,
      }),
    ]).start();

  componentWillReceiveProps(nextProps) {
    if (nextProps.isVisible) {
      return this.animateIcon();
    }

    this.marginAnim.setValue(30);
    this.opacityAnim.setValue(0);
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.iconWrapper,
          {
            marginTop: this.marginAnim,
            opacity: this.opacityAnim,
            backgroundColor: this.props.backgroundColor,
          },
        ]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default AnimatedIconWrapper;
