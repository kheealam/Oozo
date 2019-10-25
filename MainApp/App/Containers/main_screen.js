import React, { Component } from 'react';
import { theme, withGalio, GalioProvider } from 'galio-framework'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
// import { Card } from 'galio-framework';
import { View, SafeAreaView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { totalSize, height } from 'react-native-dimension'
import colors from '../Themes/Colors';
import images from '../Images';
class MainComponent extends Component {
    constructor(props) {
        super(props);
        this._handlePress = this._handlePress.bind(this);
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
                {
                    id: 3,
                    headline: "Insluiper besluit eerst te gaan slapen",
                    content: "Tilburg - Een insluiper is zaterdagochtend wel heel gemakkelijk opgepakt. Hij lag nog te slapen in het atelier waar hij was binnen geslopen.",
                    timeAgo: "1 uur en 31 minuten geleden",
                    category: "Politienieuws",
                    image: images.feed3
                }]
        };
        this.renderItem = this.renderItem.bind(this);
    }

    static navigationOptions = {
        title: 'News Feed',
        headerStyle: {
            backgroundColor: colors.O_blueColor,
          },
    }

    async componentDidMount() {
    }
    _handlePress() {
        // alert('test');
        // console.log("TEST");
        const { navigate } = this.props.navigation;
        navigate('details', {})
    }
    renderItem({ item }) {
        return (
            <TouchableOpacity onPress={this._handlePress}>
                <Card>
                    <CardItem>
                        <Left>
                            <Body>
                                <Text>{item.headline}</Text>
                                <Text note>{item.content}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={item.image} style={{ height: 200, width: null, flex: 1 }} />
                    </CardItem>
                    <CardItem>
                            <Left><FontAwesome name='tag' size={totalSize(3)} /><Text note>{item.category}</Text></Left>
                            <Left><FontAwesome name='clock-o' size={totalSize(3)} /><Text note>{item.timeAgo}</Text></Left>
                    </CardItem>
                </Card>
                {/* <Card
                    flex
                    borderless
                    style={styles.card}
                    title={item.headline}
                    caption={item.content}
                    imageStyle={styles.cardImageRadius}
                    imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
                    image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
                /> */}
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <Container>
                <Content padder>
                    {/* <SideMenu menu={menu}>
                    <ContentView />
                </SideMenu> */}
                    <FlatList
                        data={this.state.newsfeed}
                        renderItem={this.renderItem}
                    />
                </Content>
            </Container>
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