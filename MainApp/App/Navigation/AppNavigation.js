

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainComponent from '../Containers/main_screen';
import DetailsComponent from '../Containers/details_screen';
const AppNavigator = createStackNavigator({
    splash: {
        screen: MainComponent
    },
    details: {
        screen: DetailsComponent
    },
},
    {
        initialRouteName: 'splash',
    })
export default createAppContainer(AppNavigator);
