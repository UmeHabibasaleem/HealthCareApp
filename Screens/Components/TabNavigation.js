import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from './About';
import ContactScreen from './Contacts';
import ListScreen from '../ReuseableComponents/FilteredList';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabBar() {
    return (
        <Tab.Navigator >
            <Tab.Screen name="Projects" component={ListScreen } options={{
               tabBarLabel: () => (
                   <Text style={styles.tabBarLabelStyle}> Projects </Text>
               ),
            }} />
            <Tab.Screen name="About" component={AboutScreen }options={{
                tabBarLabel: () => (
                    <Text style={styles.tabBarLabelStyle}> About </Text>
                ),
            }} />

            <Tab.Screen name="Contact" component={ContactScreen} options={{
                tabBarLabel: () => (
                    <Text style={styles.tabBarLabelStyle}> Contact </Text>
                ),
            }} />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    tabBarLabelStyle:{
        fontSize: 15 ,
        marginBottom:5,
        color: 'black',
        fontWeight: 'bold'
    }



});
export default function TabApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{ headerStyle: { backgroundColor: '#dcdcdc'} ,headerTitleStyle: { alignSelf: 'center' }}}>
                <Stack.Screen name="TECHNOSOFT" component={MyTabBar} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
