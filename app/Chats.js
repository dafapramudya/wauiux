import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Icon, Fab, Container, Content, List, ListItem, Left, Thumbnail, Body, Header } from 'native-base';

export default class Chats extends Component{

    // componentDidMount(){
    //     alert(this.props.navigation.state.params.name);
    //     alert(this.props.navigation.state.params.phone);
    // }

    _keyExtractor = (item, index) => item.name;

    state = {
        chatsData: [{
            id: 1,
            name: "Chelsea Islan",
            msg: "Dafa.. besok jalan yuk"
        },
        {
            id: 2,
            name: "Pevita Pearce",
            msg: "Semangat daf kerjanya"
        },
        {
            id: 3,
            name: "Yuna Taira",
            msg: "Dafa, Ganbate kudasai!"
        }]
    }

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
                    <Text style={{fontWeight:"bold"}}>{item.name}</Text>
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
                        data={this.state.chatsData}
                        extraData={this.state}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                    />
                </Content>

                

                <Fab
                    style={{ backgroundColor: '#25D366' }}
                    position="bottomRight"
                    onPress={this.navigateToCreateContact}>
                    <Icon name="message" style={{color: '#ffffff'}} type="Entypo"/>
                </Fab>
            </Container>
        )
    }
}