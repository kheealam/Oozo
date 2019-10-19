import React, { Component } from 'react';
import { View, SafeAreaView, FlatList, Text, Image, StyleSheet } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { totalSize, height } from 'react-native-dimension'
import images from '../Images';
class MainComponent extends Component {
    constructor(props) {
        super(props);
        console.log("CONSTRUCTOR");
        this.state = {
            newsfeed: [{ id: 1, headline: "test", content: "Sample content", timeAgo: "5 minutes ago", category: "Politienieuws", image: images.logo },
            { id: 2, headline: "test", content: "Sample content", timeAgo: "5 minutes ago", category: "Politienieuws", image: images.logo },
            { id: 3, headline: "test", content: "Sample content", timeAgo: "5 minutes ago", category: "Politienieuws", image: images.logo }]
        };
    }

    static navigationOptions = {
        title: 'News Feed',
    }

    async componentDidMount() {
    }

    renderItem({ item }) {
        console.log(item);
        return (
            <View style={styles.container_column}>
                <View style={styles.container_row}>
                    <Image style={styles.image} source={item.image}></Image>
                    <View style={styles.subcontainer_column}>
                        <Text style={styles.text}>{item.headline}</Text>
                        <View style={styles.category}>
                            <EvilIcons name="clock" size={totalSize(2)} color='rgb(100,100,100)' />
                            <Text style={styles.text}>{item.category}</Text>
                        </View>
                        <View style={styles.category}>
                            <FontAwesome name="tag" size={totalSize(2)} color='rgb(100,100,100)' />
                            <Text style={styles.text}>{item.timeAgo}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.content}>{item.content}</Text>
            </View>
        );
    }

    render() {
        console.log("RENDER");
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.newsfeed}
                    renderItem={this.renderItem}
                />
            </SafeAreaView>
        );
    }
}

export default MainComponent;

const styles = StyleSheet.create({
    container_row: {
        flexDirection: 'row',
        width: null,
    },
    container_column: {
        flex: 1,
        flexDirection: 'column',
        width: null,
    },
    subcontainer_column:{
        flex: 1,
        flexDirection: 'column',
        width: null,
    },
    category: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    content: {
        flex: 2,
        marginLeft:5
    },
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
    }
})