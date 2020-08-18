import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from './About';
import ContactScreen from './Contacts';
import ListScreen from '../ReuseableComponents/FilteredList';
import Icon from 'react-native-vector-icons/FontAwesome';
import AboutIcon from 'react-native-vector-icons/AntDesign';
import ProjectIcon from 'react-native-vector-icons/Octicons'
import ProjectDetail from '../ReuseableComponents/ProjectDetail';
import CardFactory from '../ReuseableComponents/CardFactory';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Project_Detail"} component={ProjectDetail}></Stack.Screen>
            <Stack.Screen name={"ProjectsProducer"} component={CardFactory}></Stack.Screen>
        </Stack.Navigator>
    )
}



function MyTabBar() {
    return (
        <Tab.Navigator  tabBarOptions={{
            activeTintColor: '#00bfff',
            inactiveTintColor: 'black'

        }}>
            <Tab.Screen name="Projects" component={ListScreen } options={{
               tabBarLabel: ({ focused }) => (
                   <Text style={{textAlign: 'center', fontSize: 15, color: focused ? '#00bfff' : '#000'}}> Projects </Text>
               ),
                tabBarIcon: ({ color, focused }) => (
                    <ProjectIcon name="project" size={20} focused={focused}
                                 color={color}/>
                )
            }} />
            <Tab.Screen name="About" component={AboutScreen }options={{
                tabBarLabel: ({ focused }) => (
                    <Text style={{textAlign: 'center', fontSize: 15, color: focused ? '#00bfff' : '#000'}}> About </Text>
                ),
                tabBarIcon: ({ color, focused }) => (
                    <AboutIcon name="team" size={20} focused={focused}
                               color={color}/>
                )
            }} />

            <Tab.Screen name="Contact" component={ContactScreen} options={{

                tabBarLabel: ({ focused }) => (
                    <Text style={{textAlign: 'center', fontSize: 15, color: focused ? '#00bfff' : '#000'}}> Contact </Text>
                ),
                tabBarIcon: ({ color, focused }) => (
                    <Icon name="phone" size={20} focused={focused}
                          color={color}/>)
            }} />


        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({

});
export default function TabApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{ headerStyle: { backgroundColor: '#00bfff'} ,headerTitleStyle: { alignSelf: 'center' }}}>
                <Stack.Screen name="TECHNOSOFT" component={MyTabBar} />
                <Stack.Screen name="Project Detail" component={MyStack}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}
