import React, { Component } from 'react';
import { View, Button, ButtonGroup, CheckBox, SafeAreaView, Text, StyleSheet } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { totalSize, height } from 'react-native-dimension'
import images from '../Images';
class LocationDetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            push_notifications: false,
            selectedIndex: 2
        };
        this.updateIndex = this.updateIndex.bind(this)
    }

    static navigationOptions = {
        title: 'Location Details',
    }

    async componentDidMount() {
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }
    render() {
        const buttons = ['5 km', '10 km', '25 km']
        const { selectedIndex } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <View style={styles.container_row}>
                        <Text style={styles.text}>Show push notifications</Text>
                        <CheckBox
                            center
                            title='Show push notifications'
                            iconRight
                            iconType='material'
                            checkedIcon='clear'
                            uncheckedIcon='add'
                            checkedColor='red'
                            style={styles.checkbox}
                            checked={this.state.push_notifications}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Set Radius</Text>
                        <ButtonGroup>
                            <Button togglable={true}>
                                5 km
                        </Button>
                            <Button togglable={true}>
                                10 km
                        </Button>
                            <Button togglable={true}>
                                25 km
                        </Button>
                        </ButtonGroup>
                    </View>
                    <View></View>
                </View>
            </SafeAreaView>
        );
    }
}

export default LocationDetailsComponent;

const styles = StyleSheet.create({
    container_row: {
        margin: 5,
        flexDirection: 'row',
        width: null,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        flex: 5
    },
    checkbox: {
        flex: 1
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