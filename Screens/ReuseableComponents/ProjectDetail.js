import  React from 'react';
import { Text,View, StyleSheet,Image } from 'react-native';
import {useRoute } from '@react-navigation/native';


const ProjectDetail = () => {
    const route = useRoute();
    const Detail_result =  route.params.myresult;


    return (<View style = {styles.viewStyle}>
            <View style = {{flex: 1}}>
                <Image source = {{uri: Detail_result.picture}} style = {styles.imageStyle}/>
            </View>
           <View style = {{flex: 2}}>
               <Text style = {styles.titleStyle}>{Detail_result.title}</Text>
               <Text style = {styles.descriptionTextStyle}>{Detail_result.Description}</Text>
           </View>

            </View>
    )

};





const styles = StyleSheet.create({
         viewStyle: {
               flex:1,
               margin: 10
           },
         imageStyle:{

               height:164,
               width:340
           },
         titleStyle:{
               fontSize:25,
               fontWeight:'bold',
                margin: 5
           },
         descriptionTextStyle:{
               fontSize:15,
                margin: 5,
             textAlign:'justify'
         }


})
export default ProjectDetail;
