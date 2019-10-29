import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Splash from '../Containers/splash';
import Login from '../Containers/login';
import SignUp from '../Containers/signup';
import MainComponent from '../Containers/main_screen';
import DetailsComponent from '../Containers/details_screen';
import LocationsScreen from '../Containers/locations_screen';
import ModalExample from '../Containers/location_add_screen';
import LocationDetailsComponent from '../Containers/locations_details_screen';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Settings from '../Containers/settings';
import EditProfileClient from '../Containers/profile'; 
import { totalSize } from 'react-native-dimension';

const NewsFeedStack = createStackNavigator({
    main: {
        screen: MainComponent,
    },
    details: {
        screen: DetailsComponent,
    },
},
    {
        initialRouteName: 'main',
    });
const LocationsStack = createStackNavigator({
    locations: {
        screen: LocationsScreen
    },
    locationDetails: {
        screen: LocationDetailsComponent
    },
    addLocation: {
        screen: ModalExample
    },
});

NewsFeedStack.navigationOptions = {
    tabBarLabel: '112 meldingen',
    tabBarIcon: ({ tintColor }) => (
        <Entypo name="home" color={tintColor} size={totalSize(3)} />
    )
};

LocationsStack.navigationOptions = {
    tabBarLabel: 'Mijn locaties',
    tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="map-marker" color={tintColor} size={totalSize(3)} />
    )
};
Settings.navigationOptions = {
    tabBarLabel: 'Instellingen',
    tabBarIcon: ({ tintColor }) => (
        <AntDesign name="setting" color={tintColor} size={totalSize(3)} />
    )
};
EditProfileClient.navigationOptions= {
    tabBarLabel: 'Meld nieuws',
    tabBarIcon: ({ tintColor }) => (
        <Fontisto name="person" color={tintColor} size={totalSize(3)} />
    )
};
// const WIDTH = Dimensions.get('window').width;

// const DrawerConfig = {
//     drawerWidth: WIDTH * 0.83,
//     initialRouteName: 'login'

// }
// const AppNavigator = createDrawerNavigator({
//     main: {
//         screen: MainComponent
//     },
//     splash: {
//         screen: Splash
//     },
//     details: {
//         screen: DetailsComponent
//     },
//     locations: {
//         screen: LocationsScreen
//     },
//     addLocation: {
//         screen: ModalExample
//     },
//     locationDetails: {
//         screen: LocationDetailsComponent
//     },
//     signup: {
//         screen: Signup
//     },
//     login: {
//         screen: Login
//     }

// },
//     DrawerConfig)
const TabNavigator = createBottomTabNavigator({
    News: NewsFeedStack,
    Location: LocationsStack,
    Profile: EditProfileClient,
    Settings: Settings
}, {
    initialRouteName: 'News',
    tabBarOptions: {
        style:{
            padding: 5,
            height:65}
    }, 

});
const SwitchNavigator = createSwitchNavigator({
    splash:{
        screen:Splash
    },
    login:{
        screen:Login
    },
    signup:{
        screen:SignUp
    },
    main:TabNavigator
},{

    initialRouteName:'splash'
});
export default createAppContainer(SwitchNavigator);
