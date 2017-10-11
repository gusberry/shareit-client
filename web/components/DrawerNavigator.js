import React, { Component } from 'react';
import Sidebar from 'react-sidebar';

const buildDrawerNavigator = routes =>
  class DrawerNavigator extends Component {
    render() {
      return (
        <Sidebar sidebar={<b>Sidebar content</b>}>
          <b>Main content</b>
        </Sidebar>
      );
    }
  };

export default buildDrawerNavigator;
