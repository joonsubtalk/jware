import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';

const Home = () => (
    <Text>HOME</Text>
)

const Level = () => (
    <Text>Level</Text>
)

export class JWare extends Component {
    render() {
        return (
            <NativeRouter>
                <View>
                    <Route exact path="/" component={Home} />
                    <Route path="/lvl" component={Level} />
                </View>
            </NativeRouter>
        )
    }
}

export default JWare;