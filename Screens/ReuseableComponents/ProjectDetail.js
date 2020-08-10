import  React from 'react';
import { Text,View,ActivityIndicator, StyleSheet,FlatList } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { NavigationContainer } from '@react-navigation/native';

const ProjectDetail = ({route}) => {
    const pic  = route.pic;
    console.log(pic);
  //  const { params } = this.props.navigation.state;
   // const itemId = params ? params.pic : null;
   // console.log(itemId)
   // const otherParam = params ? params.tit : null;

    return (<Card>
            <CardImage
              //  source= {{uri: myresult.picture}}
                title= "hi detail"
            />
            <CardTitle
                subtitle= "Hi subtitle"
            />
            <CardContent text="Description" />


        </Card>
    )

};





const styles = StyleSheet.create({


})
export default ProjectDetail;
