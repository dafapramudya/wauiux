import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Icon, Fab, Container, Content, List, ListItem, Left, Thumbnail, Body, Header } from 'native-base';
import { connect } from 'react-redux';
import {RkText} from 'react-native-ui-kitten';

import { allMsgs } from './action'

class Chats extends Component{

    componentDidMount(){
        this.props.dispatch(allMsgs())
    }

    navigateToContacts() {
        this.props.dispatch({
            type: 'Navigation/NAVIGATE',
            routeName: 'Contacts',
        })
    }

    _keyExtractor = (item, index) => item.name;

    _renderItem = ({item, index}) => {
        return (
            <ListItem
                key={index}
                onPress={() => this.props.navigation.navigate("Chating", { name: item.name, msg: item.msg })}
                avatar
            >
                <Left>
                    <Thumbnail source={{ uri: 'https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/user-512.png' }} />
                </Left>
                <Body>
                    <RkText style={{fontWeight:"bold"}}>{item.name}</RkText>
                    <Text note>{item.msg}</Text>
                </Body>
            </ListItem>
        )
    }

    render(){
        return(
            <Container androidStatusBarColor="#075e54">
                <Content>
                    <FlatList
                        data={this.props.chattingReducer.msgs}
                        extraData={this.props.chattingReducer.msgs}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                    />
                </Content>

                

                <Fab
                    style={{ backgroundColor: '#25D366' }}
                    position="bottomRight"
                    onPress={()=> this.navigateToContacts()}>
                    <Icon name="message" style={{color: '#ffffff'}} type="Entypo"/>
                </Fab>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    chattingReducer: state.chattingReducer
});

export default connect(mapStateToProps)(Chats)