import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';

const ProgressFactScreen = ({title, percentage, color}) => {
    return (
                    <View style = {styles.progressStyle}>
                    <Text style = {styles.barHeadingStyle}>{title}</Text>
                    <ProgressBar
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={percentage}
                        color = {color}
                    />
                    </View>


)
};

const styles = StyleSheet.create({
    progressStyle:{
        marginHorizontal: 15,
        backgroundColor:'#dcdcdc'
    },
    barHeadingStyle:{
        marginTop: 10,
        fontSize :15
    }
});

export default ProgressFactScreen;
