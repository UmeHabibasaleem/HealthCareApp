import React ,{useState} from 'react';
import {StyleSheet,ScrollView} from 'react-native';
import { Chip} from 'react-native-paper';
import Mycards from '../Components/cards';
import ProjectsApi from '../api/ProjectsApi';

const ListScreen = () => {

    const [fetchResponse,result,isLoading] = ProjectsApi();
    const [selectedValue, setSelectedValue] = useState("ALL");

    const Categories = [
        {
            key: '1',
            text: 'ALL',
        },
        {
            key: '2',
            text: 'HIPA',
        },
        {
            key: '3',
            text: 'EMR',
        },
        {
            key: '4',
            text: 'HL7 INTEGRATION',
        },
        {
            key: '5',
            text: 'M HEALTH',
        },
        {
            key: '6',
            text: 'SMART ON FHIR',
        },

    ];
    const callTwoFuctions =(itemtext)=>{
        setSelectedValue(itemtext),
            fetchResponse(itemtext)
    }

    return (<>
        <ScrollView style={{flexDirection: 'row'}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {Categories.map(item => {
                    return (
                        <Chip
                            key={item.key}
                            selected = {false}
                            height={35}
                            textStyle={{ color:'white',fontSize: 15 }}
                            style={[ selectedValue === item.text? styles.afterBackColor:styles.beforeBackColor ] }
                            onPress={() =>{
                                callTwoFuctions(item.text)
                            }}
                        >
                            {item.text}
                        </Chip>
                    );
                }
            )
            }
        </ScrollView>

            <Mycards result= {result} isLoading= {isLoading}/>
        </>
    )
}

const styles = StyleSheet.create({
    beforeBackColor: {
        backgroundColor: '#808080',
        margin: 5
    },
    afterBackColor: {
        backgroundColor: '#1e90ff',
        margin: 5
    },
});
export default ListScreen;
