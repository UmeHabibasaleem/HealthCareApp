import  React,{useEffect,useState} from 'react';
import { View,ActivityIndicator, StyleSheet,FlatList } from 'react-native';
import CardFactory from '../ReuseableComponents/CardFactory';

const Mycards = ({result,isLoading}) => {

    if(isLoading)
    {
        return <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00"/>
        </View>

    }
     else{
         return <FlatList
        data={result}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (

            <CardFactory myresult={item}/>
        )}
        numColumns={2}
         />
     }



}

const styles = StyleSheet.create({

    container: {
            flex:1,
        flexDirection: 'column',
        justifyContent: "flex-start",
    },
})
export default Mycards;
