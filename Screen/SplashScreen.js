// Integrated Assignment Mob Dev & Web Cloud 
// The login react native UI is being referenced on the follwing link : https://aboutreact.com/react-native-login-and-signup/
// The react native front end application has: Login Screen, HomeScreen, Expenses and Summary endpoints
// The backend in being coded my controller often tested using postman too
// 21/05/2021 by dener

// Making my imports
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

//Making splash animation aaiting users credentials
const SplashScreen = ({navigation}) => {

  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);

      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'DrawerNavigationRoutes'
        ),
      );
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/aboutreact.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;
 
//Creating style sheet for my splash screen adding color, alignment
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});