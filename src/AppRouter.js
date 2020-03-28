import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen, ComponentScreen} from "./screens";

const Stack = createStackNavigator();

function AppRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="ComponentScreen" component={ComponentScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRouter;