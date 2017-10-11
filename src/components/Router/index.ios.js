import { DrawerNavigator } from 'react-navigation';
import routesMapping from './mapping';
import SideBarComponent from './SidebarContent';
import styles from './SidebarContent/styles';

export default DrawerNavigator(routesMapping, {
  drawerPosition: 'right',
  drawerWidth: styles.width,
  contentComponent: SideBarComponent,
  contentOptions: {
    style: styles,
  },
});
