import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Splash from '../Containers/splash';
import Login from '../Containers/login';
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
import { totalSize, height } from 'react-native-dimension';

const NewsFeedStack = createStackNavigator({
    main: {
        screen: MainComponent,
    },
    details: {
        screen: DetailsComponent,
    },
},
    {
        initialRouteName: 'main'
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
    tabBarLabel: 'News Feed',
    tabBarIcon: ({ tintColor }) => (
        <Entypo name="home" color={tintColor} size={totalSize(3.5)} />
    )
};

LocationsStack.navigationOptions = {
    tabBarLabel: 'Locations',
    tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="map-marker" color={tintColor} size={totalSize(3.5)} />
    )
};
Settings.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor }) => (
        <AntDesign name="setting" color={tintColor} size={totalSize(3.5)} />
    )
};
EditProfileClient.navigationOptions= {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
        <Fontisto name="person" color={tintColor} size={totalSize(3.5)} />
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
    initialRouteName: 'News'

});
const SwitchNavigator = createSwitchNavigator({
    splash:{
        screen:Splash
    },
    login:{
        screen:Login
    },
    main:TabNavigator
},{

    initialRouteName:'splash'
});
export default createAppContainer(SwitchNavigator);
