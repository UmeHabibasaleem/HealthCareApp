import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Image,FlatList,Dimensions,TouchableOpacity} from 'react-native';



const ClientScreen = () => {
    let CurrentSlide = 0;
    let IntervalTime = 1000;
    let _timerId = 0;
    let flatList = React.createRef();

   const dataSource = [
        {src: require('../assets/Images/amani.png'), width: 167, height: 57},
        {src: require('../assets/Images/Goally.png'),width: 82, height: 57},
        {src: require('../assets/Images/DentistryOnPurpose.png'),width: 196, height: 57},
        {src: require('../assets/Images/healthslate.png') ,width: 167, height: 57},
        {src: require('../assets/Images/meridia-logo.png'),width: 167, height: 57},
        {src: require('../assets/Images/emerus.png'),width: 167, height: 57},

        ]
    const _goToNextPage = () => {
        if (CurrentSlide >= dataSource.length-1)
        {CurrentSlide = 0}
       // console.log(CurrentSlide);
        if(flatList)
        {flatList.current.scrollToIndex({
            index: ++CurrentSlide,
            animated: true,
        });}

    };

   const  _startAutoPlay = () => {
        _timerId = setInterval(_goToNextPage, IntervalTime);
    };

   const  _stopAutoPlay = () => {
        if (_timerId) {
            clearInterval(_timerId);
            _timerId = 0;
        }
    };

   useEffect(()=> {
       _stopAutoPlay()
       _startAutoPlay()
       return ()=> _stopAutoPlay()
   },[]
   )

        return <View style = {styles.viewStyle}>
            <Text style = {styles.factStyle}>Our Clients!</Text>
            <FlatList
                horizontal = {true}
                showsHorizontalScrollIndicator={false}
                data={dataSource}
                renderItem={({ item }) => (
                    <View style={{ marginHorizontal: 15, marginVertical: 20}}>

                        <Image style={{width:item.width, height: item.height}} source={item.src}  />

                    </View>
                )}
                flatListRef={React.createRef()}
                ref= {flatList}
                keyExtractor={(item, index) => index.toString()}

            />

   </View>


};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor:'white',


    },

    factStyle:{
        fontSize: 25,
        fontWeight : 'bold',
        marginTop: 10,
        marginHorizontal: 15,
    },
    imageThumbnail: {

        height: 60,
        width: 167,


    },
    sliderItems: {
        marginLeft: 5,
        marginRight: 5,
        height: 200,
        width: Dimensions.get('window').width,
    }

});

export default ClientScreen;
