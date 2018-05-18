import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Form, Label, Container, Content, Picker, Input, Button, Item } from 'native-base';
import { RkText, RkButton, RkTextInput } from 'react-native-ui-kitten';
import {connect} from 'react-redux';

class GetStarted extends Component {

    state = {
        selected1: "key1",
        countries: [
            {
                id: 1,
                name: "Indonesia"
            },

            {
                id: 2,
                name: "Japan"
            },

            {
                id: 3,
                name: "USA"
            },

            {
                id: 4,
                name: "Rusia"
            },

            {
                id: 5,
                name: "Saudi Arabia"
            },

            {
                id: 6,
                name: "Singapore"
            },

            {
                id: 7,
                name: "India"
            }
        ],

        phone: "",
    }

    onValueChange(value) {
        this.setState({
          selected1: value
        });
    }

    render(){
        return(
            <View style={{flex: 1, marginTop: "45%"}} androidStatusBarColor="#075e54">
                <Container>
                    <Content>
                        <View>
                            <RkText style={styles.text}>Please confirm your country and enter your phone number{"\n"}</RkText>
                            <Form>
                                <Item>
                                    <Picker
                                        iosHeader="Select one"
                                        androidHeader="Select one"
                                        mode="dropdown"
                                        selectedValue={this.state.selected1}
                                        onValueChange={this.onValueChange.bind(this)}
                                    >
                                        {this.state.countries.map((country) => (
                                            <Picker.Item label={country.name} value={country.id} key={country.id}/>
                                        ))}

                                    </Picker>
                                </Item>
                                <Item regular>
                                    <RkTextInput placeholder="Your Phone Number" keyboardType="numeric" onChangeText={text => this.setState({phone: text})}/>
                                </Item>
                                
                                <Button block style={styles.buttonStyle} onPress={()=> this.props.navigation.navigate("Configure", {number: this.state.phone})}>
                                    <Text style={styles.buttonText}>Next</Text>
                                </Button>
                            </Form>
                        </View>
                    </Content>
                </Container>
            </View>
        )
    }
}

export default connect()(GetStarted);

const styles = StyleSheet.create({
    text:{
        textAlign: "center"
    },

    buttonStyle:{
        backgroundColor: "#25D366"
    },

    buttonText:{
        color: "#FFFFFF"
    }
})