import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './pages/Home.js';
import Detalhes from './pages/Detalhes.js';
import Perfil from './pages/Perfil.js';


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detalhes" component={Detalhes} />
                <Stack.Screen name="Perfil" component={Perfil}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
