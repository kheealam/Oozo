

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import MainComponent from '../Containers/main_screen';
const AppNavigator = createStackNavigator({
    splash: {
        screen: MainComponent
    },
},
    {
        initialRouteName: 'splash',
    })
export default createAppContainer(AppNavigator);
