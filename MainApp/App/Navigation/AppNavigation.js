

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainComponent from '../Containers/main_screen';
import DetailsComponent from '../Containers/details_screen';
import LocationsScreen from '../Containers/locations_screen';
import ModalExample from '../Containers/location_add_screen';
import LocationDetailsComponent from '../Containers/locations_details_screen';
const AppNavigator = createStackNavigator({
    splash: {
        screen: MainComponent
    },
    details: {
        screen: DetailsComponent
    },
    locations: {
        screen: LocationsScreen
    },
    addLocation: {
        screen: ModalExample
    },
    locationDetails: {
        screen: LocationDetailsComponent
    }

},
    {
        initialRouteName: 'locationDetails',
    })
export default createAppContainer(AppNavigator);
