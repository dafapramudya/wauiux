import React from 'react';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import GetStarted from '../Screens/GetStarted';
import ConfigureProfile from '../Screens/ConfigureProfile';
import Chats from '../Screens/Chats/Chats';
import Status from '../Screens/Status';
import Calls from '../Screens/Calls'
import Camera from '../Screens/Camera';
import Chating from "../Screens/Chats/Chating";
import Settings from '../Screens/Settings/Settings';
import Contacts from '../Screens/Contacts/Contacts';

const Main = TabNavigator({
    Chats: {
        screen: Chats,
        navigationOptions:{
          title: "CHAT",
        },
    },
    
    Status: {
        screen: Status,
        navigationOptions:{
          title: "STATUS",
        },
      },
    
    Calls:{
        screen: Calls,
        navigationOptions: {
          title: "CALLS",
        },
    },
},
{
    tabBarOptions: {
      style: {
        backgroundColor: '#128c7e'
      },
      showIcon: true,
    }
})

const RootNavigator = StackNavigator({
    GetStarted: {
        screen: GetStarted,
        navigationOptions:{
          header: null
        }
    },
    
    Configure:{
        screen: ConfigureProfile,
        navigationOptions:{
          header: null
        }
    },
    
    Main:{
        screen: Main,
        navigationOptions: ({navigation}) => ({
          title: "Whatsapp",
          headerStyle: {
            backgroundColor: '#128c7e',
          },
          headerTitleStyle: {
            color: "#FFFFFF",
          },
          headerRight: (
            <View style={{flex: 1, flexDirection: "row"}}>
              <TouchableOpacity onPress={()=> alert("Coming Soon!")}>
                <Icon
                  name="search"
                  style={{marginRight: 30, color: "#FFFFFF"}}
                />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=> navigation.navigate("Settings")}>
                <Icon
                  name="more"
                  style={{marginRight: 30, color: "#FFFFFF"}}
                />
              </TouchableOpacity>
            </View>
          ),
        }),
    },
    
    Chating:{
        screen: Chating,
        navigationOptions:{
          header: null
        }
    },

    Contacts:{
      screen: Contacts,
      navigationOptions: ({navigation}) => ({
        title: "Select Contact",
        headerStyle: {
          backgroundColor: '#128c7e',
        },
        headerTitleStyle: {
          color: "#FFFFFF",
        },
        headerRight: (
          <View style={{flex: 1, flexDirection: "row"}}>
            <TouchableOpacity onPress={()=> alert("Coming Soon!")}>
              <Icon
                name="search"
                style={{marginRight: 30, color: "#FFFFFF"}}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> alert("Coming Soon!")}>
              <Icon
                name="person-add"
                style={{marginRight: 30, color: "#FFFFFF"}}
              />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=> navigation.navigate("Settings")}>
              <Icon
                name="more"
                style={{marginRight: 30, color: "#FFFFFF"}}
              />
            </TouchableOpacity>
          </View>
        ),
        headerTintColor: 'white',
      })
    },
    
    Settings:{
        screen: Settings,
        navigationOptions:{
          title: "Settings",
          headerStyle: {
            backgroundColor: '#128c7e',
          },
          headerTitleStyle: {
            color: "#FFFFFF",
          },
          headerTintColor: 'white',
        }
    }
})

export default RootNavigator;