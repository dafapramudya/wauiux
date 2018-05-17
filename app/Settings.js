import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Icon, Fab, Container, Content, Left, Body, List, ListItem, Header } from 'native-base';

export default class Settings extends Component{
    render(){
        return(
            <Container style={{flex: 1, marginTop: 20}} androidStatusBarColor="#075e54">
                <Content>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Image
                                    style={styles.avatar}
                                    source={require("../assets/img/avatar.png")}
                                />
                            </Left>
                            <Body>
                                <Text style={{fontWeight:"bold", fontSize: 18}}>Dafa Pramudya</Text>
                                <Text style={{fontSize: 13}}>Learn from the error</Text>
                            </Body>
                        </ListItem>

                        <ListItem icon>
                            <Left>
                                <Icon name="key" style={styles.iconColor}/>
                            </Left>
                            <Body>
                                <Text>Account</Text>
                            </Body>
                        </ListItem>

                        <ListItem icon>
                            <Left>
                                <Icon name="message" type="Entypo" style={styles.iconColor}/>
                            </Left>
                            <Body>
                                <Text>Chats</Text>
                            </Body>
                        </ListItem>

                        <ListItem icon>
                            <Left>
                                <Icon name="ios-notifications" style={styles.iconColor}/>
                            </Left>
                            <Body>
                                <Text>Notification</Text>
                            </Body>
                        </ListItem>

                        <ListItem icon>
                            <Left>
                                <Icon name="data-usage" type="MaterialIcons" style={styles.iconColor}/>
                            </Left>
                            <Body>
                                <Text>Data and storage usage</Text>
                            </Body>
                        </ListItem>

                        <ListItem icon>
                            <Left>
                                <Icon name="people" style={styles.iconColor}/>
                            </Left>
                            <Body>
                                <Text>Invite a friend</Text>
                            </Body>
                        </ListItem>

                        <ListItem icon>
                            <Left>
                                <Icon name="help-circle" style={styles.iconColor}/>
                            </Left>
                            <Body>
                                <Text>Help</Text>
                            </Body>
                        </ListItem>
                    </List>
                    
                    
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    avatar: {
        borderRadius: 75,
        width: 50,
        height: 50,
        alignSelf: "flex-start"
    },

    iconColor:{
        color:"#128c7e"
    }
})