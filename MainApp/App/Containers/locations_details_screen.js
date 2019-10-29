import React, { Component } from 'react';
import { CheckBox, StyleSheet } from 'react-native';
import { Container, Button, Content, Card, Text, Left, Right, ListItem, Radio } from 'native-base';
import colors from '../Themes/Colors';
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
        title: 'Berlin, Germany',
        headerStyle: {
            backgroundColor: colors.O_blueColor,
        },
    }

    async componentDidMount() {
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }
    render() {
        const buttons = ['5km', '10km', '25km']
        const { selectedIndex } = this.state
        return (
            <Container>
                <Content>
                    <Card>
                        <ListItem>
                            <Left>
                                <Text>Stuur notificaties</Text>
                            </Left>
                            <Right>
                                <CheckBox checked={true} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Selecteer de straal</Text>
                            </Left>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>5 km</Text>
                            </Left>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>10 km</Text>
                            </Left>
                            <Right>
                                <Radio selected={true} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>25 km</Text>
                            </Left>
                            <Right>
                                <Radio selected={false} />
                            </Right>
                        </ListItem>
                        <Button full danger><Text>Verwijder deze locatie</Text></Button>
                    </Card>
                </Content>
            </Container>
            // <SafeAreaView style={styles.container}>
            //     <View>
            //         <View style={styles.container_row}>
            //             <Text p>Show push notifications</Text>
            //             <CheckBox
            //                 center
            //                 title='Show push notifications'
            //                 iconRight
            //                 iconType='material'
            //                 checkedIcon='clear'
            //                 uncheckedIcon='add'
            //                 checkedColor='red'
            //                 style={styles.checkbox}
            //                 checked={this.state.push_notifications}
            //             />
            //         </View>
            //         <View style={styles.container_row}>
            //             <Text p>Set Radius</Text>
            //             <ButtonGroup
            //                 onPress={this.updateIndex}
            //                 selectedIndex={selectedIndex}
            //                 buttons={buttons}
            //                 containerStyle={styles.radius}
            //             />
            //         </View>
            //         <Block style={styles.delete}>
            //         <Button round uppercase color="red">DELETE</Button>
            //         </Block>
            //     </View>
            // </SafeAreaView>
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
    radius: {
        flex: 5,
        height: 20,
    },
    text: {
        fontSize: 20,
        flex: 5
    },
    delete: {
        padding: 20,
        alignItems: 'center'

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