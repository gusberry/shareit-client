import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Sidebar from 'react-sidebar';
import SidebarContent from './SidebarContent';

class Router extends React.Component {
  onSetSidebarOpen = open =>
    this.props.onNavigationStateChange(
      undefined,
      undefined,
      (open && { routeName: 'DrawerOpen' }) || {},
    );

  render() {
    const { router, navigation } = this.props;
    const Component = router.getComponentForState(navigation.state);
    return (
      <Sidebar
        sidebar={<SidebarContent />}
        styles={styles}
        pullRight
        open={this.props.isDrawerOpen}
        onSetOpen={this.onSetSidebarOpen}
      >
        <Component />
      </Sidebar>
    );
  }
}

const styles = {
  content: {
    display: 'flex',
    overflowY: 'hidden',
  },
  sidebar: {
    backgroundColor: '#383942',
  },
};

export default Router;
