import * as React from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';
import { style } from './style';

const Home = ({navigation}) => {
    return (
        <View style={style.container}>
            <Text style={style.jarak}>Home Screen</Text>
        <View style={style.container2}>
            <View style={{marginBottom:10}}>
            <Button title='About'
            onPress={()=>navigation.navigate('About')}/>
        </View>
        <View style={{marginBottom:10}}>
            <Button title='Account'
            onPress={()=>navigation.navigate('Account')}/>
            </View>
        <View style={{marginBottom:10}}>
            <Button title='Contack'
            onPress={()=>navigation.navigate('Contack')}/>
            </View>
        </View>
        </View>
    );
};

export default Home;