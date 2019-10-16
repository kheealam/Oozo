import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import { totalSize, width, height } from 'react-native-dimension'
class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        header: null
    }
    
    async componentDidMount() {
    }




    render() {
        return (
<View style={styles.body}><Text>HelloWorld</Text>

</View>
        );
    }
}

export default Splash;

const styles = StyleSheet.create({
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