// Integrated Assignment Mob Dev & Web Cloud 
// The login react native UI is being referenced on the follwing link : https://aboutreact.com/react-native-login-and-signup/
// The react native front end application has: Login Screen, HomeScreen, Expenses and Summary endpoints
// The backend in being coded my controller often tested using postman too
// 21/05/2021 by dener

// Making my imports
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Example, Dener
            {'\n\n'}
            This is the Settings Screen, by Dener
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Splash, Login and Register Example{'\n'}React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
         Please visit the link top comments for references
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;