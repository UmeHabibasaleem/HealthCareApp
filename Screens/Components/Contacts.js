import React,{useState} from 'react';
import {Text, View,ScrollView,StyleSheet,Image,Button,
    TouchableOpacity ,TextInput,KeyboardAvoidingView} from 'react-native';
import Submit from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo';


const ContactScreen = () => {

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
    const [value, onChangeText] = React.useState('');

    return (
        <ScrollView style = {{backgroundColor:'#dcdcdc'}}>
        <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',}}
                              behavior="height"   enabled keyboardVerticalOffset={100}>

        <View style = {{flex:1,backgroundColor:'#dcdcdc'}} >
            <Image source={require('../assets/Images/contact.jpg')} style={styles.imageStyle}/>

                <View style = {styles.formViewStyle}>
                <ScrollView style = {{flexGrow: 1}}>
                <Text style = {styles.lableStyle}>Name:</Text>
                <TextInput style = {styles.inputs}
                           autoCapitalize = "none"
                           autoCorrect = {false}
                           onChangeText={text => setName(text)}
                           value={name}
                />
                <Text style = {styles.lableStyle}>Email:</Text>
                <TextInput style = {styles.inputs}
                           autoCapitalize = "none"
                           autoCorrect = {false}
                           onChangeText={text => setEmail(text)}
                           value={email}
                />
                <Text style = {styles.lableStyle}>Message:</Text>
                <TextInput style = {styles.inputs}
                           autoCapitalize = "none"
                           autoCorrect = {false}
                           multiline={true}
                           onChangeText={text => setMessage(text)}
                           value={message}
                />
                <TouchableOpacity onPress={() =>{ }}>
                <Submit name = "md-arrow-redo-circle"   size={50} style = {styles.submitStyle}/>
                </TouchableOpacity>
                </ScrollView>
                </View>
            <Text style = {{marginLeft: 150, fontSize: 15,marginTop: 10}}>Follow us on:</Text>
            <View style={{flexDirection: 'row',marginTop: 10,marginHorizontal: 50, backgroundColor:'#dcdcdc',flex:1 }}>

            <Icon name = "facebook-with-circle"   size={50} style = {styles.iconsStyle}/>
            <Icon name = "twitter-with-circle"   size={50} style = {styles.iconsStyle}/>
            <Icon name = "linkedin-with-circle"   size={50} style = {styles.iconsStyle}/>
            </View>
        </View>
        </KeyboardAvoidingView>
         </ScrollView>
    )

};

const styles = StyleSheet.create({

    textStyle:
        {
            fontSize: 30,
            fontWeight : 'bold',
            color : 'blue',
        },
    viewStyle:{
        backgroundColor: 'white'
    },
    imageStyle:{

        position: 'absolute',
        width: '100%',
        opacity: 1

    },
    formViewStyle:{
      //  flex:1,
        backgroundColor: 'white',
        width: 310,
      //  height: 300,
        marginLeft : 50,
        marginTop: 140,
    },
    inputs:{
        marginHorizontal : 20,
        borderBottomColor : 'grey',
        borderBottomWidth : 1,

    },
    lableStyle:{
        marginTop: 10,
        marginLeft: 20,
        color : '#00bfff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    submitStyle:{
        marginTop:10,
        marginLeft: 130,
        color: '#00bfff'
    },
    iconsStyle:{

        marginLeft: 40,
        color: '#00bfff'
    }
});

export default ContactScreen;
