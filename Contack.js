import * as React from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';

const Contack = ({navigation}) => {
    return (
        <View style ={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Contack Screen</Text>
            <Button title='Go Back'
            onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default Contack;