import * as React from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';

const Account = ({navigation}) => {
    return (
        <View style ={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Account Screen</Text>
            <Button title='Go Back'
            onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
};

export default Account;