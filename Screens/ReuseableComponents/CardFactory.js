import React from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { useNavigation } from '@react-navigation/native';


const CardFactory = ({myresult}) => {
    const navigation = useNavigation();
    return (<Card>
            <CardImage
                source= {{uri: myresult.picture}}
                title={myresult.title}
            />
            <CardTitle
                subtitle={myresult.subtitle}
            />
            <CardContent text="Description" />
            <CardAction
                separator={true}
                inColumn={false}>
                <CardButton
                    onPress={() => {}}
                    title="Share"
                    color="#FEB557"
                />
                <CardButton
                    onPress={() => {navigation.navigate('Project Detail', { screen: 'Project Detail' },
                        {pic:myresult.picture, tit:myresult.title})}}
                    title="Explore"
                    color="#FEB557"
                />
            </CardAction>
        </Card>
    )

};

export default CardFactory;

