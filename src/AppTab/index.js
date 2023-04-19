import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';

import { Home } from '../../components/Home';
import { Adicionar } from '../../components/Adicionar';

const {Navigator, Screen} = createBottomTabNavigator();


export default function AppTab() {
  return (
    <NavigationContainer>
        <Navigator>
            <Screen 
                name='='
                component={Adicionar} 
                options={{
                    tabBarLabel: "Adicionar"
                }}
            />
            <Screen 
                name='a'
                component={Home} 
                options={{
                    tabBarLabel: "Hom"
                }}
            />
        </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});