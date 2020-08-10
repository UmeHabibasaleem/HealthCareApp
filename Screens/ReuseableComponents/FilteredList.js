import React ,{useState} from 'react';
import {StyleSheet,FlatList} from 'react-native';
import { Chip } from 'react-native-paper';
import Mycards from '../Components/cards';
import ProjectsApi from '../api/ProjectsApi';
import SelectableChips from 'react-native-chip/SelectableChips'


const ListScreen = () => {

    const [fetchResponse,result,isLoading] = ProjectsApi();
    const [Selected, setSelected] = useState(false);
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
                        selected = {false}
                        selectedColor = "red"
                        height={35}
                        textStyle={{ color:'white',fontSize: 15 }}
                        style={{ backgroundColor :'#808080',marginHorizontal:5, marginVertical:10 }}
                        onPress={() =>{
                            setSelected(true)
                            fetchResponse({item})
                        }}
                        >
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
