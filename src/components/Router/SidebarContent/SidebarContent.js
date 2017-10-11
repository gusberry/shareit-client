import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';
import routesMapping from '../mapping';
import AnimatedIconWrapper from './AnimatedIconWrapper';

class SideBarContent extends React.Component {
  render() {
    return (
      <View style={styles}>
        {Object.keys(routesMapping).map((routeName, i) => [
          <AnimatedIconWrapper
            isVisible={this.props.isDrawerOpen}
            key={routeName}
            delay={i * 200}
            backgroundColor="#226F54"
          >
            {routesMapping[routeName].screen.navigationOptions.drawerIcon}
          </AnimatedIconWrapper>,
        ])}
      </View>
    );
  }
}

export default SideBarContent;
