import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

export default class PopOver extends Component{

    gotone(){
        this.props.navigation.navigate("Settings")
    }

    render(){
        return(
            <View>
                <TouchableOpacity>
                    <Icon name="more" style={{marginRight: 20, color: "#FFFFFF"}} onPress={()=> this.gotone()}/>
                </TouchableOpacity>
            </View>
        )
    }
}