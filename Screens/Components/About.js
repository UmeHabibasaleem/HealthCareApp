import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const AboutScreen = () => {
    return <View style = {styles.ViewStyle}>

        <Text style = {styles.textStyle}> About </Text>
    </View>
};

const styles = StyleSheet.create({
    ViewStyle:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textStyle:
        {
            fontSize: 50,
            fontWeight : 'bold'
        }
});

export default AboutScreen;
