import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Icon, Fab, Container, Content, List, ListItem, Left, Thumbnail, Body, Header } from 'native-base';
import { connect } from 'react-redux';
import {RkText} from 'react-native-ui-kitten';

import { allContacts } from './action'

class Contacts extends Component{

    componentDidMount(){
        this.props.dispatch(allContacts())
    }

    _keyExtractor = (item, index) => item.name;

    _renderItem = ({item, index}) => {
        return (
            <ListItem
                key={index}
                onPress={() => this.props.navigation.navigate("Chating", { name: item.name, number: item.number })}
                avatar
            >
                <Left>
                    <Thumbnail source={{ uri: 'https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/user-512.png' }} />
                </Left>
                <Body>
                    <RkText style={{fontWeight:"bold"}}>{item.name}</RkText>
                    <Text note>{item.quote}</Text>
                </Body>
            </ListItem>
        )
    }

    render(){
        return(
            <Container androidStatusBarColor="#075e54">
                <Content>
                <ListItem
                    onPress={() => alert("Coming Soon!")}
                    avatar
                >
                    <Left>
                        <Thumbnail source={require("../../assets/img/newGroup.png")} />
                    </Left>
                    <Body>
                        <RkText style={{fontWeight:"bold"}}>New Group</RkText>
                    </Body>
                </ListItem>
                    <FlatList
                        data={this.props.contactsReducer.contacts}
                        extraData={this.props.contactsReducer.contacts}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                    />
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    contactsReducer: state.contactsReducer
});

export default connect(mapStateToProps)(Contacts)

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