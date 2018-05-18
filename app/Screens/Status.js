import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Icon, Fab, Container, Content, Left, Body, List, ListItem, Header } from 'native-base';
import {RkText} from 'react-native-ui-kitten';
import {connect} from 'react-redux';

class Status extends Component{
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
                                <RkText>My status</RkText>
                                <Text note>Tap to add status update</Text>
                            </Body>
                        </ListItem>
                    </List>
                    
                </Content>
                <View style={{flex: 1}}>
                    <Fab
                        style={{ backgroundColor: '#ffffff', marginBottom:70 }}
                        position="bottomRight"
                        onPress={()=> alert("Coming Soon!")}>
                        <Icon name="create" style={{color: '#bebebe'}}/>
                    </Fab>

                    <Fab
                        style={{ backgroundColor: '#25D366' }}
                        position="bottomRight"
                        onPress={()=> alert("Coming Soon!")}>
                        <Icon name="camera" style={{color: '#ffffff'}}/>
                    </Fab>
                </View>
            </Container>
        )
    }
}

export default connect()(Status)

const styles = StyleSheet.create({
    avatar: {
        borderRadius: 75,
        width: 50,
        height: 50,
        alignSelf: "flex-start"
    },
})