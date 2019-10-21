import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainComponent from '../Containers/main_screen';
import DetailsComponent from '../Containers/details_screen';
import LocationsScreen from '../Containers/locations_screen';
import ModalExample from '../Containers/location_add_screen';
import LocationDetailsComponent from '../Containers/locations_details_screen';
import Login from '../Containers/login';
import Splash from '../Containers/splash';
import Signup from '../Containers/signup';
const AppNavigator = createStackNavigator({
    main: {
        screen: MainComponent
    },
    splash:{
        screen: Splash
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
    },
    signup:{
        screen:Signup
    },
    login: {
        screen: Login
    }

},
    {
        initialRouteName: 'login',
    })
export default createAppContainer(AppNavigator);
