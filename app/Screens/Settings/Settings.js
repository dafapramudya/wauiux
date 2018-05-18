import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Icon, Fab, Container, Content, Left, Body, List, ListItem, Header } from 'native-base';
import {connect} from 'react-redux';

class Settings extends Component{
    render(){
        return(
            <Container style={{flex: 1, marginTop: 20}} androidStatusBarColor="#075e54">
                <Content>
                    <View>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <Image
                                        style={styles.avatar}
                                        source={require("../../assets/img/me.jpg")}
                                    />
                                </Left>
                                <Body>
                                    <Text style={{fontSize: 20}}>Dafa Pramudya</Text>
                                    <Text note>Learn from the error</Text>
                                </Body>
                            </ListItem>
                        </List>

                        <List>
                            <ListItem icon>
                                <Left>
                                    <Icon name="key" style={styles.iconColor}/>
                                </Left>
                                <Body>
                                    <Text style={styles.fontList}>Account</Text>
                                </Body>
                            </ListItem>

                            <ListItem icon>
                                <Left>
                                    <Icon name="message" type="Entypo" style={styles.iconColor}/>
                                </Left>
                                <Body>
                                    <Text style={styles.fontList}>Chats</Text>
                                </Body>
                            </ListItem>

                            <ListItem icon>
                                <Left>
                                    <Icon name="ios-notifications" style={styles.iconColor}/>
                                </Left>
                                <Body>
                                    <Text style={styles.fontList}>Notification</Text>
                                </Body>
                            </ListItem>

                            <ListItem icon>
                                <Left>
                                    <Icon name="data-usage" type="MaterialIcons" style={styles.iconColor}/>
                                </Left>
                                <Body>
                                    <Text style={styles.fontList}>Data and storage usage</Text>
                                </Body>
                            </ListItem>

                            <ListItem icon>
                                <Left>
                                    <Icon name="people" style={styles.iconColor}/>
                                </Left>
                                <Body>
                                    <Text style={styles.fontList}>Invite a friend</Text>
                                </Body>
                            </ListItem>

                            <ListItem icon>
                                <Left>
                                    <Icon name="help-circle" style={styles.iconColor}/>
                                </Left>
                                <Body>
                                    <Text style={styles.fontList}>Help</Text>
                                </Body>
                            </ListItem>
                        </List>
                    </View>
                    
                    
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    settingReducer: state.settingReducer
})

export default connect(mapStateToProps)(Settings)

const styles = StyleSheet.create({
    avatar: {
        borderRadius: 75,
        width: 50,
        height: 50,
        alignSelf: "flex-start"
    },

    iconColor:{
        color:"#128c7e"
    },

    fontList:{
        fontSize: 15
    }
})