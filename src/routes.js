import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import Quest from './pages/Quest';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      Quest,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#38b6ff',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
