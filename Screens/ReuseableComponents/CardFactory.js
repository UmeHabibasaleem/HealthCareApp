import React from 'react';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

const CardFactory = ({myresult}) => {

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
                    onPress={() => {}}
                    title="Explore"
                    color="#FEB557"
                />
            </CardAction>
        </Card>
    )

};

export default CardFactory;

