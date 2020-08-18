import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import ProgressFactScreen from '../ReuseableComponents/ProgressFactsBar';
import ClientScreen from '../ReuseableComponents/Clients';
import {useNavigation} from '@react-navigation/native';



const AboutScreen = () => {
    const navigation = useNavigation();

    return<ScrollView   style={{flex:1}} >

        <View style={{ height: 150}}>
            <Image source = {require('../assets/Images/Aboutus.jpg')} style = {styles.imageStyle}/>
        </View>
        <View style = {{flex:1 ,backgroundColor:'white'}}>


        <Text style = {styles.textStyle}> Our story </Text>
        <Text style={ styles.storyStyle}>Technosoft Solutions Inc. is an outsourcing software development and integration services provider.
            We are mostly working for companies developing healthcare solutions for the U.S market. We have created many healthcare webs and mobile apps for hospitals, clinics,
            pharmacies, physicians, patients, and device manufacturers. For more than 17 years, our commitment to providing reliable healthcare software solutions has remained
            constant and stable.
            Our solutions are deployed at over 2000 hospitals across the USA. We have developed scheduling, reminders, progress-notes, evaluations, telemedicine, IoMT, orders
            , results, HL7 interfaces, SMART on FHIR apps, history and physical, etc.</Text>
            <View style = {{backgroundColor: '#dcdcdc', marginTop:30, paddingBottom:10}}>
            <Text style = {styles.factStyle}>Some quick facts!</Text>
            <ProgressFactScreen title = "Repeat Business   —   90%" percentage={0.9} color = 'red'/>
            <ProgressFactScreen title = "Customer given 5 star rating   —   100%" percentage={1} color = 'blue'/>
            <ProgressFactScreen title = "Healthcare projects per month   —   100%" percentage={1} color = 'green'/>
            <ProgressFactScreen title = "HIPAA Compliant Secure Solutions   —   100%" percentage={1} color = 'orange'/>
            </View>
            <ClientScreen style = {{marginTop:30}}/>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>{navigation.navigate('TECHNOSOFT', { screen: 'Contact'})}}
            >
                <Text>Contact Us</Text>
            </TouchableOpacity>


        </View>


    </ScrollView>
};

const styles = StyleSheet.create({
    textStyle: {
            fontSize: 25,
            fontWeight : 'bold',
            marginLeft: 8
        },
    imageStyle:{
        height:'100%',
        width:'100%'
    },
    storyStyle: {
        fontSize:16,
        marginHorizontal: 15,
        textAlign:'justify'
    },
    factStyle:{
        fontSize: 25,
        fontWeight : 'bold',
        marginTop: 10,
        marginHorizontal: 15,
        backgroundColor:'#dcdcdc'
    },
    progressStyle:{
        marginHorizontal: 30,
    },
    barHeadingStyle:{
        marginTop: 10,
        fontSize :18
    },
    button: {
        alignItems: "center",
        backgroundColor: "#00bfff",
        borderRadius:10,
        paddingVertical:20,
        marginVertical: 10,
        marginHorizontal: 80
    },
});

export default AboutScreen;
