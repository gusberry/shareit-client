import {
  StackRouter,
  createNavigator,
  createNavigationContainer,
} from 'react-navigation';

import routesMapping from './mapping';
import RouterComponent from './Router';
import connect from './connect';

export default connect(
  createNavigationContainer(
    createNavigator(StackRouter(routesMapping))(RouterComponent),
  ),
);
