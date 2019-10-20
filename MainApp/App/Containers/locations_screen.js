
import React, { Component } from 'react';
import { SafeAreaView, Button, TouchableHighlight, View, Modal, TouchableOpacity, FlatList, StyleSheet, Text } from 'react-native';
import { totalSize } from 'react-native-dimension'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
class LocationsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            locations: ["Current location", "Berlin, Germany", "Amsterdam, Netherlands", "London, UK"]
        };
        this.setModalVisible = this.setModalVisible.bind(this);
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    onPress() {
        console.log('Test');
        const { navigate } = this.props.navigation;
        navigate('addLocation', {})
    }

    componentDidMount() {
        this.props.navigation.setParams({
            setModalVisible: this.setModalVisible
        })
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Locations',
            headerTitleStyle: { fontFamily: 'Helvetica-Bold', fontSize: 30 },
            headerLeft: () => (<TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}><EvilIcons name="navicon" size={totalSize(5)} /></TouchableOpacity> ),
            headerRight: () => (
                <View >
                    <TouchableOpacity style={styles.header_button} onPress={() => {
                        navigation.getParam('setModalVisible')(true);
                    }}>
                        <Ionicons name="md-add" size={totalSize(5)} />
                    </TouchableOpacity>
                </View>

            ),
        }
    };
    renderItem({ item }) {
        return (
            <View style={styles.view}>
                <View style={styles.location_row}>
                    <Text style={styles.location}>{item}</Text>
                    <AntDesign name='right' style={styles.details_image} size={totalSize(3)} />
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.4,
                    }}
                />
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.locations}
                    renderItem={this.renderItem}
                />
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}>
                    <View style={styles.container_row}>
                        <GooglePlacesAutocomplete
                            placeholder='Enter Location'
                            minLength={2}
                            autoFocus={false}
                            returnKeyType={'default'}
                            fetchDetails={true}
                            styles={{
                                textInputContainer: {
                                    flex: 1,
                                    backgroundColor: 'rgba(0,0,0,0)',
                                    borderTopWidth: 0,
                                    borderBottomWidth: 0
                                },
                                textInput: {
                                    marginLeft: 0,
                                    marginRight: 0,
                                    height: 38,
                                    color: '#5d5d5d',
                                    fontSize: 16
                                },
                                predefinedPlacesDescription: {
                                    color: '#1faadb'
                                },
                            }}
                            query={{
                                // available options: https://developers.google.com/places/web-service/autocomplete
                                key: 'AIzaSyDeR1FwfTaNez2grMfnY6GpP-JTcypiVWg',
                                language: 'en', // language of the results
                                types: '(cities)' // default: 'geocode'
                            }}
                            currentLocation={false}
                        />
                        <TouchableOpacity
                            style={{
                                marginTop: 10

                            }}
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Entypo name='cross' size={totalSize(5)} />
                        </TouchableOpacity>
                    </View>
                </Modal>
            </SafeAreaView>
        );
    }
}
export default LocationsScreen;

const styles = StyleSheet.create({
    container_row: {
        flexDirection: 'row',
        width: null,
        alignContent: 'center',
    },
    details_image: {
        flex: 1,

    },
    close: {
        flex: 1,
    },
    header_button: {
        marginHorizontal: 10
    },
    location_row: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    location: {
        flex: 10,
        fontFamily: 'Helvetica',
        fontSize: 20,
    },
    container_column: {
        flex: 1,
        flexDirection: 'column',
        width: null,
    },
    subcontainer_column: {
        marginLeft: 5,
        flex: 2,
        flexDirection: 'column',
        width: null,
    },
    view: {
        flexDirection: 'column',
        padding: 5,
        margin: 5,
    },
    category: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    content: {
        fontFamily: 'Courier New',
        flex: 4,
        marginLeft: 5
    },
    image: {
        flex: 1,
        width: null,
        height: 300,
    },
    headline: {
        fontFamily: 'Courier New',
        fontSize: 20
    },
    greytext: {
        fontFamily: 'Courier New',
        color: "#999"
    },
})