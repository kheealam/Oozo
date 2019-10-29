import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { totalSize, height } from 'react-native-dimension'
import { Container, Button, Content, Card, CardItem, Text, Left, Body, Right, ListItem, Radio } from 'native-base';
import images from '../Images';
import colors from '../Themes/Colors';
class DetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {
                headline: "Man aangehouden op verdenking van zware mishandeling en bedreiging",
                timeAgo: "1 minuut geleden",
                location: "Bredaseweg Roosendaal",
                source: "Bron Politie.nl",
                alert: "Mishandeling",
                summary: "Roosendaal - Politiemensen hebben zaterdag 19 oktober 2019 rond het middaguur een 36-jarige man uit Roosendaal aangehouden op verdenking van zware mishandeling. De man wordt er van verdacht in de nacht van vrijdag 18 op zaterdag 19 oktober 2019 tussen 02.45 uur en 03.10 uur in een café aan de Bredaseweg een 47-jarige man en een 25-jarige vrouw uit Roosendaal te hebben bedreigd en mishandeld. Beiden deden hiervan aangifte.",
                article: "De verdachte zou het café rond sluitingstijd niet hebben willen verlaten en zijn rekening nog niet hebben betaald, waarop een 25-jarige horecamedewerkster de hulp in riep van een 47-jarige kennis. De verdachte zou agressief hebben gereageerd op de komst van de 47-jarige man en zou hem en de horecamedewerkster vervolgens met de dood hebben bedreigd. Toen hij merkte dat hij het café niet uit kon, zou hij met een scherp voorwerp (mogelijk een stuk gereedschap) stekende bewegingen richting zijn slachtoffers hebben gemaakt. De 47-jarige man raakte hierbij gewond. De verdachte wist het café te verlaten en wilde in een auto stappen. Op dat moment arriveerde de politie, waarop de verdachte er te voet vandoor ging. Omdat hij de auto en enkele persoonlijke spullen achterliet, kon de politie achterhalen om wie het ging. De verdachte is aangehouden en voor nader onderzoek en verhoor in de cel gezet."
            }
        };
    }

    static navigationOptions = {
        title: 'Roosendaal',
        headerTintColor: "#7ea512",
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,

        },
        headerStyle: {
            backgroundColor: colors.O_blueColor,
        },
    }

    async componentDidMount() {
    }

    render() {
        return (
            <Container>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Body>
                                <Text>{this.state.detail.headline}</Text>
                            </Body>
                        </CardItem>

                        <CardItem>
                            <Left><FontAwesome name='clock-o' size={totalSize(3)} /><Text note>{this.state.detail.timeAgo}</Text></Left>
                        </CardItem>
                        <CardItem>
                            <Left><FontAwesome name='newspaper-o' size={totalSize(3)} /><Text note>{this.state.detail.source}</Text></Left>
                        </CardItem>
                        <CardItem>
                            <Left><FontAwesome name='map-marker' size={totalSize(3)} /><Text note>{this.state.detail.location}</Text></Left>
                        </CardItem>
                        <CardItem>
                            <Left><FontAwesome name='bell' size={totalSize(3)} /><Text note>{this.state.detail.alert}</Text></Left>
                        </CardItem>
                        <CardItem>
                            <Image source={images.feed2} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>{this.state.detail.summary}</Text>
                                <Text>{this.state.detail.article}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default DetailsComponent;

const styles = StyleSheet.create({
    container_row: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        flexDirection: 'row',
    },
    article: {
        fontFamily: 'Courier New',
        fontSize: 16,
    },
    summary: {
        fontFamily: 'Courier New',
        fontWeight: 'bold',
        fontSize: 16,
    },

    icon: {
        flex: 1,
    },
    container_column: {
        flex: 1,
        margin: 5,
        flexDirection: 'column',
    },
    subcontainer_column: {

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
        flex: 2,
        fontFamily: 'Courier New',
        fontWeight: 'bold',
        fontSize: 20
    },

    greytext: {
        flex: 10,
        fontWeight: 'bold',
        fontFamily: 'Courier New',
        fontSize: 16,
    },
})