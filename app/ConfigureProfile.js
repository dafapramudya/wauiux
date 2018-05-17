import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Form, Label, Container, Content, Picker, Input, Button, Item } from 'native-base';
import { StackNavigator, TabNavigator, NavigationActions, StackActions } from 'react-navigation';

export default class ConfigureProfile extends Component{

    state = {
        phone: "",
        name: "",
    }

    componentDidMount(){
        this.setState({
            phone: this.props.navigation.state.params.number
        })
    }

    navigateToMain(){

        const ResetNav = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ 
                routeName: 'Main',
                params: {phone: this.state.phone, name: this.state.name}
            })],
        });

        this.props.navigation.dispatch(ResetNav);
    }

    render(){
        return(
            <Container style={{flex: 1, marginTop: 20}}>
                <Content>
                    <Image
                      style={styles.avatar}
                      source={require("../assets/img/avatar.png")}
                    />
                    <Item regular style={{alignSelf: "center", marginTop: 50}}>
                        <Input placeholder="Input your name" onChangeText={text => this.setState({ 
                            name: text
                         })}/>
                    </Item>

                    <Button full style={styles.buttonStyle} onPress={()=> this.navigateToMain()}>
                        <Text style={styles.buttonTextStyle}>Confirm</Text>
                    </Button>                        
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },

    buttonStyle:{
        backgroundColor: "#25D366"
    },
    
    buttonTextStyle: {
        textAlign: "center",
        color: "#FFFFFF"
    }
})