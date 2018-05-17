import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Icon, Fab, Container, Content, ListItem, Right, Body, Left, Thumbnail, Header } from 'native-base';

export default class Calls extends Component{

    state = {
        callsData: [{
            id: 1,
            name: "Chelsea Islan",
            date: "09.00 AM"
        },
        {
            id: 2,
            name: "Pevita Pearce",
            date: "07.00 AM"
        },
        {
            id: 3,
            name: "Yuna Taira",
            date: "06.00 AM"
        }]
    }

    _keyExtractor = (item, index) => item.name;

    _renderItem = ({item, index}) => {
        return (
            <ListItem
                key={index}
                avatar 
            >
                <Left>
                    <Thumbnail source={{ uri: 'https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/user-512.png' }} />
                </Left>
                <Body>
                    <Text style={{fontWeight: "bold"}}>{item.name}</Text>
                    <Text note style={styles.dateText}>{item.date}</Text>
                </Body>
                <Right>
                    <Icon name="videocam"/>
                </Right>
            </ListItem>
        )
    }


    
    render(){
        return(
            <Container androidStatusBarColor="#075e54">
                <Content>
                    <FlatList
                        data={this.state.callsData}
                        extraData={this.state}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                    />
                </Content>

                <Fab
                    style={{ backgroundColor: '#25D366' }}
                    position="bottomRight"
                    onPress={()=> alert("Coming Soon!")}>
                    <Icon name="call" style={{color: '#ffffff'}}/>
                </Fab>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    dateText:{
        fontSize: 10
    }
})