import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import of pages
import { Home } from './pages/Home';
import { Passwords } from './pages/passwords';
import {Ionicons} from "@expo/vector-icons"
const Tab = createBottomTabNavigator();
export function Routes(){
    return(
         <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}
            options={{headerShown:false,
             tabBarIcon: ({focused, color, size}) =>{
               if(focused){
                return <Ionicons name="home"color={color} size={size}/>
               }
                return <Ionicons name="home-outline" color={color} size={size}/>
             }
        }}
            />
            <Tab.Screen name="Passwords" component={Passwords}
             options={{headerShown:false, 
                tabBarIcon: ({focused, size, color}) =>{
                if(focused){
                    return <Ionicons name="lock-closed" size={size} color={color}/>
                }
                return <Ionicons name="lock-closed-outline" size={size} color={color}/>
                }
            }}
            />
         </Tab.Navigator>
    )
}