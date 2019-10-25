import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Image } from 'react-native';
import { totalSize, height } from 'react-native-dimension'
import images from '../Themes/Images'
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
        setTimeout(() => { this.props.navigation.navigate('login') }, 5000);
    }




    render() {
        return (
            <ImageBackground style={styles.ImageBg}>
                <Image source={images.logo} style={styles.logo} />
            </ImageBackground>
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
        resizeMode:'center'
        //marginBottom: height(3),
    },
    txt: {
        marginTop: height(2.5),
        fontSize: totalSize(2),
        color: 'black'
        //color: 'rgb(219,0,0)'
    }
})