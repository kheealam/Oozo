import React, { Component } from 'react';
import { View, SafeAreaView, FlatList, Text, Image, StyleSheet } from 'react-native';
import { totalSize, height } from 'react-native-dimension'
import images from '../Images';
class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sampleValues: ["Feed1\nSecondLine\n", "Feed2", "Feed3", "Feed4", "Feed5"]
        };
    }

    static navigationOptions = {
        title: 'News Feed',
    }

    async componentDidMount() {
    }


    renderItem(item) {

        return (
            <View style={{ height: 200 }}>
                <Image style={styles.image} source={images.logo} />
                <Text style={styles.text}>{item}</Text>
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.sampleValues}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    }
}

export default MainComponent;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'contain'
    },
    text: {
        fontFamily: 'Courier New',
    },
    ImageBg: {
        flex: 1,
        height: null,
        width: null,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        //marginTop: height(30),
        height: totalSize(20),
        width: totalSize(17),
        //marginBottom: height(3),
    },
    txt: {
        marginTop: height(2.5),
        fontSize: totalSize(2),
        color: 'black'
        //color: 'rgb(219,0,0)'
    }
})