import React from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { useNavigation} from '@react-navigation/native';


const CardFactory = ({myresult}) => {
    const navigation = useNavigation();
    return (<Card>
            <CardImage
                source= {{uri: myresult.picture}}
                title ={myresult.title}
            />
            <CardTitle
                subtitle={myresult.subtitle}
            />
            <CardAction
                separator={true}
                inColumn={false}>
                <CardButton
                    onPress={() => {}}
                    title="Share"
                    color="#00bfff"
                />
                <CardButton
                    onPress={() => {navigation.navigate('Project Detail', { screen: 'Project_Detail' , params: {
                        myresult }})}}
                    title="Detail"
                    color="#00bfff"
                />
            </CardAction>
        </Card>
    )

};

export default CardFactory;

