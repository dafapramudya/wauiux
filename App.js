import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator, NavigationActions, StackActions } from 'react-navigation';
import { Button, Text, Icon, View } from 'native-base';

import GetStarted from './app/GetStarted';
import ConfigureProfile from './app/ConfigureProfile';
import Chats from './app/Chats';
import Status from './app/Status';
import Calls from './app/Calls'
import Camera from './app/Camera';
import Chating from "./app/Chating";
import Settings from './app/Settings';
import PopOver from './app/PopOver';

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
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#128c7e'
    },
    showIcon: true,
  }
})

const App = StackNavigator({
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
    navigationOptions:{
      title: "Whatsapp",
      headerStyle: {
        backgroundColor: '#128c7e',
      },
      headerTitleStyle: {
        color: "#FFFFFF",
      },
      headerRight: (
        <View style={{flex: 1, flexDirection: "row"}}>
          <TouchableOpacity>
            <Icon
              name="search"
              style={{marginRight: 30, color: "#FFFFFF"}}
              onPress={()=> alert("Coming Soon!")}
            />
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Icon
              name="more"
              style={{marginRight: 30, color: "#FFFFFF"}}
              onPress={()=> this.props.navigation.navigate("Settings")}
            />
          </TouchableOpacity>
        </View>
      ),
    },
  },

  Chating:{
    screen: Chating,
    navigationOptions:{
      header: null
    }
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
    }
  }
}, 
{
  initialRouteName: 'GetStarted'
})

export default App;