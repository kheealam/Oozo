import React, { Component } from 'react';
import { View, SafeAreaView, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { totalSize, height } from 'react-native-dimension'
import images from '../Images';
class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsfeed: [
                {
                    id: 1,
                    headline: "Vrouwelijke winkeldief aangehouden na bedreiging",
                    content: "Roosendaal - Een winkeldievegge heeft vrijdag 18 oktober 2019 kort na het middaguur op straat personeelsleden van een winkel aan de Rucphensebaan (vermoedelijk) bedreigd met een mes, nadat ze betrapt was op winkeldiefstal. Ze is korte tijd later aangehouden door de politie.",
                    timeAgo: "45 minuten geleden",
                    category: "Politienieuws",
                    image: images.feed1
                },
                {
                    id: 2,
                    headline: "Man aangehouden op verdenking van zware mishandeling en bedreiging",
                    content: "Roosendaal - Politiemensen hebben zaterdag 19 oktober 2019 rond het middaguur een 36-jarige man uit Roosendaal aangehouden op verdenking van zware mishandeling. De man wordt er van verdacht in de nacht van vrijdag 18 op zaterdag 19 oktober 2019 tussen 02.45 uur en 03.10 uur in een café aan de Bredaseweg een 47-jarige man en een 25-jarige vrouw uit Roosendaal te hebben bedreigd en mishandeld. Beiden deden hiervan aangifte.",
                    timeAgo: "38 minuten geleden",
                    category: "Politienieuws",
                    image: images.feed2
                },
                { id: 3, 
                    headline: "Insluiper besluit eerst te gaan slapen", 
                    content: "Tilburg - Een insluiper is zaterdagochtend wel heel gemakkelijk opgepakt. Hij lag nog te slapen in het atelier waar hij was binnen geslopen.", 
                    timeAgo: "1 uur en 31 minuten geleden", 
                    category: "Politienieuws", 
                    image: images.feed3 }]
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
            <TouchableOpacity style={styles.itemContainer}>
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
            </TouchableOpacity>
        );
    }

    render() {
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
        flex: 2,
        marginLeft: 5
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