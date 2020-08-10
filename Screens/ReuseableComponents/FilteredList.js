import React from 'react';
import {StyleSheet,FlatList} from 'react-native';
import { Chip } from 'react-native-paper';
import Mycards from '../Components/cards';
import ProjectsApi from '../api/ProjectsApi';
const ListScreen = () => {

    const [fetchResponse,result,isLoading] = ProjectsApi();
    const dataSource = [
        "ALL",
        "HIPA",
        "EMR",
        "HL7 INTEGRATION",
        "M HEALTH",
        "SMART ON FHIR"
        ]
    return (<>
        <FlatList
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        data = {dataSource}
        keyExtractor={(item, index) => 'key'+index}
        renderItem ={({item}) => {
            return (
                    <Chip
                        key={item.name}
                        mode="outlined"
                        height={35}
                        textStyle={{ color:'white',fontSize: 15 }}
                        style={{ backgroundColor:'#1e90ff',marginHorizontal:5, marginVertical:10 }}
                        onPress={() =>{
                            fetchResponse({item})
                        }}>
                        {item}
                    </Chip>
            );
        }}
        />
        <Mycards result= {result} isLoading= {isLoading}/>
        </>
    )
}






export default ListScreen;
