import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Icon, Fab, Container, Content, ListItem, Right, Body, Left, Thumbnail, Header } from 'native-base';
import {connect} from 'react-redux';

class Calls extends Component{

    _keyExtractor = (item, index) => item.name;

    _renderItem = ({item, index}) => {
        return (
            <ListItem
                key={index}
                avatar 
            >
                <Left>
                    <Thumbnail source={{ uri: item.pic }} />
                </Left>
                <Body>
                    <Text style={{fontWeight: "bold"}}>{item.name}</Text>
                    <Text note style={styles.dateText}>{item.time}</Text>
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
                        data={this.props.chattingReducer.msgs}
                        extraData={this.props.chattingReducer.msgs}
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

const mapStateToProps = (state) => ({
    chattingReducer: state.chattingReducer
})

export default connect(mapStateToProps)(Calls)

const styles = StyleSheet.create({
    dateText:{
        fontSize: 10
    }
})