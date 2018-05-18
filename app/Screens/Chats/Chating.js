import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { 
  Container, Content, Text, Header, Body, Left, 
  Right, Icon, Button, Thumbnail, Item, Input, View,
  Card, CardItem
} from 'native-base';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import { connect } from 'react-redux';

import { allMsgs } from './action'

class Chatting extends Component{

    constructor(props){
        super(props);

        this.renderBubble = this.renderBubble.bind(this);
    }

    state = {
        name: "",
        msg: "",
        messages: []
    }

    componentWillMount() {
        this.setState({
            messages: [
            {
                _id: 1,
                text: this.props.navigation.state.params.msg,
                createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: this.props.navigation.state.params.name,
                        avatar: null,
                    },
                },
        ],
        })
    }

    componentDidMount(){
        this.setState({
            name: this.props.navigation.state.params.name,
            msg: this.props.navigation.state.params.msg
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                left: {
                    backgroundColor: '#ffffff',
                },
                right:{
                    backgroundColor: '#25d366'
                }
                }}
            />
        );
    }

    render(){
        return(
        <Container>
            <Header style={{backgroundColor: "#128c7e", flexDirection: "row"}} androidStatusBarColor="#075e54">
                <Left style={{flexDirection: "row"}}>
                    <Button transparent onPress={()=>this.props.navigation.goBack()}>
                        <Icon name="arrow-back"/>
                    </Button>
                    <Thumbnail source={{ uri: 'https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/user-512.png' }} style={{width: 40, height: 40, marginTop:2}}/>
                </Left>
                <Body style={{left: 25}}>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "#ffffff"}}>{this.state.name}</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name="videocam"/>
                    </Button>
                    <Button transparent>
                        <Icon name="call"/>
                    </Button>
                    <Button transparent>
                        <Icon name="more"/>
                    </Button>
                </Right>
            </Header>
            
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
                renderBubble={this.renderBubble}
            />
        </Container>
        );
    }

}

export default connect()(Chatting)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preChatting: {
    textAlign: 'center',
    margin: 10,
  },

  buttonSend:{
    top:3,
    right: 2,
    backgroundColor: "#25D366"
  }
});